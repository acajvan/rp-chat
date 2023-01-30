import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css'

const feautresData = [
  {
    title: 'Improved Productivity',
    text: 'GPT-3 is a general-purpose language model that can be used to generate text, images, and code. It can be used to create new products, automate processes, and improve existing products.'
  },
  {
    title: 'General problem solving',
    text: 'GPT-3 can be used to solve a wide range of problems, including natural language processing, computer vision, and machine learning. It can also be used to solve problems that are not yet solved by existing AI systems.'
  },
  {
    title: 'Enchanced Creativity',
    text: 'GPT-3 can be used to create new products, automate processes, and improve existing products. It can also be used to solve problems that are not yet solved by existing AI systems.'
  },
  {
    title: 'Better Decision Making',
    text: 'GPT-3 provides better decision making by using the power of AI. It can calculate the best possible decision for you and your business.'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'> The future is Now and You just need to realize it. Step in future today.
        </h1>
        <p>Request early access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {feautresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features