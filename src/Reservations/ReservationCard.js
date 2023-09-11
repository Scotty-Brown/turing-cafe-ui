import './ReservationCard.css'

function ReservationCard({id, name, date, time, number}) {
    return (
        <div className='reservation-card'>
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{time}</p>
            <p>Number of Guests: {number}</p>
            <button>Cancel</button>
        </div>
    )
}

export default ReservationCard
