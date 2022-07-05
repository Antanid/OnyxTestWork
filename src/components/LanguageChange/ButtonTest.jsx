/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ButtonText from './BattonText';
import './sass/my.scss';

function ButtonTest() {
  const [selectLang, setSelectLang] = useState(null);
  const [bullSelect, setBullSelect] = useState(false);
  const { i18n } = useTranslation();
  useEffect(() => {
    setSelectLang(i18n.resolvedLanguage);
  }, []);
  const lngs = {
    en: { nativeName: 'English' },
    ua: { nativeName: 'Україньска' },
  };

  function SelectLng(lng, e) {
    i18n.changeLanguage(lng);
    setSelectLang(lng);
    setBullSelect(false);
    e.preventDefault();
  }
  function OpenToggle(e) {
    setBullSelect(!bullSelect);
    e.preventDefault();
  }

  return (
    <div className="col-lg-6">
      <div className="lang_main">
        <ButtonText
          SelectLng={SelectLng}
          OpenToggle={OpenToggle}
          lngs={lngs}
          selectLang={selectLang}
          bullSelect={bullSelect}
        />
      </div>
    </div>
  );
}

export default ButtonTest;
