import React from 'react';
import EventCard from './EventCard';

function ListEvents({ content }) {
    if (!Array.isArray(content)) {
        console.log(content)
        throw new Error('Invalid content: content should be an array');
    }

    return (
        <>
            {content.length === 0 ? (
                <div className="text_centered">
                    <p>You dont have any events created<br/>
                    Tap on “Create” to get started.......</p>
                </div>
            ) : (
                <>
                    {content.map((item, i) => (
                        <EventCard key={i} num={i} Event={item}/>
                    ))}
                </>
            )}
        </>
    );
}

export default ListEvents;
