import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getHotelById } from "../services/api";
import "./HotelDetails.css";

function HotelDetails() {
  const { id } = useParams();

  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    async function fetchHotel() {
      try {
        const data = await getHotelById(id);
        setHotel(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchHotel();
  }, [id]);

  if (!hotel) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="details-container">
      <img
        src={hotel.thumbnail}
        alt={hotel.name}
        className="details-image"
      />

      <div className="details-content">
        <h1>{hotel.name}</h1>

        <p>📍 {hotel.location}</p>

        <p>⭐ {hotel.rating}</p>

        <p className="price">₹{Math.round(hotel.price)}</p>

        <p>{hotel.description}</p>

        <Link to="/">
          <button>← Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default HotelDetails;