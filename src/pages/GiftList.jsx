import { Link } from "react-router-dom";
import { useGifts } from "../context/GiftContext";
import giftNotSelect from "../img/error-500.jpg";


export default function GiftList() {

  const { gifts } = useGifts();
  return (

    <div className="flex-items-center p-5 w-1/4 mx-auto">
      <h2 className="text-center text-2xl font-bold text-fuchsia-950 mb-4">List of recipients </h2>
      {gifts.length === 0 ? (

        <div>
          <p className="text-center text-lg text-fuchsia-600">There are no gifts selected</p>
          <div className="flex items-center justify-center">
            <img src={giftNotSelect} alt="gift"/>
          </div>
        </div>
      ) : (
        <ul className="space-y-2">
          {gifts.map((gift, index) => (
            <li key={index} className="text-center p-2 rounded-xl hover:bg-amber-100">
              <Link to={`/details/${index}`} className="text-xl text-fuchsia-600 hover:underline">
                {gift.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
    
  )
}
