import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Merch() {
  const [merch, setMerch] = useState([]);
  const { t } = useTranslation();

  const merchUrl =
    "https://night-flies-page-default-rtdb.europe-west1.firebasedatabase.app/merch.json";

  useEffect(() => {
    fetch(merchUrl)
      .then((res) => res.json())
      .then((json) => setMerch(json || []));
  }, []);

  return (
    <div className="merch-page">
      <h2>Merch</h2>
      <div className="grid">
        {merch.map((item, index) => {
          const validSizes =
            Array.isArray(item.sizes) &&
            item.sizes.filter((s) => s && s.trim() !== "");

          return (
            <div className="card" key={item.title + index}>
              <img src={item.image} alt={item.title} className="merch-image" />
              <div className="event-title">{item.title}</div>
              <div className="event-date">{item.price} €</div>

              {validSizes && validSizes.length > 0 && (
                <div className="event-location">
                  {t("merch.size")}: {validSizes.join(", ")}
                </div>
              )}

              {item.shopLink && item.shopLink.trim() !== "" && (
                <a
                  href={item.shopLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  {t("merch.buyLink")}
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Merch;
