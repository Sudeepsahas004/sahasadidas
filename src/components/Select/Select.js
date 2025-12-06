import React from 'react'

const Select = ({title,options}) => {
  return (
    <div>
      <select defaultValue={""} className='w-18 md:w-18  border border-gray-300 py-2 md:p-3 md:py-3 md:m-2'>
        <option disabled hidden value={""} >{title}</option>
        {options.map(option=>(<option key={option} >
            {option}
        </option>))}
       
      </select>
    </div>
  )
}

export default Select
