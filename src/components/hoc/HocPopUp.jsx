import React, { useState } from "react";

export const HOC = (Component, ComponentTwo) => {
    const HandleChange = (props) => {
        const [active, setActive] = useState(false);

        function open() {
            setActive(true)
            console.log(active)
        }

        function close() {
            setActive(false)
        }
        return (
            <div>
                <Component
                    open={open}
                    {...props} />
                <ComponentTwo
                    close={close}
                    actives={active} />
            </div>
        )
    }
    return HandleChange;
}


