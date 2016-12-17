import { observable } from 'mobx';
import TicketStatus from './TicketStatus';

var ticketStore = {
	tickets: [{
		id: 1,
		summary: 'S1',
		description: 'D1',
		status: 'open'
	},
	{
		id: 2,
		summary: 'S2',
		description: 'D2',
		status: 'inprogress'
	}],
	newTicket: function(ticket) {
		this.tickets.push(new Ticket(...ticket));
	},
	openedTickets: function() {
		return this.tickets.filter(function(ticket) {
			return ticket.status === TicketStatus.OPEN;
		});
	},
	inProgressTickets: function() {
		return this.tickets.filter(function(ticket) {
			return ticket.status === TicketStatus.INPROGRESS;
		});
	}
};

window.store = ticketStore;

export default observable(ticketStore);
