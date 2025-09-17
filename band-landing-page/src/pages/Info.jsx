import { useTranslation } from "react-i18next";

function Info() {
  const { t } = useTranslation();
  return (
    <div className="info-page">
      <h2>Info</h2>

      <div className="tabs">
        <input type="radio" id="general" name="tab" defaultChecked />
        <label htmlFor="general">{t("info.general")}</label>

        <input type="radio" id="organizer" name="tab" />
        <label htmlFor="organizer">{t("info.organizer")}</label>

        <div className="tab-content" id="general-content">
          <h3>Night Flies</h3>
          <p>
            <strong>Email:</strong> nightfliesband@gmail.com
          </p>
          <p>
            <strong>{t("info.contact")}</strong> Martin
          </p>
          <p>
            <strong>{t("info.aadress")}</strong> Tallinn, Estonia
          </p>
        </div>

        <div className="tab-content" id="organizer-content">
          <h3>{t("info.resources")}</h3>
          <p>
            <a
              href="/files/NF_Raider_tech_2024_EST.pdf"
              download
              className="btn"
            >
              {t("info.dlRider")}
            </a>
          </p>
          <p>
            <a
              href="/files/NF_logo.png"
              download
              className="btn"
            >
              {t("info.dlLogoPNG")}
            </a>
            <a
              href="/files/NF_logo.svg"
              download
              className="btn"
            >
              {t("info.dlLogoSVG")}
            </a>
          </p>
          <p>
            <a
              href="/files/NF_images.zip"
              download
              className="btn"
            >
              {t("info.dlPhotos")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
