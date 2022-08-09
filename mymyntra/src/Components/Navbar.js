import {NavLink} from 'react-router-dom';
import myntra from '../Components/myntra.png';
// import cart from '../Components/cart.jpg';
import bag from '../Components/bag.png';
// import wishlist from '../Components/wishlist.png';
// import NavMen from '../Components/NavSection/NavMen';
import { useState } from 'react';


function Navbar() {
    const navLinkStyles=({isActive})=>{
        return{  
            color:isActive?'rgb(250, 10, 150)':'black',
            marginLeft: "1%",
            fontWeight: "bold",
            textDecoration: "none",
            color: "#282C3F",
            paddingBottom: "10px",
            paddingLeft: "20px",
            paddingRight: "5px",
            marginRight: '35px',
            marginTop:'10px',
            fontSize:'15px',
            textDecoration: 'none',
          
        }
    }

  return (
    <nav>
          <div className='header'>
             <NavLink to="/Home"><img src={myntra}  height="50px" className='logo'/></NavLink>

             <NavLink style={navLinkStyles} className='link men' to='/Men'>MEN</NavLink>
            
           
             
                <NavLink style={navLinkStyles} className='link women' to='/Women'>WOMEN</NavLink>
            
          
                <NavLink style={navLinkStyles} className='link kids'to='/Kids'>KIDS</NavLink>
         
         
                <NavLink style={navLinkStyles} className='link home' to='/Living'>LIVING</NavLink>
         
            
              <NavLink style={navLinkStyles} className='link beauty' to='/Beauty'>BEAUTY</NavLink>
             
                <input placeholder='Search for products,brands and more' className='inpt'/>
         
                <NavLink style={navLinkStyles} className='link profile' to='/Profile'>Profile</NavLink>
            
             {/* <NavLink to='Wishlist'><img src={wishlist}  height="20px" /></NavLink> */}
          
                <NavLink to='Bag'><img src={bag}  height="40px"/></NavLink>

                
        

             {/* <NavMen/> */}

            
            
          </div>
    </nav>
  )
}

export default Navbar
