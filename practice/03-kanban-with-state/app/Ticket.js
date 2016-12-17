import TicketStatus from './TicketStatus';

class Ticket {
	id
	summary
	description
	status

	constructor(summary, description) {
		this.id = Date.now();
		this.summary = summary;
		this.description = description;
		this.status = TicketStatus.OPEN;
	}
}

export default Ticket;
