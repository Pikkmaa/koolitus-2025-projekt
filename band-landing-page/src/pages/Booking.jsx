import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

function Booking() {
  const form = useRef();
  const { t } = useTranslation();

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
      <h2>{t("booking.title")}</h2>
      <form ref={form} onSubmit={sendEmail} className="booking-form">
        <label>
          {t("booking.personName")}
          <input type="text" name="person_name" required />
        </label>

        <label>
          {t("booking.email")}
          <input type="email" name="email" required />
        </label>

        <label>
          {t("booking.eventName")}
          <input type="text" name="event_name" required />
        </label>

        <label>
          {t("booking.eventLocation")}
          <input type="text" name="location" required />
        </label>

        <label>
          {t("booking.message")}
          <textarea name="message" rows="5" required />
        </label>

        <button type="submit">{t("booking.bookingRequest")}</button>
      </form>
    </div>
  );
}

export default Booking;
