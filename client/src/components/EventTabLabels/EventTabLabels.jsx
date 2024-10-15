import { useEffect, useRef } from "react";
import "./EventTabLabels.css";

export default function EventTabLabels(
    {
        title,
        miniTitle,
        //imageVariant
        isClicked,
        onClick
    }
) {

    //taking sample values for datas which we willl get via props

    const outerDivRef = useRef()
    const imageVariant = 'uiux';
    useEffect(() => {
        if (isClicked && outerDivRef.current) {
            outerDivRef.current.scrollIntoView({ behaviour: "smooth", block: "end" })
        }
    }, [isClicked])
    // const isClicked = true;

    return (
        <div onClick={onClick} ref={outerDivRef} className="outerDivTab">

            <img src={`/assets/thumbnail/${imageVariant}.png`} />


            <div className="tabLabels-wrapper">

                <div 
                    style={isClicked ? { "background": "var(--gradient1)" } : { "background": "linear-gradient(135deg, rgba(239, 231, 231, 0.18), rgba(211, 204, 204, 0.185))"}} 
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
