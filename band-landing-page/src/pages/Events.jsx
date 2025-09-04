import { useState } from "react";
import { Link } from "react-router-dom";
import eventsFromFile from "../data/events.json";

function Events() {
  const [events] = useState(eventsFromFile.slice());

  const now = new Date();

  const upcoming = events.filter((e) => new Date(e.date) >= now);
  const past = events.filter((e) => new Date(e.date) < now);
  const isUpcoming = new Date(event.date) >= now;

  const renderEventCard = (event) => (
    <div className="card" key={event.title}>
      <div className="event-title">{event.title}</div>
      <div className="event-date">{new Date(event.date).toLocaleString()}</div>
      <div className="event-location">{event.location}</div>
      <div className="event-links">
        {event.facebook && (
          <a
            href={event.facebook}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Facebook Event
          </a>
        )}
        {isUpcoming && event.tickets && (
          <a
            href={event.tickets}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Tickets
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="events-page">
      <h2>Events</h2>

      <div className="tabs">
        <input type="radio" id="upcoming" name="tab" defaultChecked />
        <label htmlFor="upcoming">Upcoming</label>

        <input type="radio" id="past" name="tab" />
        <label htmlFor="past">Past</label>

        <div className="tab-content" id="upcoming-content">
          {upcoming.length > 0 ? (
            <div className="grid">{upcoming.map(renderEventCard)}</div>
          ) : (
            <div className="no-events">
              <p>No upcoming events.</p>
              <Link to="/booking" className="btn">
                Book Us
              </Link>
            </div>
          )}
        </div>

        <div className="tab-content" id="past-content">
          {past.length > 0 ? (
            <div className="grid">{past.map(renderEventCard)}</div>
          ) : (
            <div className="no-events">
              <p>No past events.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Events;