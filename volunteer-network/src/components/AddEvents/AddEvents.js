import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const [imgUrl,setImageUrl]=useState(null)
    const { register, handleSubmit, watch, errors } = useForm();
   
  const onSubmit = data =>{
      const eventData={
          name: data.name,
          imageUrl: imgUrl
      }
      const url=`http://localhost:5000/addEvent`
       console.log(eventData)
       fetch(url,{
           method: "POST",
           headers:{'Content-Type': 'application/json'},
           body: JSON.stringify(eventData)
       })
       .then(res=>console.log('server side response'))
    };

  const handleImageUpLoad=event=>{
    console.log(event.target.files[0]);
    const imageData=new FormData();
    imageData.set('key','445ff44388b1ca7609b186d95358654e');
    imageData.append('image', event.target.files[0])


    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
    return (
        <div>
            <h1>Hello addevents</h1>
 <form onSubmit={handleSubmit(onSubmit)}>

      <input name="name" defaultValue="New Exciting Event" ref={register} /><br/>
     <input name="exampleRequired" type="file" onChange={handleImageUpLoad} /> <br/>
     <input type="submit" />
 </form>
            
        </div>
    );
};

export default AddEvents;