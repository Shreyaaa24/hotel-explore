import "./HotelCard.css";

function HotelCard({ hotel }) {
  return (
    <div className="hotel-card">
      <img
        src={hotel.thumbnail}
        alt={hotel.name}
      />

      <div className="hotel-info">
        <h2>{hotel.name}</h2>

        <p>📍 {hotel.location}</p>

        <p>⭐ {hotel.rating}</p>

        <p className="price">
          ₹{Math.round(hotel.price)}
        </p>

        <button>View Details</button>
      </div>
    </div>
  );
}

export default HotelCard;