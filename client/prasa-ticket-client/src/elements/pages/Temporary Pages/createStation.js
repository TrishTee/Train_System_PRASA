import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const CreateStation = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        console.log(data)
    }, [data])

    const createStation = (e) => {
        e.preventDefault();

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:5100/api/createStation',
            headers: {},
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <form style={{ display: "flex", flexDirection: 'column', gap: "5px", width: "500px" }}>
            <h1>CREATE STATION</h1>
            <input type="text" onChange={e => setData({ ...data, name: e.target.value })} placeholder='Name of the station' />
            <input type="text" onChange={e => setData({ ...data, openingTime: e.target.value })} placeholder='Opening Time' />
            <input type="text" onChange={e => setData({ ...data, closingTime: e.target.value })} placeholder='Closing Time' />
            <input type="number" onChange={e => setData({ ...data, numberOfTrips: e.target.value })} placeholder='Number of Trips' />
            <input type="number" onChange={e => setData({ ...data, numberOfTicketsAvailable: e.target.value })} placeholder='Number of Tickets Available' />
            <button type="submit" onSubmit={createStation}>Create Station Record</button>
        </form>
    )
}
