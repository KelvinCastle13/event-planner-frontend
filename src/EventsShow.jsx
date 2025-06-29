export function EventsShow({event}) {
  return (
    <div>
      <h1>Event Infomation</h1>
          <p>Name: {event.name}</p>
          <p>Location: {event.location}</p>
          <p>Date: {event.date}</p>
    </div>
  );
}