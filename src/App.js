import React from 'react';
import './App.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar, faStarHalfAlt, faf } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <div className="header__body container">
          <div className="logo">
            <img className="logo__icon logo-img " alt="Logo" src="https://i.pinimg.com/originals/d9/12/09/d91209340bdc005936c46323a62caaff.png" />
          </div>
          <nav className="menu header__nav">
            <div className="menu__item">
              <a className="menu__link" href="#">Home</a>
            </div>
            <div className="menu__item">
              <a className="menu__link" href="#">Messages</a>
            </div>
            <div className="menu__item">
              <a className="menu__link" href="#">News</a>
            </div>
            <div className="menu__item">
              <a className="menu__link" href="#">Music</a>
            </div>
          </nav>
        </div>
      </header>
      <div className="my-profile">
        <div className="my-profile__body">
          <div className="my-profile__header">
            <div className="my-profile__upper-header">
              <div className="my-profile__bg img-cover header-cover black-cover" />
              <div className="my-profile__info container">
                <div className="my-profile__image">
                  <img className="my-profile__avatar avatar" src="https://olympus.crumina.net/wp-content/uploads/avatars/1/5c24a6689aa5b-bpfull.jpg" />
                </div>
                <div className="my-profile__meta">
                  <div className="flex-left">
                    <div className="my-profile__name">
                      <h2 className="white-text">Crumina</h2>
                    </div>
                    <div className="my-profile__location">
                      <FontAwesomeIcon className="f-icon white-text" icon={faMapMarkerAlt} />
                      <small className="white-text uppercase">Ukraine</small>
                    </div>
                  </div>
                  <div className="flex-right">
                    <div className="my-profile__rating">
                      <div className="my-profile__stars stars">
                        <FontAwesomeIcon className="f-icon" icon={faStar} />
                        <FontAwesomeIcon className="f-icon" icon={faStar} />
                        <FontAwesomeIcon className="f-icon" icon={faStar} />
                        <FontAwesomeIcon className="f-icon" icon={faStar} />
                        <FontAwesomeIcon className="f-icon half-star" icon={faStarHalfAlt} />
                      </div>
                      <div className="separator white-text">
                        •
                        </div>
                      <div className="my-profile__rate">
                        <span className="uppercase white-text small-text">4.67 out of 5</span>
                      </div>
                      <div className="separator white-text">
                        •
                        </div>
                      <div className="my-profile__rate-count ">
                        <span className="uppercase white-text small-text">3 ratings</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-profile__lower-header">
              <div className="my-profile__social container">
                <div className="my-profile__links social flex-left">
                  <a href="#" className="social__link social__link_facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#" className="social__link social__link_twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" className="social__link social__link_instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
                <div className="my-profile__stats flex-right">
                  <div className="count-info">
                    <div className="s-number">
                      21
                    </div>
                    <h3 className="s-info uppercase">posts</h3>
                  </div>
                  <div className="count-info">
                    <div className="s-number">
                      4
                    </div>
                    <h3 className="s-info uppercase">comments</h3>
                  </div>
                  <div className="count-info">
                    <div className="s-number">
                      56
                    </div>
                    <h3 className="s-info uppercase">views</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-profile__content">
            
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
