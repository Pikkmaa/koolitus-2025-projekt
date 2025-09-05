import { useEffect, useState } from "react";

function Merch() {
  const [merch, setMerch] = useState([]);

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
        {merch.map((item, index) => (
          <div className="card" key={item.title + index}>
            <img src={item.image} alt={item.title} className="merch-image" />
            <div className="event-title">{item.title}</div>
            <div className="event-date">{item.price} €</div>
            <div className="event-location">
              Sizes: {item.sizes && item.sizes.join(", ")}
            </div>
            {item.shopLink && item.shopLink.trim() !== "" && (
              <a
                href={item.shopLink}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Buy It
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Merch;