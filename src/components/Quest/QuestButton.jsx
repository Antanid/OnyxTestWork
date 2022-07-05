import React from 'react';
import { useTranslation } from 'react-i18next';
import Buttons from '../Button/Buttons';

function QuestButton() {
  const { t } = useTranslation();
  return (
    <div className="dialog__butt__block">
      <Buttons className="dialog__button">
        {t('questions.ButtonQuest')}
      </Buttons>
    </div>
  );
}

export default QuestButton;
