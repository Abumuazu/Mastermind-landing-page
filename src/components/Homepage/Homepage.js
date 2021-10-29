import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

const Homepage = () => {
    return (
        <div className="nk-body body-wider mode-onepage" >
           
            <div className="nk-wrap">
           
              <Header />
              <Main />
              <Footer />
            </div>
          </div>
    );
};

export default Homepage;