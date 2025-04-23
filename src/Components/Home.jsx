import React, { useState } from 'react'
import './Home.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { IoBedOutline } from "react-icons/io5";
import { MdAttractions, MdOutlineConnectingAirports, MdOutlineFlight } from "react-icons/md";
import { FaCarSide, FaHotel } from "react-icons/fa";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRangePicker } from 'react-date-range';
import { DateRange } from "react-date-range";
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';


// import {FontAwesomeIcon} from 'fo'

const Home = ({type}) => {

  let [destination,setDestination]=useState();

  const navigate=useNavigate();

  let [open, setOpen] = useState(false);
  let [open1, setOpen1] = useState(false);

  function handleSelect(ranges) {
    console.log(ranges); // native Date object
  }
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ]);

  const [detail, setDetail] = useState({
    adult: 1,
    children: 0,
    rooms: 1
  });

  function incOrdec(name, operation) {
    setDetail((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? detail[name] + 1 : detail[name] - 1,
      }
    })
  }

  console.log(open)
  console.log(date[0].startDate)

  // function handleSearch(){
  //   navigate("/hotels",{state:{destination,date,detail}});
  // }

  return (
    <div>
      <div className="header">
        <div className={type=="list" ? "toHotel" :"main-con"}>
        <div className="main">
          <div className="icons">
            <div>
              <IoBedOutline />
              <span>Stays</span>
            </div>
            <div>
              <MdOutlineFlight />
              <span>Flight</span>
            </div>
            <div>
              <FaHotel />
              <span>Flight & Hotel</span>
            </div>
            <div>
              <FaCarSide />
              <span>Car</span>
            </div>
            <div>
              <MdAttractions />
              <span>Attractions</span>
            </div>
            <div>
              <MdOutlineConnectingAirports />
              <span>Airport Taxi</span>
            </div>
          </div>

        </div>
      { type!=="list" && 
        <>
        <div className="main-1">
          <div className="content1">
            <div className="heading">
              <h1>Unpack <br /> The Feeling Of Home</h1>
            </div>
            <div className="line">
              <p>Choose from houses, chalets, villas and more</p>
            </div>
            <button className='h'>Book Yours</button>
          </div>
        </div>

        <div className="optionList">
          <div className='place'>
            <IoBedOutline style={{ fontSize: "30px" }} />
            <input type="text" onChange={(e)=>{setDestination(e.target.value)}} placeholder='Search Your Destination' style={{border:"none", padding:"20px"}}/>
          </div>
          <div className='dates' onClick={() => {
            setOpen(!open)
          }}>
              <span>
                {`${format(date[0].startDate,"dd/MM/yyyy")}`} &nbsp;
                to &nbsp;
                {`${format(date[0].endDate,"dd/MM/yyyy")}`}
              </span>
          </div>
          {open && <div className='calendar'>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}
            />
          </div>}

          <div className='members' onClick={() => {
            setOpen1(!open1);

          }}>
            <span>
              {`${detail.adult} adults | ${detail.children} children | ${detail.rooms} rooms`}
            </span>
          </div>
          <span></span>
          {open1 && <div className="noMem">
            <div className="adult">
              <span>Adults</span>
              <button className="trigger" onClick={() => {
                incOrdec("adult", "d")
              }}
                disabled={detail["adult"] <= 1}
              > - </button>
              <span>{detail.adult}</span>
              <button className="trigger" onClick={() => {
                incOrdec("adult", "i")
              }}> + </button>
            </div>
            <div className="children">
              <span>Children</span>
              <button className="trigger" onClick={() => {
                incOrdec("children", "d")
              }}

                disabled={detail["children"] < 1}
              > - </button>
              <span>{detail.children}</span>
              <button className="trigger" onClick={() => {
                incOrdec("children", "i")
              }}> + </button>
            </div>
            <div className="rooms">
              <span>Rooms</span>
              <button className="trigger" onClick={() => {
                incOrdec("rooms", "d")
              }}
                disabled={detail["rooms"] <= 1}
              > - </button>
              <span>{detail.rooms}</span>
              <button className="trigger" onClick={() => {
                incOrdec("rooms", "i")
              }}> + </button>
            </div>
          </div>}

          <div className='search'>
            <button>Search</button>
          </div>
        </div>
        </> }
        </div>
      </div>
      
    </div>
  )
}

export default Home
