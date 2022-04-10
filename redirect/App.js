import './App.css';
import React, { Component } from 'react';
import Docs from './component/Docs'
import Menu from './component/Menu'
import Tutorials from './component/Tutorials'
import Community from './component/Community'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import ErrorPage from './component/ErrorPage'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      underConst: {
        Docs: false,
        Tutorials: true,
        Community: true
      }
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter >
          <Menu />
          <Switch>
            <Route exact path="/" component={Docs} />
                      <Route exact path="/tutorial" component={Tutorials}/>

{/*             <Route exact path="/tutorial" render={() => (
              this.state.underConst.Tutorials ? (<Redirect to="/" />) : (<Tutorials />)
            )} /> */}
            <Route exact path="/community" component={Community} />
            <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
