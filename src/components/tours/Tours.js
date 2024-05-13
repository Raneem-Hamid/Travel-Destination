import React from 'react'
import './Tours.css';
import Tour from './tour/Tour';
const data =require('../../data/db.json');
function Tours() {
  return (
    <>


{
            data.map(element =>{
                return (
                    <Tour image={element.image} name={element.name} id={element.id}/>
                )
            })
        }



   
</>
  )
}

export default Tours