import React, { useEffect, useState } from 'react';
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { DatePicker, TimePicker } from 'antd';

const PaymentForm = () => {
    const [trip, setTrip] = useState('');
    const [passenger, setPassenger] = useState('');
    const [tripData, setTripData] = useState({});
    const [trips, setTrips] = useState([]);
    const [stations, setStations] = useState([]);

    const [formState, setFormState] = useState('ticketInfo');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    const datePicker = (date, dateString) => {
        console.log(date, dateString);
      };

    useEffect(() => {
        console.log(tripData)
        console.log(stations)
    }, [trip, passenger, tripData, formState]);

    // 
    useEffect((req, res, next) => {
        axios.get("http://localhost:5100/api/getStations").then((res) => {
            setStations(res.data)
        });
        axios.get("http://localhost:5100/api/getTrips").then((res) => {
            setTrips(res.data)
        })
    }, [tripData]);

    const ticketInfo = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className='formTopWrapper'>
                    <div className='formTitle'>Where To?</div>
                    <div className='formTitle'>Choose where you want climb the trrain and where to get off.</div>
                </div>

                <div className='toWrapper'>
                    <div className='fromIcon'>A</div>
                    <select className='fromTripsSelect select'   onChange={(e) => setTripData({ ...tripData, departStation: e.target.value })}>
                        {
                            stations?.map((station, i) => {
                                // let fromStation ={tripData?.departStation===station?._id && select}
                                return (
                                    <option className='option' key={i} value={station?._id}>
                                        {station?.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className='fromWrapper'>
                    <div className='fromIcon'>B</div>
                    <select className='fromTripsSelect select' 
                    onChange={(e) => setTripData({ ...tripData, arriveStation: e.target.value })}
                    >
                        {
                            stations?.map((station, i) => {
                                // let fromStation ={tripData?.departStation===station?._id && select}
                                return (
                                    <option className='option' key={i} value={station?._id}>
                                        {station?.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>

                {/* Date Picker */}
                <div className='dateWrapper'>
                    <DatePicker onChange={datePicker}/>
                </div>

                {/* Time Picker  */}
                <div className='timeWrapper'>
                <select className='fromTripsSelect select' 
                    onChange={(e) => setTripData({ ...tripData, arriveStation: e.target.value })}
                    >
                        {
                            stations?.map((station, i) => {
                                // let fromStation ={tripData?.departStation===station?._id && select}
                                return (
                                    <option className='option' key={i} value={station?._id}>
                                        {station?.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
                <button type="submit">Submit Payment</button>
            </form>
        )
    }

    const checkout = ()=>{
        return(
            <div className="checkoutCard">
                
            </div>
        )
    }

    return (
        <div className="payment-form">
            <h2>Where To?</h2>
            {formState === "ticketInfo" ? ticketInfo() : ""}
        </div>
    );
};

export default PaymentForm;
