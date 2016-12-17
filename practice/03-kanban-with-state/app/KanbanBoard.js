import React from 'react';
import { observer } from 'mobx-react';
import TicketCard from './TicketCard';
import TicketStore from './TicketStore';

var KanbanBoard = React.createClass({
	render: function() {
		var openedTickets = TicketStore.openedTickets.map(function(ticket) {
			return (<TicketCard key={ticket.id} ticket={ticket}></TicketCard>);
		});

		var inProgressTickets = TicketStore.inProgressTickets.map(function(ticket) {
			return (<TicketCard key={ticket.id} ticket={ticket}></TicketCard>);
		});

		return (
			<div className="ui three column divided grid">
				<div className="row">
					<div className="column">
						<div className="ui centered header">Opened</div>

						<div className="ui cards">
							{openedTickets}
						</div>
					</div>

					<div className="column">
						<div className="ui centered header">In Progress</div>

						<div className="ui cards">
							{inProgressTickets}
						</div>
					</div>

					<div className="column">
						<div className="ui centered header">Done</div>

						<div className="ui cards"></div>
					</div>
				</div>
			</div>
		);
	}
});

export default observer(KanbanBoard);
