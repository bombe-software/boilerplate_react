import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Formulario from './formulario' 

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/" component={Formulario} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </ div>
        );
    }
}

export default App;
