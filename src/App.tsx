import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import AboutMe from "./aboutMe/AboutMe";
import Contacts from "./contacts/Contacts";

function App() {
    return (
        <div className="App">
            <div>
                <Header/>
            </div>
            <div className={'information'}>
                <Main />
                <AboutMe />
                <Skills />
                <Projects />
                <Contacts />
            </div>
        </div>
    );
}

export default App;
