import React from 'react';
import EventCard from './EventCard';

// Functional component that takes content as a prop
function ListEvents({ content }) {
    // Check if content is an array and has elements
    if (!Array.isArray(content)) {
        console.log(content)
        throw new Error('Invalid prop: content should be an array');
    }

    return (
        <>
            {content.length === 0 ? (
                <h2>There are no events to be shown</h2>
            ) : (
                <>
                    {content.map((item, i) => (
                        <EventCard key={i} Event={item}/>
                    ))}
                </>
            )}
        </>
    );
}

export default ListEvents;
