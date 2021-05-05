import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/eventDetail/EventSummary";
import EventLogistics from "../../components/eventDetail/EventLogistics";
import EventContent from "../../components/eventDetail/EventContent";
import ErrorAlert from "../../components/ui/ErrorAlert";
import Button from "../../components/ui/Button";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p> No Event Found!!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
