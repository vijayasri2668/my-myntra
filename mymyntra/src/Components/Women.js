// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// const Women = () => {
//   const[data,setData]=useState([]);
//   useEffect(()=>{
//       axios.get('https://fakestoreapi.com/products?limit=10').then(response=>{
//         setData(response.data)  
//         // console.log(data);
//       })
//   },[]);
//   return (
//     <div className='container'>
//     <div style={{display:'flex', flexWrap:'wrap'}}>
//         {
//             data.map((result,id)=>
//                 <div key={result.id} style={{margin:'45px', marginTop:'150px'}}>
//                 <div>
//                 <img src={result.image} alt="" style={{width:"350px",height:"300px"}}/>
//                 </div>
//                 <div style={{marginTop:"30px"}}>
//                 <h3>{result.name}</h3>
//                 <p>{result.title}</p>
//                 <h3>Rs.{result.price}</h3>  
//                 </div>
//                 </div>
//             )
//         }
//     </div>
//     </div>
    
//   )
// }

// export default Women



import React, { useEffect, useState } from 'react';
const Women = () => {
  const[data,setData]=useState([]);
  useEffect(()=>{
        fetch('/api').then(
            response=>response.json()
        ).then(
            data=>{
                setData(data)
            }
        )
      },[]);
  return (
    <div className='container'>
    <div style={{display:'flex', flexWrap:'wrap'}}>
        {
            data.map((result,id)=>
                <div key={result.id} style={{margin:'45px', marginTop:'150px'}}>
                <div>
                <img src={result.image} alt="" style={{width:"350px",height:"300px"}}/>
                </div>
                <div style={{marginTop:"30px"}}>
                <h3>{result.name}</h3>
                <h4>{result.category}</h4>
                <p>{result.title}</p>
                <h3>Rs.{result.price}</h3>  
                </div>
                </div>
            )
        }
    </div>
    </div>
    
  )
}

export default Women