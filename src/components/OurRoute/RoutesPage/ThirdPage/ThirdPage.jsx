import React from 'react';
import PropTypes from 'prop-types';
import ThirdPageInfo from './ThirdPageInfo';
import ThirdPageImg from './ThirdPageImg';
import ThirdLine from './ThirdLine';

function ThirdPage({
  Line,
  setActive,
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
  );
}

export default ThirdPage;

ThirdPage.propTypes = {
  Line: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
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
  ThirdQadroFirst: PropTypes.string.isRequired,
  ThirdQadroSecend: PropTypes.string.isRequired,
  ThirdQadroThird: PropTypes.string.isRequired,
};
