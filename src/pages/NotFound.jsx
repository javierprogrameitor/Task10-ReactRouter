import React from 'react'
import giftNotFound from '../img/error-404.webp'

export default function NotFound() {
  return (
    <>
      <div className="flex items-center justify-center h-full p-4">
        <h1 className="text-3xl font-bold">Página no encontrada</h1>
      </div>
      <div className="flex items-center justify-center h-full p-2">
        <img src={giftNotFound} alt="gift" className="w-1/3 h-1/3" />
      </div>
    </>
  )
}
