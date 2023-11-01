import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const CreateTrip = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        console.log(data)
    }, [data])

    const createTrip = (e) => {
        e.preventDefault();

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:5100/api/createTrip',
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
            <h1>CREATE TRIP</h1>
            <input type="text" onChange={e => setData({ ...data, categoryOfTime: e.target.value })} placeholder='Category Of Time' />
            <input type="text" onChange={e => setData({ ...data, trainNumber: e.target.value })} placeholder='train Number' />
            <input type="text" onChange={e => setData({ ...data, departStation: e.target.value })} placeholder='departStation' />
            <input type="number" onChange={e => setData({ ...data, arriveStation: e.target.value })} placeholder='arrive Station' />
            <input type="text" onChange={e => setData({ ...data, categoryOfTime: e.target.value })} placeholder='Category Of Time' />
            <input type="text" onChange={e => setData({ ...data, trainNumber: e.target.value })} placeholder='train Number' />
            <input type="text" onChange={e => setData({ ...data, departStation: e.target.value })} placeholder='departStation' />
            <button type="submit" onSubmit={createTrip}>Create Trip Record</button>
        </form>
    )
}
