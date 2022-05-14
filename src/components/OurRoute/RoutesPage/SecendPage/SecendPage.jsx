import React from 'react';
import SecendPageInfo from "./SecendPageInfo";
import SecendPageImg from "./SecendPageImg";
import SecendLine from "./SecendLine";

function SecendPage({ Line, setActive, price, Rubl, TimeImg, time, Location, distance, Complexity, InfoComplexity, Route, info, SecendQadroFirst, SecendQadroSecend, SecendQadroThird }) {
    return (
        <>
            <SecendPageImg
                SecendQadroFirst={SecendQadroFirst}
                SecendQadroSecend={SecendQadroSecend}
                SecendQadroThird={SecendQadroThird}
            />
            <SecendLine
                Line={Line}
            />
            <SecendPageInfo
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
        </>
    )
}

export default SecendPage