import { useState } from "react";

function Form({setReservations, reservations}) {

// name, date, time, number
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [number, setNumber] = useState('')

    function handleFormSubmission(e) {
        e.preventDefault()
        const id = Date.now()

        const newReservation = {
            id: id,
            name,
            date,
            time,
            number
        }

        // If post request, I would call my post request here

        const resCopy = [...reservations, newReservation]
        setReservations(resCopy)
        clearInputs()
    }

    function clearInputs() {
        setName('')
        setDate('')
        setTime('')
        setNumber('')
    }

    return (
        <form>
            <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
            />
            <input
            type="date"
            placeholder="Date"
            name="date"
            value={date}
            onChange={event => setDate(event.target.value)}
            />
            <input
            type="time"
            placeholder="Time"
            name="time"
            value={time}
            onChange={event => setTime(event.target.value)}
            />
            <input
            type="text"
            placeholder="Number of Guests"
            name="number"
            value={number}
            onChange={event => setNumber(event.target.value)}
            />
            <button onClick={event => handleFormSubmission(event)}>SUBMIT</button>
        </form>
    )

}

export default Form