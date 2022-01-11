import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Content } from 'carbon-components-react';
import MainHeader from './components/header/Header';
import './App.scss';
import LandingPage from './content/landingPage/LandingPage';
import AboutProjectPage from './content/aboutProjectPage/AboutProjectPage';

class App extends Component {
    render() {
        return (
            <>
                <MainHeader />
                <Content>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/repos" component={AboutProjectPage} />
                    </Switch>
                </Content>
            </>
        );
    }
}

export default App