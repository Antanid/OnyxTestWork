import React from "react";

class PreEndView extends React.Component {
    render() {
        return (
            <div className="col-lg-10 col-sm-6">
                <div className="footer__all">
                    <div className="footer__menu">
                        <ul>
                            {
                                this.props.footerLi.map((item, index) => {
                                    return (
                                        <li key={index}><a href={item.href}>{item.text}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default PreEndView;