'use client'

import { useState } from "react"
import MapView from "../_components/map/MapView"

export default function Maps() {
  const [view,setView] = useState(false)
  return (
    <div
      className="h-[calc(100vh-60px)] flex justify-center items-center"
    >
      <button
        onClick={()=>setView(!view)}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Enable Location
      </button>
      {view &&
        <MapView/>
      }
    </div>
  )
}