import React, { useContext } from 'react'
import { UserContext } from './Category.js'


const Men = () => {
    const [category]=useContext(UserContext)
  return (
    <div className='container'>
    <div style={{display:'flex', flexWrap:'wrap'}}>
        {
            category.map((result,id)=>
                <div key={result.id} style={{margin:'45px', marginTop:'150px'}}>
                <div>
                <img src={result.img} alt="" style={{width:"350px",height:"300px"}}/>
                </div>
                <div style={{marginTop:"30px"}}>
                <h3>{result.name}</h3>
                <p>{result.description}</p>
                <h3>Rs.{result.price}</h3>  
                </div>
                </div>
            )
        }
    </div>
    </div>
  )
}

export default Men
