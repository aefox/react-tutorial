import React from 'react';
import TicketSummary from './TicketSummary';

export default React.createClass({
  render: function() {
    if (!this.props.tickets || !this.props.tickets.length) {
      return null;
    }

    var ticketSummaries = this.props.tickets.map(function(ticket) {
      return (<TicketSummary key={ticket.id} ticket={ticket} />);
    });

    return (
      <ul>
        {ticketSummaries}
      </ul>
    );
  }
});
