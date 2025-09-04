import { useRef, useState } from "react";
import eventsFromFile from "../../data/events.json"
import toast from "react-hot-toast";

function AddEvent() {
    const [events, setEvents] = useState(eventsFromFile.slice());
    const titleRef = useRef();
    const fbLinkRef = useRef();
    const dateRef = useRef();
    const ticketsRef = useRef();
    const locationRef = useRef();

    function remove(index) {
        eventsFromFile.splice(index, 1);
        setEvents(eventsFromFile.slice());
    }

    function addEvent() {
        if (titleRef.current.value === "") {
            toast.error("Event must have a name");
            return;
        }
        if (dateRef.current.value === "") {
            toast.error("Date and rime is mandatory");
            return;
        }
        eventsFromFile.push({
            title: titleRef.current.value,
            facebook: fbLinkRef.current.value,
            date: dateRef.current.value,
            tickets: ticketsRef.current.value,
            location: locationRef.current.value,

        });
        setEvents(eventsFromFile.slice());
        toast.success("Event added succesfully!")
    }



  return (
    <div>
        <br />
        <div className="form">
        <label><strong>Event title</strong></label>
        <input ref={titleRef} type="text" />

        <label><strong>Facebook link</strong></label>
        <input ref={fbLinkRef} type="text" />

        <label><strong>Date and time</strong></label>
        <input ref={dateRef} type="datetime-local" />

        <label><strong>Tickets link</strong></label>
        <input ref={ticketsRef} type="text" />

        <label><strong>Location</strong></label>
        <input ref={locationRef} type="text" />
        <button onClick={addEvent}>Add event</button>
        </div>

        <div>Number of events: {events.length}</div>
        <table className="form-tabel">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Index</th>
                    <th>Event title</th>
                    <th>Facebook link</th>
                    <th>Date</th>
                    <th>Tickets</th>
                    <th>Location</th>
                    <th>Edit</th>
                    <th>Remove</th>
                </tr>
                </thead>
            <tbody>
                {events.map((event, index) =>
                <tr key={event.title}>
                    <td>{index+1}.</td>
                    <td>{index}</td>
                    <td>{event.title}</td>
                    <td>{event.facebook}</td>
                    <td>{event.date}</td>
                    <td>{event.tickets}</td>
                    <td>{event.location}</td>
                    <td><button onClick={() => remove(index)}>x</button></td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default AddEvent;
