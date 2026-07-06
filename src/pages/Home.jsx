import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import HotelCard from "../components/HotelCard/HotelCard";
import SearchBar from "../components/SearchBar/SearchBar";
import { getHotels } from "../services/api";
import "./Home.css";

function Home() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    async function fetchHotels() {
      try {
        const data = await getHotels();
        setHotels(data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchHotels();
  }, []);

  const locations = [...new Set(hotels.map((hotel) => hotel.location))];

  const filteredHotels = hotels.filter((hotel) => {
    const matchesSearch = hotel.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation =
      selectedLocation === "" ||
      hotel.location === selectedLocation;

    return matchesSearch && matchesLocation;
  });

  return (
    <>
      <Navbar />
      <Hero />

      <SearchBar
        search={search}
        setSearch={setSearch}
        locations={locations}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />

      <section id="hotels" className="hotel-container">
        {loading ? (
          <h2>Loading Hotels...</h2>
        ) : (
          filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))
        )}
      </section>
    </>
  );
}

export default Home;