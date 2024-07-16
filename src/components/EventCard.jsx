import "./EventCard.css"
function EventCard({Event,num}){
    const convertString = () => {
        const date = new Date("2025-02-07T18:05");
        const localizedString = date.toLocaleString();
        return localizedString;
    }
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
                Date -{convertString(Event.timedate)}
                </div>
                <div className="event_duration">
                Venue -{Event.venue}
                </div>
            </div>
        </div>
    );
}
export default EventCard;