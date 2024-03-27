'use client'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('../_components/map/MapView'), {
  ssr: false
})


export default function Maps(){
  return (
    <DynamicMap/>
  )
}