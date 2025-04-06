import React from 'react';

const OpportunityCard = ({ opportunity }) => {
    const { name, field, type, deadline, shortDescription } = opportunity;

    const formattedDeadline = new Date(deadline).toLocaleString();

    // Inline styles
    const cardStyle = {
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        margin: '15px',
        maxWidth: '400px',
        transition: 'transform 0.2s ease-in-out',
    };

    const cardHoverStyle = {
        transform: 'translateY(-5px)',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    };

    const headingStyle = {
        fontSize: '1.6rem',
        color: '#2c3e50',
        marginBottom: '10px',
    };

    const paragraphStyle = {
        fontSize: '1rem',
        color: '#34495e',
        margin: '8px 0',
    };

    const boldStyle = {
        fontWeight: 'bold',
    };

    const lastParagraphStyle = {
        fontStyle: 'italic',
        color: '#7f8c8d',
    };

    const deadlineStyle = {
        color: '#e74c3c',
        fontWeight: 'bold',
    };

    return (
        <div
            className="opportunity-card"
            style={cardStyle}
            onMouseEnter={(e) => (e.target.style.transform = cardHoverStyle.transform)}
            onMouseLeave={(e) => (e.target.style.transform = '')}
        >
            <h2 style={headingStyle}>{name}</h2>
            <p style={paragraphStyle}>
                <strong style={boldStyle}>Field:</strong> {field}
            </p>
            <p style={paragraphStyle}>
                <strong style={boldStyle}>Type:</strong> {type}
            </p>
            <p style={paragraphStyle}>
                <strong style={boldStyle}>Deadline:</strong>{' '}
                <span style={deadlineStyle}>{formattedDeadline}</span>
            </p>
            <p style={lastParagraphStyle}>
                <strong style={boldStyle}>Short Description:</strong> {shortDescription}
            </p>
        </div>
    );
};

export default OpportunityCard;
