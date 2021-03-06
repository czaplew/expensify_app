import {BrowserRouter, Route, Switch, Link,NavLink} from 'react-router-dom';
import React from 'react';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';

const AppRouter = ()=>(
  <BrowserRouter>
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage} strict={true}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
