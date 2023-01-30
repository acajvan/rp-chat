import React from 'react'
import { Article } from '../../components'
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, we are blogging about it</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="Jan 25, 2023" title="GPT-3 And Open AI is the future. Let us explore how it is?"  />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="Jan 25, 2023" title="Better understanding about how everything works using Chat GPT-3" />
          <Article imgUrl={blog03} date="Jan 25, 2023" title="Looking for exceptional ways to improve your video marketing? Find out how chat GPT 3 can help you create better videos and get more views!" />
          <Article imgUrl={blog04} date="Jan 25, 2023" title="Is ChatGPT the Calculator for this Generation of Students?" />
          <Article imgUrl={blog05} date="Jan 25, 2023" title="Expert and novice cybercriminals have already started to use OpenAI's chatbot ChatGPT in a bid to build hacking tools" />
        </div>
      </div>
    </div>
  )
}

export default Blog