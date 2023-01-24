import React from 'react'
import { Feature } from '../../components'
import './whatgpt3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feautre'>
        <Feature title="What is GPT3?" text="The third generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>What is GPT-3?</h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Unlike traditional chatbots, Chat GPT-3 isn't connected to the internet and does not have access to external information. Instead, it relies on the data it has been trained on to generate responses. This data includes a vast array of texts from various sources, including books, articles, and websites." />
        <Feature title="Possibilities" text="Viable identifies themes, emotions, and sentiment from surveys, help desk tickets, live chat logs, reviews, and more." />
        <Feature title="Education" text="GPT-3 is a neural network machine learning model trained using internet data to generate any type of text. It applies machine learning to generate various types of content, including stories, code, legal documents, and even translations based on just a few input words." />
      </div>
    </div>
  )
}

export default WhatGPT3