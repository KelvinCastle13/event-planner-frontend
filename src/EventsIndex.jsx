export function EventsIndex({events}) {
  return (
    <div>
      <h1>All Events ({events.length} total)</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>{event.location}</p>
          <p>{event.date}</p>
        </div>
      ))}
    </div>
  );
}