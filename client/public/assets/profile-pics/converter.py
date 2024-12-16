import os
import asyncio
from PIL import Image

input_dir = './client/public/assets/profile-pics'
output_dir = './client/public/assets/profile-pics'

# Ensure output directory exists
os.makedirs(output_dir, exist_ok=True)

# Function to resize and convert image to WEBP format
async def resize_and_convert(input_path, output_path):
    try:
        with Image.open(input_path) as img:
            img = img.resize((700, 700), Image.LANCZOS)
            img.save(output_path, 'WEBP', quality=80)
    except Exception as e:
        print(f"Failed to convert {input_path}: {e}")
        return False
    return True

async def convert_images():
    count = 0
    failed = []
    try:
        files = os.listdir(input_dir)
        print(files)
        for file in files:
            if file.lower().endswith('.jpeg'):
                input_path = os.path.join(input_dir, file)
                output_path = os.path.join(output_dir, file.rsplit('.', 1)[0] + '.webp')
                print(f"Processing {input_path}")
                success = await resize_and_convert(input_path, output_path)
                if success:
                    count += 1
                else:
                    failed.append(input_path)
        print("CONVERSION COMPLETE")
        print(f"Converted {count} files.")
        print("Failed conversions:", failed)
    except Exception as e:
        print("An error occurred:", e)

# Run the conversion function
asyncio.run(convert_images())
