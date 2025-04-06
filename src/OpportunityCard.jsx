import React from 'react';

const OpportunityCard = ({ opportunity }) => {
    const { name, field, type, deadline, shortDescription } = opportunity;

    const formattedDeadline = new Date(deadline).toLocaleString();

    return (
        <div className="opportunity-card">
            <h2>{name}</h2>
            <p><strong>Field:</strong> {field}</p>
            <p><strong>Type:</strong> {type}</p>
            <p><strong>Deadline:</strong> {formattedDeadline}</p>
            <p><strong>Short Description:</strong> {shortDescription}</p>
        </div>
    );
};

export default OpportunityCard;
