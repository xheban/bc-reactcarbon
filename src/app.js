import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button, Content } from 'carbon-components-react';
import MainHeader from './components/header/header';
import './app.scss';
import Login from './content/login/login';
import AboutProject from './content/aboutProject/aboutProject';

const isLoggedIn = false;

class App extends Component {
    render() {
        return (
            <>
                <MainHeader />
                <Content>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/repos" component={AboutProject} />
                    </Switch>
                </Content>
            </>
        );
    }
}

export default App