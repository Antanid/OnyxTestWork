import React from "react";

class Test extends React.Component {
    render() {
        return (
            <section className="section_test">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="test">
                                <div className="test__text">
                                    <h3 className="test__h3">Важко вибрати маршрут?
                                    </h3>
                                    <h5 className="test__h5">Пройдіть тест і ми допоможемо вам підібрати оптимальну під вас
                                        екскурсію
                                    </h5>
                                </div>
                                <div className="test__button">
                                    <button className="test__butt">Почати тест
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Test;
