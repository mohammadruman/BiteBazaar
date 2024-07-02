import React from 'react'

const Footer = () => {
  return (
    <div className='Footer'>
       <div className='Quick-Links'>
        <h3>Quick-Links</h3>
        <ul>
            <li>Home</li>
            <li>About Us</li>
             <li>Restaurants</li>
            <li>Offers</li>
             <li>Contact Us</li>
            <li>Privacy Policy</li>
             <li>FAQs</li>
            <li>Terms & Conditions</li>
        </ul>
       </div>
         <div className='Top-Cities'>
            <h3>Top Cities</h3>
        <ul>
            <li>Mumbai</li>
            <li>Delhi</li>
             <li>Bengaluru</li>
            <li>Kolkata</li>
             <li>Bhubaneswar</li>
            <li>Patna</li>
             <li>Lucknow</li>
            <li>Jaipur</li>
        </ul>
       </div>

         <div className='Follow-Us'>
            <h3>Social Links</h3>
        <ul>

            <li>Facebook</li>
            <li>Twitter</li>
             <li>Instagram</li>
            <li>LinkedIn</li>
             <li>Youtube</li>
        </ul>
       </div>
    </div>
  )
}

export default Footer;