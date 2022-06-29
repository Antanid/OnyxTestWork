import React from 'react';
import PropTypes from 'prop-types';
import SecendPageInfo from './SecendPageInfo';
import SecendPageImg from './SecendPageImg';
import SecendLine from './SecendLine';

function SecendPage({
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
  );
}

export default SecendPage;

SecendPage.propTypes = {
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
  SecendQadroFirst: PropTypes.string.isRequired,
  SecendQadroSecend: PropTypes.string.isRequired,
  SecendQadroThird: PropTypes.string.isRequired
};
