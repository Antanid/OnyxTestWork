import React from 'react';
import { useTranslation } from 'react-i18next';
import Buttons from '../Button/Buttons';

function SpecialButton() {
  const { t } = useTranslation();
  return (
    <div className="spec__but">
      <Buttons
        className="spec__offer__but"
      >
        {t('specialOffer.ButtonSpecial')}
      </Buttons>
    </div>
  );
}

export default SpecialButton;
