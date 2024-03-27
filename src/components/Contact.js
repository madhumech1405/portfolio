import React from 'react'
export default function Contact() {
    const config={
        email:'madhumech1405@gmail.com',
        phone:'+91-8838489260'
    }
  return (
    <section  id='contact' className='flex flex-col bg-primary px-5 py-32 text-white' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>if you want to discuss more in detail,please contact me</p>
            <p className='py-2'><span className='font-bold'>Email :</span>{config.email}</p>
            <p className='py-2'><span className='font-bold'>phone:</span>{config.phone}</p>
        </div>
      
    </section>
  )
}