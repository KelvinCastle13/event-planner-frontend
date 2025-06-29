import axios from "axios";
import {useState, useEffect} from "react";
import { EventsIndex } from "./EventsIndex"

export function EventsPage() {
  const [events, setEvents] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/events.json").then((response) => {
      console.log(response.data);
      setEvents(response.data);
    });
  };

  useEffect(handleIndex, []);
  


  return (
    <main>
      <EventsIndex events={events} />
    </main>
  )
}