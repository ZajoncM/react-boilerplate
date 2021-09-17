import React, { FunctionComponent } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ClickPage from 'views/ClickPage/ClickPage';
import WelcomePage from 'views/WelcomePage/WelcomePage';

const Root: FunctionComponent = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/click">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/click">
          <ClickPage />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </>
  );
};

export default Root;
