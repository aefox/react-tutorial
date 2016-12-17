import React from 'react';
import { observer } from 'mobx-react';

var TicketCard = React.createClass({
	render: function() {
		return (
			<div className="ui centered card">
				<div className="content">
					<div className="header">{this.props.ticket.summary}</div>

					<div className="content">
						<h4 className="ui sub header">{this.props.ticket.id}</h4>
					</div>

					<div className="extra content">{this.props.ticket.description}</div>
				</div>
			</div>
		);
	}
});

export default observer(TicketCard);
