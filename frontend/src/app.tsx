import React from 'react';
import ListView from "./components/common/news/listview.component";
import MenuLayout from './components/common/MenuLayout';
import { TabProvider } from "./components/common/TabContext";
import AboutMe from "./AboutMe";
import Test from "./pages/test";
import {Routes,BrowserRouter as Router, Route} from 'react-router-dom'

const App :React.FC= () => {
    return (
        <>
            <Router>
                    <MenuLayout children={undefined} />
                    <Routes>
                        <Route path='/' element={<AboutMe />}/>
                        <Route path='/list'  element={<ListView />}/>
                        <Route path='/test'  element={<Test />}/>
                    </Routes>
            </Router>
        </>
    )
};

export default App;