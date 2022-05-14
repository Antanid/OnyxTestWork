import React from 'react'

function PopUpForm({dateText, howMuch, phoneNumber, backToYou, book, online}) {
    return (
        <div className="popup__backgr">
            <div className="col-lg-12">
                <div className="popup_form_h3">
                    <h3>{online}</h3>
                </div>
            </div>

            <div className="col-lg-10">
                <form className="popup_form">
                    <label>
                        <div className="label_data">
                            <h5>{dateText}</h5>
                        </div>
                        <input type="date" name="date" />
                    </label>

                    <label>
                        <div className="label_data">
                            <h5>{howMuch}</h5>
                        </div>
                        <input type="number" name="number" />
                    </label>
                </form>
            </div>

            <div className="col-lg-10">
                <form className="popup_form">
                    <label>
                        <div className="label_data">
                            <h5>{phoneNumber}</h5>
                        </div>
                        <input type="phone" name="phone" />
                    </label>

                    <label>
                        <div className="label_data">
                            <h5>{backToYou}</h5>
                        </div>
                        <input type="text" name="text" />
                    </label>
                </form>
            </div>

            <div className="col-lg-12">
                <div className="popup_form_button">
                    <button>{book}</button>
                </div>
            </div>
        </div>
    )
}

export default PopUpForm