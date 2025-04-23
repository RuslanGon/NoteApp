import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import NoteModel from '../components/NoteModel.jsx'

const Home = () => {

const [isModel, setIsModel] = useState(false)  

  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <button onClick={() => setIsModel(true)}
      className='fixed right-4 bottom-4 text-2xl bg-teal-500 text-white font-bold p-4 rounded-full'>
        +
      </button>
      {isModel || <NoteModel />}
    </div>
  )
}

export default Home