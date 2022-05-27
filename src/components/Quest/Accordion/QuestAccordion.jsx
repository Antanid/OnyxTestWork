import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import Quest from "./Quest";




const QuestAccordion = ({ items }) => {

    const [clicked, setClicked] = useState(null);

    const toggle = (index) => {
         setClicked(clicked===index ?  null : index) 
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


