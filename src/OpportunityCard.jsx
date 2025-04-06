import React from 'react';
import Modal from './Modal';
import { useState } from 'react';


const OpportunityCard = ({ opportunity }) => {

      const [isModalOpen, setIsModalOpen] = useState(false);
    const { name, field, type, deadline, shortDescription, description } = opportunity;

    const formattedDeadline = new Date(deadline).toLocaleString();

    // Inline styles
    const cardStyle = {
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        margin: '15px',
        transition: 'transform 0.2s ease-in-out',
    };

    const cardHoverStyle = {
        transform: 'translateY(-5px)',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    };

    const headingStyle = {
        fontSize: '1.6rem',
        color: '#111',
        marginBottom: '10px',
    };

    const paragraphStyle = {
        fontSize: '1rem',
        color: '#111111',
        margin: '8px 0',
    };

    const boldStyle = {
        fontWeight: 'bold',
    };

    const lastParagraphStyle = {
        fontStyle: 'italic',
        color: '#111111',
    };

    const deadlineStyle = {
        color: '#d73c2c',
        fontWeight: 'bold',
    };

    return (
        <div
            className="opportunity-card flex-col items-center w-full"
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
            <div className="w-full flex flex-col items-center justify-center">
                <button className="min-w-40 mt-6" onClick={() => setIsModalOpen(true)}>See More</button>

            </div>
            {isModalOpen && (
            <Modal onClose={() => setIsModalOpen(false)} title={name} description={description} />
            )}
        </div>
    );
};

export default OpportunityCard;
