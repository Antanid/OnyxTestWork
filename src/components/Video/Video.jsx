import React from 'react';
import './sass/Style.scss';

class Video extends React.Component {
  render() {
    return (
      <section className="section__video">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="video__border">
                <iframe
                  className="video__bord"
                  width="1078"
                  height="430"
                  src="https://www.youtube.com/embed/kEPfM3jSoBw?controls=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Video;
