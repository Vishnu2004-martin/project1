import React from 'react'
import './FooterStyles.css'
import{FaFacebook,FaLinkedin,FaMailBulk,FaPhone,FaSearchLocation,FaTwitter} from 'react-icons/fa'
    import { Form } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer-container'>
          <div className='left'>
            <div className='location'>
                <FaSearchLocation size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>
            
             <div>
                <p>123 Acc st</p>
               <h4>Coimbatore,TN</h4>
            </div>
         </div>
          <div className='phone'>
          <h4><FaPhone size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>91+54864649646</h4>
          </div>
         <div className='email'>
          <h4><FaMailBulk size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>trips@galaxy.com</h4>
          </div>
       </div>
       <div className='right'>
          <h4>About Company</h4>
          <p>Put simply, space tourism refers to the activity of travelling into space for recreational purposes.
           It is sometimes referred to as citizen space exploration, personal spaceflight, 
           or commercial human spaceflight, 
           and it covers spaceflights that are sub-orbital,
            orbital, and even beyond Earth orbit.</p>
             <div className='Social'>
             <FaFacebook  size={30} style={{color:'#ffffff',marginRight:'2rem'}}/>
             <FaLinkedin  size={30} style={{color:'#ffffff',marginRight:'2rem'}}/>
             <FaTwitter  size={30} style={{color:'#ffffff',marginRight:'2rem'}}/>
               </div>    
            </div>
      </div>
      
    </div>
  )
}

export default Footer
