'use-client'
import { decrement, increment } from '@/slices/counterSlice'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  console.log(counter, 'counter')

  const Router = useRouter()

  return (
    <div className="h-screen w-full flex flex-col gap-5 items-center justify-center">
      <p>Hello world {counter} </p>

      <button
        onClick={() => dispatch(increment())}
        className="bg-blue-300 rounded-lg p-3 text-white"
      >
        inc
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-red-300 rounded-lg p-3 text-white"
      >
        dec
      </button>

      <button onClick={()=>Router.push('/home')} className='bg-[#f2f2f2] p-3 rounded-lg'>go to homepage</button>
    </div>
  )
}

export default Home
