import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import HotelCard from "../components/HotelCard/HotelCard";
import { getHotels } from "../services/api";
import "../index.css";


function Home() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHotels() {
      try {
        const data = await getHotels();
        setHotels(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchHotels();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      <section id="hotels" className="hotel-container">
        {loading ? (
          <h2>Loading Hotels...</h2>
        ) : (
          hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))
        )}
      </section>
    </>
  );
}

export default Home;