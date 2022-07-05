import React from 'react';
import PropTypes from 'prop-types';
import ThirdPageInfo from './ThirdPageInfo';
import ThirdPageImg from './ThirdPageImg';
import ThirdLine from './ThirdLine';

function ThirdPage({
  Line,
  OpenPopUp,
  Rubl,
  TimeImg,
  Location,
  Complexity,
  Route,
  ThirdQadroFirst,
  ThirdQadroSecend,
  ThirdQadroThird
}) {
  return (
    <>
      <ThirdLine
        Line={Line}
      />
      <ThirdPageInfo
        OpenPopUp={OpenPopUp}
        Rubl={Rubl}
        TimeImg={TimeImg}
        Location={Location}
        Complexity={Complexity}
        Route={Route}
      />

      <ThirdPageImg
        ThirdQadroFirst={ThirdQadroFirst}
        ThirdQadroSecend={ThirdQadroSecend}
        ThirdQadroThird={ThirdQadroThird}
      />
    </>
  );
}

export default ThirdPage;

ThirdPage.propTypes = {
  Line: PropTypes.string.isRequired,
  OpenPopUp: PropTypes.func.isRequired,
  Rubl: PropTypes.string.isRequired,
  TimeImg: PropTypes.string.isRequired,
  Location: PropTypes.string.isRequired,
  Complexity: PropTypes.string.isRequired,
  Route: PropTypes.string.isRequired,
  ThirdQadroFirst: PropTypes.string.isRequired,
  ThirdQadroSecend: PropTypes.string.isRequired,
  ThirdQadroThird: PropTypes.string.isRequired,
};
