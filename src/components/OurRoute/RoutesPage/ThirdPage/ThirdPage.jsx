import React from 'react';
import ThirdPageInfo from "./ThirdPageInfo";
import ThirdPageImg from "./ThirdPageImg";
import ThirdLine from "./ThirdLine";

function ThirdPage({ Line, setActive, price, Rubl, TimeImg, time, Location, distance, Complexity, InfoComplexity, Route, info, ThirdQadroFirst, ThirdQadroSecend, ThirdQadroThird }) {
    return (
        <>
            <ThirdLine
                Line={Line}
            />
            <ThirdPageInfo
                setActive={setActive}
                price={price}
                Rubl={Rubl}
                TimeImg={TimeImg}
                time={time}
                Location={Location}
                distance={distance}
                Complexity={Complexity}
                InfoComplexity={InfoComplexity}
                Route={Route}
                info={info}
            />

            <ThirdPageImg
                ThirdQadroFirst={ThirdQadroFirst}
                ThirdQadroSecend={ThirdQadroSecend}
                ThirdQadroThird={ThirdQadroThird}
            />
        </>
    )
}

export default ThirdPage