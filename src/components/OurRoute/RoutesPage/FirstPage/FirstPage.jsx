import React from 'react';
import FirstPageInfo from "./FirstPageInfo";
import FirstPageImg from "./FirstPageImg";
import FirstLine from "./FirstLine";


function FirstPage({ Line, setActive, price, Rubl, TimeImg, time, Location, distance, Complexity, InfoComplexity, Route, info, Qadro, QadroSecend, QadroThird }) {
    return (
        <>
        <FirstLine
                Line={Line}
            />
            <FirstPageInfo
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
            <FirstPageImg
                Qadro={Qadro}
                QadroSecend={QadroSecend}
                QadroThird={QadroThird}
            />
        </>
    )
}



export default FirstPage