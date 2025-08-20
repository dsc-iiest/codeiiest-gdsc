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
    const tabRef = useRef();

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
                className="tab-image"
            />
            <div className="tabLabels-wrapper">
                <div
                    style={isClicked ? { "background": "var(--gradient2)" } : { "background": "linear-gradient(135deg, rgba(239, 231, 231, 0.18), rgba(211, 204, 204, 0.185))" }}
                    className="section1">
                    <div className="title">
                        <h1>{title}</h1>
                        <h4>{miniTitle}</h4>
                    </div>
                </div>
            </div>
        </div>
    )



}
