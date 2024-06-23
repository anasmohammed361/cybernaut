import React from 'react'

import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

const ContactForm = ({ title, desc }: { title: string, desc: string }) => {

  return (
    <div className='flex flex-col gap-4 p-10 lg:p-16 xl:p-28'>
      <h1 className='text-4xl font-semibold'>{title}</h1>
      <p>{desc}</p>

      <Input className='rounded-xl' placeholder='Full Name'/>
      <Input className='rounded-xl' placeholder='Designation'/>
      <Input className='rounded-xl' placeholder='Organization'/>
      <Input className='rounded-xl' placeholder='Email id'/>
      <Input className='rounded-xl' placeholder='Contact'/>
      
      <div className='flex gap-2 items-center'>
        <Checkbox />
        <span className='leading-none text-xs'>I&apos;ve read Cybernaut&apos;s privacy policies and agree to its Terms & Conditions</span>
      </div>
      <Button className='bg-[#418BF3] hover:bg-[#418BF3]/90 w-fit mx-auto mt-4'>
        Let&apos;s Collab
      </Button>
    </div>
  )
}

export default ContactForm