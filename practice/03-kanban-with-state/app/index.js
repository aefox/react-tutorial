import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import AddTicket from './AddTicket';
// import TicketListContainer from './TicketListContainer';
import KanbanBoard from './KanbanBoard';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={KanbanBoard} />
    <Route path="/add-ticket" component={AddTicket} />
  </Router>
  , document.getElementById('kanban-app'));
