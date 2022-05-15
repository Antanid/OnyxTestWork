import React from "react";
import FooterView from "./FooterView";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <FooterView>© CFMOTO Experience Karpati. Позашляховий полігон CFMOTO та прокат квадроциклів у
                            Карпатах.</FooterView>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;