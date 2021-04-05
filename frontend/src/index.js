import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter , Switch, Route} from 'react-router-dom';

import home from './home';
import login from './signinform'
import signup from './Form'
import reportWebVitals from './reportWebVitals';
import loginhome from './loginhome'
import Design from './components/Designs'



class Start extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={home}/>
          <Route exact path={"/login"} component={login} />
          <Route exact path={"/loginhome"} component={loginhome} />
          <Route exact path={"/signup"} component={signup} />
          <Route exact path={"/designs"} component={Design} />

        
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <Start />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
