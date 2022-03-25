import React from 'react'
import {useState} from 'react'
function Card({tours,removeTour}) {
  const [fullText,setFullText]=useState(false);
    return(
        <>
          {
            tours.map((tour)=>{
            return(
            <div className='row  justify-content-center mb-5' key={tour.id} >
            <div className="col-lg-6 tour">
                <img className='mb-3' src={tour.image} alt={tour.name} />
                <div className='p-4'>
                    <div className='d-flex justify-content-between'>
                      <h4>{tour.name}</h4>
                      <h4 className='price'>${tour.price}</h4>
                    </div>
                      {
                      fullText?
                          <p>{tour.info}<button onClick={()=>setFullText(!fullText)} type="button" className='btn btn-link shadow-none p-0 border-0'>...show less</button>
                          </p>:
                          <p>
                            {tour.info.substr(0,200)}<button onClick={()=>setFullText(!fullText)} type="button" className='btn btn-link shadow-none p-0 border-0'>...show more</button>
                          </p>
                      }
                      <button onClick={()=>removeTour(tour.id)} type='button' className='btn btn-outline-danger'style={{margin:"0 auto", display:'block',width:'auto'}} >Not Interested</button>
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
