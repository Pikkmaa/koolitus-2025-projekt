import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Booking() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kka231j",
        "template_6cfbkpt",
        form.current,
        "c119ZEYcRJNqD7eY0"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="booking-page">
      <h2>Book Us</h2>
      <form ref={form} onSubmit={sendEmail} className="booking-form">
        <label>
          Your name
          <input type="text" name="person_name" required />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>

        <label>
          Event Name
          <input type="text" name="event_name" required />
        </label>

        <label>
          Location
          <input type="text" name="location" required />
        </label>

        <label>
          Your Message
          <textarea name="message" rows="5" required />
        </label>

        <button type="submit">Send Booking Request</button>
      </form>
    </div>
  );
}

export default Booking;
