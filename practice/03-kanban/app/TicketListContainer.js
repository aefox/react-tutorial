import React from 'react';
import TicketList from './TicketList';
import { Link } from 'react-router';

export default React.createClass({
  getInitialState: function() {
    return {
      tickets: []
    };
  },

  componentDidMount: function() {
    this.setState({tickets: ticketsStore});
  },

  render: function() {
    return (
      <div>
        <Link to="/add-ticket">Add new ticket</Link>

        <TicketList tickets={this.state.tickets}/>
      </div>
    );
  }
});
