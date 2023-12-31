import React from 'react'
import { SignUp } from '../components/InputTweet'
import { InputBox } from '../components/Input'
import { Create_acc_Button, Signup_Button } from '../components/Buttons'
import {Link} from 'react-router-dom'


function Create4({}) {
    return (
        <main className='px-[15px] pb-[20px]  justify-start'>
            <SignUp>Step 3 of 4</SignUp>
            <h1 className='text-2xl font-bold '>We sent you a code</h1>
            <p className="text-sm my-[8px] text-gray-500">Make sure its 8 Characters</p>
            <article className='flex flex-col  my-[20px]'>
                <InputBox label={'Password'} tick={false} eye={true}/>
                
            </article>

            <footer className='absolute bottom-0 flex justify-center w-full '>
                <Create_acc_Button disabled={true}>Next</Create_acc_Button>
            </footer>
            <a className='bg-sky-500  px-4 rounded-full' href='http://localhost:3000/Create3'>← prev</a>
      <a className='bg-sky-500  px-4 rounded-full' href='http://localhost:3000/Home'>next  →</a>

        </main>
    )
}

export default Create4;
