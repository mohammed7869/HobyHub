
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {  PopoverContent } from "@/components/ui/popover";
import { useRef, useState } from "react";
import { Libraries, LoadScript, StandaloneSearchBox } from "@react-google-maps/api";

const libraries: Libraries = ["places"];
const GOOGLE_API_KEY = "AIzaSyBiXRza3cdC49oDky7hLyXPqkQhaNM4yts";

export default function LocationPopup() {

  const [location, setLocation] = useState("");
  const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null);

  const handlePlacesChanged = () => {
    const places = searchBoxRef.current?.getPlaces();
    if (places && places.length > 0) {
      setLocation(places[0].formatted_address || "");
    }
  };
  return (

    <LoadScript googleMapsApiKey={GOOGLE_API_KEY} libraries={libraries}>
    <PopoverContent className="w-[300px] shadow-md p-4">
      <h3 className="text-lg font-semibold">Choose your location</h3>
      <p className="text-gray-500 text-sm">Select a location to see hobby options</p>

      {/* Google Autocomplete Input */}
      <StandaloneSearchBox onLoad={(ref) => (searchBoxRef.current = ref)} onPlacesChanged={handlePlacesChanged}>
        <Input
          type="text"
          placeholder="Enter location"
          className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </StandaloneSearchBox>

      {/* Buttons */}
      <div className="mt-4 space-y-2">
        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Search By Location</Button>
        <hr />
        <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-600">Detect My Location</Button>
      </div>
    </PopoverContent>
  </LoadScript>
   
  );
}
