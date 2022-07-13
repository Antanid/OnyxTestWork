import React from 'react';
import { useTranslation } from 'react-i18next';

import FirstPhoto from '../../assets/img/Photo.svg';
import SecendPhoto from '../../assets/img/Photo2.svg';
import ThirdPhoto from '../../assets/img/Photo3.svg';
import FourPhoto from '../../assets/img/ThirdRout.svg';
import FivePhoto from '../../assets/img/ThirdRout2.svg';
import PhotoText from './PhotoText';
import PhotoSlider from './PhotoSlider';

function Photo() {
  const { t } = useTranslation('', { keyPrefix: 'photo' });
  return (
    <section className="section__photo">
      <div className="container-fluid">
        <div className="row">
          <PhotoText>
            {t('PhotoText')}
          </PhotoText>
          <PhotoSlider
            FirstPhoto={FirstPhoto}
            SecendPhoto={SecendPhoto}
            ThirdPhoto={ThirdPhoto}
            FourPhoto={FourPhoto}
            FivePhoto={FivePhoto}
          />
        </div>
      </div>
    </section>
  );
}

export default Photo;
