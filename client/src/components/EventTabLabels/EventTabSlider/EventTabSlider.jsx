export default function EventTabSlider({ imageNumber, totalImages, onClick }) {

  const heightOfEachSlider = 90/totalImages;
  const smallSliderStyle = {
    width: "0.4rem",
    height: `${heightOfEachSlider}%`,
    cursor: "pointer",
    borderRadius: "1rem"
  };

  const imagesRender = [];
  for (let cnt = 1; cnt <= totalImages; cnt++) imagesRender.push(cnt);

  return (
    <>
      {imagesRender.map((cnt ) => (
        <div onClick={() => onClick(cnt)} className="test" key={cnt} 
              style={{ ...smallSliderStyle, backgroundColor: `${cnt === imageNumber? "blue": "white"}`, }}>
        </div>
      ))}
    </>
  );
}
