import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import './app.styless.scss';

const App = () => {
    return (
        <div className='app__container'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default App;
