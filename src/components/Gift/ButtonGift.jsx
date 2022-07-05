import React from 'react';
import { useTranslation } from 'react-i18next';
import Buttons from '../Button/Buttons';

function ButtonGift() {
  const { t } = useTranslation();
  return (
    <Buttons className="gift__button">
      {t('gift.ButtonGift')}
    </Buttons>
  );
}

export default ButtonGift;
