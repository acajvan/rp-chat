import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'


const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">You can start building something incredible with GPT-3 OpenAI</h1>
        <p>GPT-3 is a natural language processing system that can generate text, code, and more. It is the most powerful language model ever created.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Type your email here" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content_people">
          <img src={people} alt="people" />
          <p> 1600 people visited the website in the last 24 hours. </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header