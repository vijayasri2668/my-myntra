import React,{useState,createContext} from 'react'
export const UserContext =createContext();
const Category = (props) => {
    const [category] = useState([

         {
        
              id: "1",
        
              category: "Men",
        
              img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2038071/2019/4/9/ace5c891-0717-485c-8080-9c37c5c759821554799993054-Roadster-Men-Black--White-Slim-Fit-Solid-Casual-Shirt-322155-1.jpg",
        
              name: "Roadster",
              price: "1099",
              description: "Mens Casual Shirts",
        
            },
        
            {
        
              id: "2",
        
              category: "Men",
        
              img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10945088/2020/1/31/80fea103-f089-476d-a27d-6594a069a1281580455058892-Roadster-Men-Shirts-6341580455057092-1.jpg",
        
              name: "FORCLAZ By Decathlon",
        
              price: "909",
        
              description: "Mens Casual Shirts",
        
            },
        
            {
        
              id: "3",
        
              category: "Men",
        
              img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11369800/2020/3/5/49d3f5b1-9eb9-44c8-bc83-7d4ecdad46981583403443211-Mast--Harbour-Men-Shirts-9231583403441334-1.jpg",
        
              name: "JAINISH",
        
              price: "699",
        
              description: "Mens Casual Shirts",
        
            },
        
            {
        
              id: "4",
        
              category: "Men",
        
              img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15353326/2021/11/12/c87e0a49-cceb-4c29-8409-498439ad96a01636717967371-Nautica-Men-Shirts-8721636717965949-1.jpg",
        
              name: "NEUDIS",
        
              price: "999",
        
              description: "Mens Casual Shirts",
        
            },
        
            {
        
              id: "5",
        
              category: "Men",
        
              img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10456354/2019/8/22/d56e75f6-f1a7-4fdd-b430-51befb36f88d1566454760527-Campus-Sutra-Men-Colourblocked-Casual-Spread-Shirt-290156645-1.jpg",
        
              name: "US Polo ,Denim",
        
              price: "1249",
        
              description: "Mens Casual Shirts",
        },
        {

                  id: "6",
            
                  category: "Men",
            
                  img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11361282/2020/2/14/e1e0dfa4-da44-478f-a0ff-6ae2dc52b61f1581676447137-WROGN-Men-Shirts-9611581676445142-1.jpg",
            
                  name: "ZALORA BASICS",
            
                  price: "2499",
            
                  description: "Mens Casual Shirts",
            
                }])
  return (
    <div>
    <UserContext.Provider value={[category]} >
       {props.children}
    </UserContext.Provider>
    </div>
  )
}

export default Category