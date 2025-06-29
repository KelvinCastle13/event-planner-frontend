import axios from "axios";
import {useState, useEffect} from "react";
import { EventsIndex } from "./EventsIndex"
import { EventsShow } from "./EventsShow";
import { Modal } from "./Modal";

export function EventsPage() {
  const [events, setEvents] = useState([]);
  const [isEventsShowVisible, setIsEventsShowVisible] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({});

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/events.json").then((response) => {
      console.log(response.data);
      setEvents(response.data);
    });
  };

  const handleShow = (event) => {
    console.log("handleShow", event);
    setIsEventsShowVisible(true);
    setCurrentEvent(event);
  };

  useEffect(handleIndex, []);
  


  return (
    <main>
      <EventsIndex events={events} onShow={handleShow} />
      <Modal show={isEventsShowVisible} onClose={() => setIsEventsShowVisible(false)}>
        <EventsShow event={currentEvent}/>
      </Modal>
    </main>
  )
}