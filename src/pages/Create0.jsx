// 'use-client'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Create_acc_Button, Signup_Button } from '../components/Buttons'

import { useAppContext } from '../context/AppCOntext';




function Create0() {
  const { Name, setName, Email, setEmail } = useAppContext();


  useEffect(() => {

  }, [])


  return (
    <div className='relative flex flex-col justify-center h-screen w-full '>
      <h1 className="w-full py-[12px] px-[16px] text-center text-3xl absolute top-0">100X</h1>
      <main className='flex flex-col justify-center gap-1 items-start px-[28px] box-content'>
        <h3 className="text-3xl ">Hapenning now</h3>
        <p className='mb-[40px]'>Join today.</p>
        <Link href={'/Create1'}>
          <Create_acc_Button >Create account</Create_acc_Button>
        </Link>
        <div className="my-[40px] w-full flex justify-center items-center gap-1">
          <p className='h-[1px] bg-white ' style={{ width: 'calc(min(155px, 40vw))' }}></p>
          <p>or</p>
          <p className='h-[1px] bg-white ' style={{ width: 'calc(min(155px, 40vw))' }}></p>
        </div>
        <p className='mb-[20px]'>Already have an account?</p>
        <Link href={''}>
          <Signup_Button  >Sign in</Signup_Button>
        </Link>
        {/* <Signup_Button onClick={gotoLogin1} >Sign in</Signup_Button> */}

        <div className="my-[40px] w-full flex justify-center items-center gap-1">
          <p className='h-[1px] bg-white ' style={{ width: 'calc(min(155px, 40vw))' }}></p>
          <p>or</p>
          <p className='h-[1px] bg-white ' style={{ width: 'calc(min(155px, 40vw))' }}></p>
        </div>
        <Link href='' className='relative flex justify-center items-center rounded-full bg-white px-2  w-[334px]' onClick={''}>
          <img src="Images/google.png" alt="" className='w-10 mx-2' />
          <button className="bg-white text-black font-semibold">  Sign in with Google</button>

        </Link>

      </main>

    </div>
  )
}

export default Create0

// microblogging100x-dadb27e921ca.herokuapp.com