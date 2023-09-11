import './Reservations.css'
import ReservationCard from './ReservationCard'

function Reservation({reservations}) {

    
    const resCard = reservations && reservations.map(res => {
        return <ReservationCard
            key={res.id}
            id={res.id}
            name={res.name}
            date={res.date}
            time={res.time}
            number={res.number}
        />
    })


    return (
        <div className='res-container'>
            {resCard}
        </div>
    )

}

export default Reservation