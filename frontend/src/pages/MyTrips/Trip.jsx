import React from "react";

const Trip = ({ trip, onDeleteTrip }) => {
    return (
        <div className="trip">
            <figure>
                <figcaption>
                    <div>
                        <span>ID: {trip.id}</span>
                    </div>
                    <a href="#">{trip.title}</a>
                    <div>
                        <span>{trip.startTrip}</span>
                    </div>
                    <p>{trip.description}</p>
                    <div>
                        <form onSubmit={(e) => {e.preventDefault(); onDeleteTrip(trip.id);}}>
                            <button type="submit">Delete from list</button>
                        </form>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
};

export default Trip;
