import { useState, useEffect } from "react";

const GOOGLE_API_KEY = "AIzaSyBiXRza3cdC49oDky7hLyXPqkQhaNM4yts"; // Replace with your API Key

const useLocation = () => {
    const [location, setLocation] = useState("Detecting...");
  
    const getAddressFromCoordinates = async (lat: number, lng: number) => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`
        );
        const data = await response.json();
        if (data.results.length > 0) {
          setLocation(data.results[0].address_components?.[1]?.long_name);
        } else {
          setLocation("Location not found");
        }
      } catch (error) {
        console.error("Error fetching address:", error);
        setLocation("Error fetching location");
      }
    };
  
    const detectLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            getAddressFromCoordinates(latitude, longitude);
          },
          (error) => {
            console.error("Geolocation error:", error);
            setLocation("Location not available");
          }
        );
      } else {
        setLocation("Geolocation not supported");
      }
    };
  
    // ✅ Auto-detect location on startup
    useEffect(() => {
      detectLocation();
    }, []);
  
    return { location, setLocation, detectLocation }; // ✅ Expose detectLocation function
  };
  

export default useLocation;
