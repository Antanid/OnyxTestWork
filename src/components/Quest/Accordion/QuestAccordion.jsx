import React, { useState } from "react";
import Quest from "./Quest";




const QuestAccordion = ({ items }) => {

    const [clicked, setClicked] = useState(null);
    const toggle = (index) => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }
    return (
        <div className="col-lg-6">
            <div className="accordion">
                <Quest
                    toggle={toggle}
                    clicked={clicked}
                    items={items}
                />
            </div>
        </div>

    );
}


export default QuestAccordion;


