const validateData = async (data) => {
 
  const invalidUsername = [];
  const validData = [];
  try {
    const allUsername = data.map((entry) => entry["Codeforce  Handle "]);
   
    for (let index = 0; index < allUsername.length; index++) {
      const un = allUsername[index];
      try {
        const response = await fetch(
          `https://codeforces.com/api/user.info?handles=${un}`
        );
        const resData = await response.json();
        // console.log(`Checked: ${un} - Status: ${resData.status}`);
        if (resData.status === "FAILED") {
          invalidUsername.push(un);
        } else {
          validData.push(data[index]);
        }
      } catch (error) {
        console.error(`Error checking username: ${un}`, error);
        invalidUsername.push(un);
      }

      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  } catch (error) {
    console.error("Error in validation process:", error);
  }

  return { invalidUsername, validData };
};

export{validateData}