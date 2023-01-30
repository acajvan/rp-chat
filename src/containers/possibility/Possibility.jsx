import React from 'react'
import possibilityImage from '../../../src/assets/possibility.png'
import './possibility.css'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4> Request Early Access to this powerful tool.</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Enjoy the great opportunities offered by this OpenAI which can help you with everything you need and more. GPT-3 is one of the most versatile and transformative components that you can include in your framework, application or service. </p>
        <h4>Early Access can be requested now</h4>

        </div>
    </div>
  )
}

export default Possibility