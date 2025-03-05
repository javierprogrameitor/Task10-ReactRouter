import React from 'react';


export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-full p-8">
        <h1 className="text-4xl font-bold text-red-400">Welcome to gift management</h1>
      </div>
      <div className="flex items-center justify-center h-full p-8">
        <img src="./gift-box.jpg"alt="gift" className="w-1/3 h-1/3" />
      </div>
    </>
  );
}
