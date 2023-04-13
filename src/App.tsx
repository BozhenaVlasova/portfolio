import React, {useState} from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import AboutMe from "./aboutMe/AboutMe";
import Contacts from "./contacts/Contacts";

type ThemeContextType = {
    switchColor: string;
    onClickSwitch: () => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
    switchColor: "light",
    onClickSwitch: () => {
    },
});

function App() {
    let [switchColor, setSwitchColor] = useState('dark')
    const onClickSwitch = () => {
        setSwitchColor(switchColor === 'light' ? 'dark' : 'light')
    }
    return (
        <ThemeContext.Provider value={{switchColor, onClickSwitch}}>
            <div className="App">
                <div>
                    <Header/>
                </div>
                <div className={'information'}>
                    <Main/>
                    <AboutMe/>
                    <Skills/>
                    <Projects/>
                    <Contacts/>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
