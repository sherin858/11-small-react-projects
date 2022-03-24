import React from 'react'

function Card({tours}) {
    return(
        <>
                {
            tours.map((tour)=>{
            return(
            <div className='row  justify-content-center mb-5' key={tour.id} >
            <div className="col-lg-6 tour">
                <img className='mb-3' src={tour.image} alt={tour.name} />
                <div>
                    <h4>{tour.name}</h4>
                    <p>{tour.info}</p>
                </div>
              </div>
            </div>
          )
        })
      }
        </>
    )


}

export default Card
