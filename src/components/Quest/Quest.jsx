import React, { useState } from "react";
import styled from "styled-components";

const Question = ({ items }) => {
    /*   
        const toggle = (index) => {
            if (clicked === index) {
                return setClicked(null)
            }
            setClicked(index)
        } */
    const [clicked, setClicked] = useState(null);
    const toggle = (index) => {
        if (clicked == index) {
            return setClicked(null)
        }
        setClicked(index)
    }

    return (

        <div className="accordion">
            {
                items.map((item, index) => (
                    <div 
                    key={index}
                    className="item">

                        <div
                            onClick={() => toggle(index)}
                            className="accordion-item">
                            <div className={clicked === index ? "accordion-item-header active" : "accordion-item-header"}>
                                <p>{item.actualTask}</p>
                            </div>
                        </div>

                        <div className={clicked === index ? "accordion-item-body.active" : "accordion-item-body"}>
                            <div className="accordion-item-body-content">
                                <p> {item.answer}</p>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>



        /*  <div className="accordion_section">
             {
                 items.map((item, index) => (
                     <div className="accordion">
 
                         <div
                             key={index}
                             onClick={() => toggle(index)}
                             className="accordion-item">
                             <div className={clicked === index ? "accordion-item-header active" : "accordion-item-header "}>
                                 <p>Актуальный вопрос?</p>
                             </div>
                         </div>
 
                        { clicked === index ? <div className="accordion-item-body">
                             <div className="accordion-item-body-content">
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati saepe beatae quod iste autem mollitia aperiam incidunt expedita. Doloremque veniam corporis a explicabo aliquid dolores dolor neque excepturi, repellat obcaecati?</p>
                             </div>
                         </div> : null}
 
                     </div>
                 ))
             }
         </div> */

    );
}

export default Question;