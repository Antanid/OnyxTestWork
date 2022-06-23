import React, { useContext } from 'react';
import { ThemeContext } from '../../Сontext/ThemeProvider';
import FooterView from './FooterView';

function Footer() {
  const themes = useContext(ThemeContext);
  return (
    <div style={themes}>
      <FooterView>
        © CFMOTO Experience Karpati. Позашляховий полігон CFMOTO та прокат квадроциклів у
        Карпатах.
      </FooterView>
    </div>
  );
}

export default Footer;
