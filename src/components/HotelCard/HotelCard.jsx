import "./HotelCard.css";
import { Link } from "react-router-dom";

function HotelCard({ hotel }) {
  return (
    <div className="hotel-card">
      <img src={hotel.thumbnail} alt={hotel.name} />

      <div className="hotel-info">
        <h2>{hotel.name}</h2>

        <p>📍 {hotel.location}</p>

        <p>⭐ {hotel.rating}</p>

        <p className="price">₹{Math.round(hotel.price)}</p>

        <Link to={`/hotel/${hotel.id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default HotelCard;