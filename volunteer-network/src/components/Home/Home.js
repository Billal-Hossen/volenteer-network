import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const Home = () => {
    // const events=[
    //     {
    //         name:'child',
    //         pic:'babySit.png'
    //     },
    //     {
    //         name:"animalShelter",
    //         pic:"animalShelter.png"
    //     },
    //     {
    //         name:"birdHouse",
    //         pic:"birdHouse.png"
    //     },
    //     {
    //         name:"childSupport",
    //         pic:"childSupport.png"
    //     },
    //     {
    //         name:"cleanWater",
    //         pic:"cleanWater.png"
    //     }
    // ]


    const [events, setEvents]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/events`)
        .then(res=>res.json())
        .then(data=>setEvents(data))
    },[])
    return (
        <div className="row">
            {
                events.map(event=><Event event={event}></Event>)
            }
            
        </div>
    );
};

export default Home;