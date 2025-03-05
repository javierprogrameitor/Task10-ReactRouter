import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { useGifts } from '../context/GiftContext';

export default function GiftForm() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { addGift } = useGifts();

    const handleSubmit = (e) => {
        e.preventDefault();
        //check if name or description are empty
        if (name.trim() === '' || description.trim() === '') return;
        //add the gift to the list of gifts
        addGift({ name, description });
        navigate('/list');
      };

  return (
    <div className="flex-items-center w-1/3 mx-auto p-8">
      <h2 className="text-center text-2xl font-bold text-fuchsia-950 mb-4">Add gift</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-center block font-extrabold mb-1">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-center rounded-xl hover:bg-amber-100 border p-2 w-full"
          />
        </div>
        <div>
          <label className="text-center block font-extrabold mb-1">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="text-center rounded-xl hover:bg-amber-100 border p-2 w-full"
          />
        </div>
        <div className='flex justify-center'>
        <button 
          type="submit" 
          className="bg-amber-500 text-white px-4 py-2  hover:bg-fuchsia-600 rounded-xl" >
          Add to List
        </button>
        </div>
      </form>
    </div>
  )
}
