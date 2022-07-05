import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function BattonText({
  SelectLng,
  OpenToggle,
  lngs,
  selectLang,
  bullSelect
}) {
  const { i18n } = useTranslation();
  return (
    <ul>
      <li>
        <a
          href="/"
          role="button"
          onClick={(e) => OpenToggle(e)}
          onKeyDown={(e) => OpenToggle(e)}
        >
          {selectLang}
        </a>
      </li>
      {
        bullSelect && Object.keys(lngs).map((lng) => (
          <li
            key={lng}
            style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
            type="submit"
          >
            <a
              href="/"
              role="button"
              onClick={(e) => SelectLng(lng, e)}
            >
              {lngs[lng].nativeName}
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default BattonText;

BattonText.defaultProps = {
  selectLang: 'en',
};

BattonText.propTypes = {
  SelectLng: PropTypes.func.isRequired,
  OpenToggle: PropTypes.func.isRequired,
  lngs: PropTypes.shape({
    en: PropTypes.objectOf(PropTypes.string),
    ua: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  selectLang: PropTypes.string,
  bullSelect: PropTypes.bool.isRequired,
};
