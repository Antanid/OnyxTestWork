import React from 'react';
import PropTypes from 'prop-types';
import FirstPageInfo from './FirstPageInfo';
import FirstPageImg from './FirstPageImg';
import FirstLine from './FirstLine';

function FirstPage({
  OpenPopUp,
  Line,
  Rubl,
  TimeImg,
  Location,
  Complexity,
  Route,
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
        Rubl={Rubl}
        TimeImg={TimeImg}
        Location={Location}
        Complexity={Complexity}
        Route={Route}
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
  Rubl: PropTypes.string.isRequired,
  TimeImg: PropTypes.string.isRequired,
  Location: PropTypes.string.isRequired,
  Complexity: PropTypes.string.isRequired,
  Route: PropTypes.string.isRequired,
  Qadro: PropTypes.string.isRequired,
  QadroSecend: PropTypes.string.isRequired,
  QadroThird: PropTypes.string.isRequired,
};
