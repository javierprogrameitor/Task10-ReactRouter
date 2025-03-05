// src/pages/GiftDetails.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useGifts } from '../context/GiftContext';


export default function GiftDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { gifts } = useGifts();

  const gift = gifts[(id)];

  if (!gift) {
    return (
      <>
        <div className="p-8">
          <h2 className="text-center text-2xl font-bold mb-4">Gift not found</h2>
        </div>
        <div className="flex items-center justify-center h-full p-2">
          <img src="../error-404.webp" alt="gift" className="w-1/3 h-1/3" />
        </div>
      </>
    );
  }

  return (
    <div className="p-8">
      <h2 className="text-center text-2xl font-bold text-fuchsia-950 mb-4">Gift details</h2>
      <p className='text-center p-2 '>
        <span className="text-amber-500 font-bold">For:</span>
        <p className="text-2xl text-fuchsia-900 font-extrabold" >
          {gift.name}
        </p>
      </p>
      <p className='text-center p-2 '>
        <span className="text-amber-500 font-bold">Gift Description:</span>
        <p className="text-2xl text-fuchsia-900 font-extrabold" >
          {gift.description} of {gift.name} .
        </p>
      </p>
      <div className='flex justify-center'>
        <button
          onClick={() => navigate('/list')}
          className="bg-amber-500 text-white px-4 py-2  hover:bg-fuchsia-600 rounded-xl m-2">
          Return
        </button>
      </div>
    </div>
  );
}
