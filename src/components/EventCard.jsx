import "./EventCard.css"
function EventCard({Event,num}){
    return(
        <div className="eventcards">
        <div className="sl_num">
            {++num}.
        </div>
        <div className="details_container">
            <div className="event_name">
            <h2>{Event.name}</h2>
            </div>
            <div className="event_desc">
            Description -{Event.desc}
            </div>
        </div>
        <div className="date_place">
                <div className="event_date">
                Date -{Event.timedate}
                </div>
                <div className="event_duration">
                Venue -{Event.venue}
                </div>
            </div>
        </div>
    );
}
export default EventCard;