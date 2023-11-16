import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const counter = useSelector((state) => state.counter)

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <p>Count Value : {counter}</p>
    </div>
  )
}

export default Home
