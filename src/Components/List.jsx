import React, { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import './list.css'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import HotelCards from './HotelCards'
import { useLocation } from 'react-router-dom'

const List = () => {
    const loc=useLocation();
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ])

    const [open, setOpen] = useState(false);
    return (
        <div>
            <Home type="list" />
            <div className="main-container">
                <div className="tool-bar">
                    <h2>Search</h2>
                    <h3>Destination</h3>
                    <input type="text" className='check'/>
                    <h3>Check In Date</h3>
                    <input className='check' type="text" onClick={() => { setOpen(!open) }} placeholder={`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].startDate, "dd/MM/yyyy")}`} />
                    {open && <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        minDate={new Date()}
                    />}
                    <h2>Options</h2>
                    <div className="option">
                        <div className="optionlist">
                            <h3>Min Price Per Night</h3>
                            <input type="number" min={1000} />
                        </div>
                        <div className="optionlist">
                            <h3>Max Price Per Night</h3>
                            <input type="number" max={50000} />
                        </div>
                        <div className="optionlist">
                            <h3>Adult</h3>
                            <input type="number" min={1} />
                        </div>
                        <div className="optionlist">
                            <h3>Children</h3>
                            <input type="number" min={0} />
                        </div>
                        <div className="optionlist">
                            <h3>Rooms</h3>
                            <input type="number" min={1} />
                        </div>
                    </div>
                </div>
                <div className="lists">
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                    <HotelCards />
                </div>
            </div>
        </div>
    )
}

export default List
