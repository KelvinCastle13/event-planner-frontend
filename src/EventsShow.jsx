export function EventsShow({event}) {
  return (
    <div>
      <h1>Event Infomation</h1>
          <p>Name: {event.name}</p>
          <p>Location: {event.location}</p>
          <p>Date: {event.date}</p>

          <h2>Attendees:</h2>
          {event.attendees?.length > 0 ? (
            <ul>
              {event.attendees.map((attendee) => (
                <li key={attendee.id}>{attendee.name}, {attendee.email}</li>
              ))}
            </ul>
          ) : (
            <p>No Attendees</p>
          )}
    </div>
  );
}