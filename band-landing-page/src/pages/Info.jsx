function Info() {
  return (
    <div className="info-page">
      <h2>Info</h2>

      <div className="tabs">
        {/* General Info Tab */}
        <input type="radio" id="general" name="tab" defaultChecked />
        <label htmlFor="general">General Info</label>

        {/* Organizer Info Tab */}
        <input type="radio" id="organizer" name="tab" />
        <label htmlFor="organizer">For Organizers</label>

        {/* General Info Content */}
        <div className="tab-content" id="general-content">
          <h3>Night Flies</h3>
          <p>
            <strong>Email:</strong> nightfliesband@gmail.com
          </p>
          <p>
            <strong>Contact Person:</strong> Martin
          </p>
          <p>
            <strong>Location:</strong> Tallinn, Estonia
          </p>
        </div>

        {/* Organizer Info Content */}
        <div className="tab-content" id="organizer-content">
          <h3>Resources for Organizers</h3>
          <p>
            <a
              href="/files/NF_Raider_tech_2024_EST.pdf"
              download
              className="btn"
            >
              Download Technical Rider
            </a>
          </p>
          <p>
            <a
              href="/files/NF_logo.png"
              download
              className="btn"
            >
              Download Logo PNG
            </a>
            <a
              href="/files/NF_logo.svg"
              download
              className="btn"
            >
              Download Logo SVG
            </a>
          </p>
          <p>
            <a
              href="/files/NF_images.zip"
              download
              className="btn"
            >
              Download Photo Collection
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
