import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  const eventsUrl = "https://night-flies-page-default-rtdb.europe-west1.firebasedatabase.app/events.json"

  useEffect(() => {
    fetch(eventsUrl)
    .then((res) => res.json())
    .then((json) => {setEvents(json || []);
    setLoading(false)
    });
  }, []);

  if (loading) {
    return <Spinner animation="border" variant="info" />
    }

  const now = new Date();

  const upcoming = events.filter((e) => new Date(e.date) >= now);
  const past = events.filter((e) => new Date(e.date) < now);

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
            {t("event.facebook")}
          </a>
        )}
        {upcoming && event.tickets && (
          <a
            href={event.tickets}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            {t("event.tickets")}
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="events-page">
      <h2>{t("event.pageName")}</h2>

      <div className="tabs">
        <input type="radio" id="upcoming" name="tab" defaultChecked />
        <label htmlFor="upcoming">{t("event.upcoming")}</label>

        <input type="radio" id="past" name="tab" />
        <label htmlFor="past">{t("event.past")}</label>

        <div className="tab-content" id="upcoming-content">
          {upcoming.length > 0 ? (
            <div className="grid">{upcoming.map(renderEventCard)}</div>
          ) : (
            <div className="no-events">
              <p>{t("event.noEventsText")}</p>
              <Link to="/booking" className="btn">
                {t("event.booking")}
              </Link>
            </div>
          )}
        </div>

        <div className="tab-content" id="past-content">
          {past.length > 0 ? (
            <div className="grid">{past.map(renderEventCard)}</div>
          ) : (
            <div className="no-events">
              <p>{t("event.noPastEventsText")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Events;