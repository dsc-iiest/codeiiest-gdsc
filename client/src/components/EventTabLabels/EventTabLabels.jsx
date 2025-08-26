import { useEffect, useRef } from "react";
import "./EventTabLabels.css";

export default function EventTabLabels(
    {
        title,
        miniTitle,
        imageVariant = "uiux",
        isClicked,
        onClick
    }
) {
    // const outerDivRef = useRef()
    // useEffect(() => {
    //     if (isClicked && outerDivRef.current) {
    //         outerDivRef.current.scrollIntoView({ behaviour: "smooth", block: "end" })
    //     }
    // }, [isClicked])

    const tabRef = useRef(null);

    useEffect(() => {
        if (isClicked && tabRef.current) {
            tabRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }
    }, [isClicked]);

    return (
        <div 
            ref={tabRef}
            onClick={onClick} 
            className={`outerDivTab ${isClicked ? 'active' : ''}`}
        >
            <img 
                src={`/assets/thumbnail/${imageVariant}.png`} 
                className="event-thumbnail"
            />
            <div className="tabLabels-wrapper">
                <div className={`section1 ${isClicked ? 'active' : ''}`}>
                    <div className="title">
                        <h1>{title}</h1>
                        <h4>{miniTitle}</h4>
                    </div>
                </div>
            </div>
        </div>

    )



}
