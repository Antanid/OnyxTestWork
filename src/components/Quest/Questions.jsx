import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Quest from '../../assets/img/QuestDialog.png';
import QuestAccordion from './QuestAccordion';
import QuestAdditional from './QuestAdditional';
import QuestContact from './QuestContact';
import QuestHeader from './QuestHeader';

import './sass/Style.scss';

function Questions() {
  const [questions] = useState(
    [
      {
        id: 1,
        actualTask: 'questions.FirstTask',
        answer: 'questions.FirstAnswer'
      },
      {
        id: 2,
        actualTask: 'questions.SecondTask',
        answer: 'questions.SecondAnswer',
      },
      {
        id: 3,
        actualTask: 'questions.ThirdTask',
        answer: 'questions.ThirdAnswer',
      },
      {
        id: 4,
        actualTask: 'questions.FourthTask',
        answer: 'questions.FourthAnswer',
      },
    ]
  );
  const { t } = useTranslation('', { keyPrefix: 'questions' });
  return (
    <section className="section__questions">
      <div className="container">
        <div className="row">
          <QuestHeader>{t('QuestionsHeader')}</QuestHeader>
          <QuestAccordion QuestionText={questions} />
          <QuestContact
            contactText={t('QuestionsContactText')}
            haveQuestions={t('HaveQuestions')}
            QuestImg={Quest}
          />
          <QuestAdditional>{t('AdditionalQuest')}</QuestAdditional>
        </div>
      </div>
    </section>
  );
}

export default Questions;
