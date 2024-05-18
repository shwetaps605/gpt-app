'use client'
import React, { useEffect } from 'react'
import { addNewJob } from '../utils/actions'
import toast from 'react-hot-toast'
import { useFormStatus, useFormState } from 'react-dom'


const initialState = {
  message: null
}

const AddJobForm = () => {

  const { pending } = useFormStatus();

  const [actionResponseState, formAction ] = useFormState(addNewJob, initialState)
  console.log('formState-->', actionResponseState)  

  useEffect(()=>{
    if(actionResponseState.message === 'success') {
      toast.success(actionResponseState.message)
    } else {
      toast.error('Job could not be added')
    }
  },[actionResponseState])
  


  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log('form submitted');
  //   console.log(e)
  //   const formData = new FormData(e.currentTarget);
  //   console.log(Object.fromEntries(formData.entries()));
  // }

  return (
    <form className='max-w-2xl' action={formAction}>
        <h2 className='text-2xl text-blue-500'>
            Add a new job
        </h2>
        <div className='join w-full mt-10'>
            <label htmlFor="jobTitle" className='bg-base-300 join-item  flex justify-center align-middle text-center items-center pl-2 w-[50%]'>
              <span className='text-sm mr-5'>Enter job title</span>
            </label>
            <input type='text' name='jobTitle' required className='join-item input input-bordered w-full  '/>
        </div>

        <div className='join w-full mt-5'>
            <label htmlFor="company" className='bg-base-300 join-item  flex justify-center align-middle text-center items-center pl-2  w-[50%]'>
              <span className='text-sm mr-5'>Company Name</span>
            </label>
            <input type='text' name='company' required className='join-item input input-bordered w-full '/>
        </div>

        <div className='join w-full mt-5'>
            <label htmlFor="jobUrl" className='bg-base-300 join-item  flex justify-center align-middle text-center items-center pl-2  w-[50%]'>
              <span className='text-sm mr-5'>JD link?</span>
            </label>
            <input type='text' name='jobUrl' className='join-item input input-bordered w-full '/>
        </div>

        <div className='join w-full mt-5'>
            <label htmlFor="location" className='bg-base-300 join-item  flex justify-center align-middle text-center items-center pl-2  w-[50%]'>
              <span className='text-sm mr-5'>Location</span>
            </label>
            <input type='text' name='location' className='join-item input input-bordered w-full  '/>
        </div>

        <div className='join w-full mt-5'>
            <label htmlFor="status" className='bg-base-300 join-item  flex justify-center align-middle text-center items-center pl-2  w-[50%]'>
              <span className='text-sm mr-5'>Status</span>
            </label>
            
            <select name="status" id="status" className='join-item select input-bordered w-full' defaultValue={'DEFAULT'}>
              <option disabled value='DEFAULT'>Choose here 👇</option>
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
            </select>

            {/* <input type='text' name='jobTitle' className='join-item input input-bordered '/> */}
        </div>

        <button className='btn btn-secondary mt-10' type='submit'>
          {pending ? 'Adding job...' : 'Add job'}
        </button>

    </form>
  )
}

export default AddJobForm