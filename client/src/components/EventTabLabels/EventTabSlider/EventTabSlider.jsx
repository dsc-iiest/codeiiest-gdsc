export default function EventTabSlider({ imageNumber, totalImages }) {

  const heightOfEachSlider = 90/totalImages;
  const smallSliderStyle = {
    width: "1rem",
    height: `${heightOfEachSlider}%`,
    cursor: "pointer",
    borderRadius: "1rem"
  };

  const imagesRender = [];
  for (let cnt = 1; cnt <= totalImages; cnt++) imagesRender.push(cnt);

  return (
    <>
      {imagesRender.map((cnt) => (
        <div className="test" key={cnt} 
              style={{ ...smallSliderStyle, backgroundColor: `${cnt === imageNumber? "blue": "white"}`, }}>
        </div>
      ))}
    </>
  );
}
