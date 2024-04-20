import React from 'react'
import { Button } from '@/components/ui/button'
import ContactForm from './ContactForm'

const content = [
  {
    title: 'The MOU Program',
    callingCard: "Do you want Cybernaut to be part of your organization",
    desc: "Lorem ipsum dolor sit amet consectetur. Dui lacus purus commodo lacus amet et. Pulvinar etiam sit nec nunc massa cursus. Sed eu arcu risus ultrices porta. Id est integer et lectus. Lorem ipsum dolor sit amet consectetur. Dui lacus purus commodo lacus amet et. Pulvinar etiam sit nec nunc massa cursus. Sed eu arcu risus ultrices porta. Id est integer et lectus.Lorem ipsum dolor sit amet consectetur. Dui lacus purus commodo lacus amet et. Pulvinar etiam sit nec nunc massa cursus. Sed eu arcu risus ultrices porta. Id est integer et lectus",
    reasons: ["Commitment", "Priviliged", "Commitment", "Priviliged"]
  },
  {
    title: 'The VAC Program',
    callingCard: "Do you want Cybernaut to be part of your organization",
    desc: "Lorem ipsum dolor sit amet consectetur. Dui lacus purus commodo lacus amet et. Pulvinar etiam sit nec nunc massa cursus. Sed eu arcu risus ultrices porta. Id est integer et lectus. Lorem ipsum dolor sit amet consectetur. Dui lacus purus commodo lacus amet et. Pulvinar etiam sit nec nunc massa cursus. Sed eu arcu risus ultrices porta. Id est integer et lectus.Lorem ipsum dolor sit amet consectetur. Dui lacus purus commodo lacus amet et. Pulvinar etiam sit nec nunc massa cursus. Sed eu arcu risus ultrices porta. Id est integer et lectus",
    reasons: ["Commitment", "Priviliged", "Commitment", "Priviliged"]
  }
]

const Programs = () => {
  return (
    <div className='relative max-sm:px-8 flex flex-col lg:flex-row flex-wrap gap-20 '>
      <div className='flex-1 flex flex-col justify-start gap-32'>
        {content.map((item, i) => (
          <div key={i} className='flex flex-col gap-5'>
            <h1 className='text-4xl font-bold'>{item.title}</h1>
            <h2 className='text-4xl font-medium'>{item.callingCard}</h2>
            <p className='text-justify'>{item.desc}</p>

            <div className='flex flex-col gap-5'>
              <h4 className='text-2xl font-semibold mt-5'>Why Choose us?</h4>
              <ul className='flex flex-wrap items-center max-sm:justify-center gap-5'>
                {item.reasons.map((reason, i) => (
                  <li key={i} className='flex flex-col gap-2 items-center justify-center'>
                    <div className='h-24 w-24 rounded-full sm:rounded-lg bg-neutral-200' />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex items-center gap-5'>
              <Button variant="outline" className='w-fit border-black border-2 font-bold rounded-full'>
                Know More
              </Button>
              <span className='text-sm text-neutral-300 font-semibold'>
                Swipe to know more &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className='flex-1 lg:sticky lg:top-[10%] lg:inset-0  bg-[#EFF3F9] rounded-3xl h-fit'>
        <ContactForm 
          title="Let's Collab"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus tempora nostrum eos tempore ipsam"
        />
      </div>
    </div>

  )
}

export default Programs