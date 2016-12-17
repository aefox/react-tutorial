import React from 'react';
import { hashHistory } from 'react-router';
import Ticket from './Ticket';

export default React.createClass({
  saveTicket: function(event) {
    event.preventDefault();

    window.ticketsStore.push(new Ticket(this.refs.summary.value, this.refs.description.value));

    hashHistory.push("/");
  },

  cancelSave: function() {
    hashHistory.push("/");
  },

  render: function() {
    return (
      <div>
        <form>
          <label>
            Summary:
            <input type="text" ref="summary" />
          </label>
          <br />

          <label>
            Description:
            <input type="text" ref="description" />
          </label>
          <br />

          <label>
            Status:
            <input type="text" ref="status" />
          </label>
          <br />

          <input type="button" value="Submit" onClick={this.saveTicket} /><br />
          <input type="button" value="Cancel" onClick={this.cancelSave} />
        </form>
      </div>
    );
  }
});
