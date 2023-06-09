import React from 'react'

import { Link } from 'react-router-dom'
import './PricingStyles.css'
const Pricing = () => {
  return (
    <div className='Pricing'>
    <div className='card-container'>
    <div className='card'>
    <h3>- suite -</h3>
    <span className='bar'></span>
    <p className='btc'>1 BTC</p>
    <p>- 3 Days -</p>
    <p>- Views -</p>  
    <p>- Featured -</p>
      <p>- Private Quarters -</p>
      < Link to='/content' className='btn'>Book</Link>    
    </div>
    <div className='card'>
    <h3>- Executive -</h3>
    <span className='bar'></span>
    <p className='btc'>1 BTC</p>
    <p>- 3 Days -</p>
    <p>- Views -</p>  
    <p>- Featured -</p>
      <p>- Private Quarters -</p>
      < Link to='/content' className='btn'>Book</Link>    
    </div>
    </div>
      
    </div>
  )
}

export default Pricing
