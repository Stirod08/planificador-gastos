import { useState } from 'react';
import type { ChangeEvent } from 'react';

export default function BudgetForm() {
  const [budget, setBudget] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
  };
  return (
    <>
      <form className='space-y-5'>
        <div className='flex flex-col space-y-5'>
          <label htmlFor='budget' className='text-4xl text-blue-600 font-bold text-center'>
            Definir Presupuesto
          </label>
          <input
            id='budget'
            type='number'
            className='w-full border border-gray-200 bg-white p-3'
            placeholder='Define tu presupuesto'
            name='budget'
            value={budget}
            onChange={handleChange}
          />
        </div>
        <input
          type='submit'
          value='Definir presupuesto'
          className='bg-blue-600 hover:bg-blue-800 text-white w-full p-3 font-bold cursor-pointer uppercase'
        />
      </form>
    </>
  );
}
