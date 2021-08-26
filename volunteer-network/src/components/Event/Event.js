import React from 'react';
import { Card } from 'react-bootstrap';

const Event = ({event}) => {
    const handleDelete=(id)=>{
        console.log(event.id)
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            // if(result){
            //     event.target.parentNode.style.display = 'none';
            // }
        })

    }
    return (
        <div className="col-md-3">
           <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ height: '18rem' }} src={event.imageUrl}/>
                <Card.Body>
                    <Card.Title>{event.name} <button onClick={()=>handleDelete(event.id)}>Delete</button> </Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                </Card>

            
        </div>
    );
};

export default Event;