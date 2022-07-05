import React from 'react';
import PropTypes from 'prop-types';
import SecendPageInfo from './SecendPageInfo';
import SecendPageImg from './SecendPageImg';
import SecendLine from './SecendLine';

function SecendPage({
  OpenPopUp,
  Line,
  Rubl,
  TimeImg,
  Location,
  Complexity,
  Route,
  SecendQadroFirst,
  SecendQadroSecend,
  SecendQadroThird
}) {
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
        OpenPopUp={OpenPopUp}
        Rubl={Rubl}
        TimeImg={TimeImg}
        Location={Location}
        Complexity={Complexity}
        Route={Route}
      />
    </>
  );
}

export default SecendPage;

SecendPage.propTypes = {
  OpenPopUp: PropTypes.func.isRequired,
  Line: PropTypes.string.isRequired,
  Rubl: PropTypes.string.isRequired,
  TimeImg: PropTypes.string.isRequired,
  Location: PropTypes.string.isRequired,
  Complexity: PropTypes.string.isRequired,
  Route: PropTypes.string.isRequired,
  SecendQadroFirst: PropTypes.string.isRequired,
  SecendQadroSecend: PropTypes.string.isRequired,
  SecendQadroThird: PropTypes.string.isRequired
};
