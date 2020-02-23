import React from 'react';
import './App.scss';

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
        <div className="my-profile__body container">
          <div className="my-profile__header">
              <div className="my-profile__bg img-cover header-cover black-cover"/>
              <div className="my-profile__info">
                <div>

                </div>
                <div className="my-profile__name">
                  Crumina
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
