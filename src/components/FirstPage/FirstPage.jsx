import React from 'react';
import PropTypes from 'prop-types';
import FirstPageInfo from './FirstPageInfo';
import FirstPageImg from './FirstPageImg';
import FirstLine from './FirstLine';

function FirstPage({
  OpenPopUp,
  Line,
  price,
  Rubl,
  TimeImg,
  time,
  Location,
  distance,
  Complexity,
  InfoComplexity,
  Route,
  info,
  Qadro,
  QadroSecend,
  QadroThird
}) {
  return (
    <>
      <FirstLine
        Line={Line}
      />
      <FirstPageInfo
        OpenPopUp={OpenPopUp}
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
  );
}

export default FirstPage;

FirstPage.propTypes = {
  OpenPopUp: PropTypes.func.isRequired,
  Line: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  Rubl: PropTypes.string.isRequired,
  TimeImg: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  Location: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  Complexity: PropTypes.string.isRequired,
  InfoComplexity: PropTypes.string.isRequired,
  Route: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  Qadro: PropTypes.string.isRequired,
  QadroSecend: PropTypes.string.isRequired,
  QadroThird: PropTypes.string.isRequired,
};
