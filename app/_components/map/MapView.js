'use client'
import useServiceStore from '@/app/_store/serviceStore';
import api_url from '@/app/_utils/apiurl';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const MapView = () => {
    const center = [26.082397467648313, 88.4669244779722]
    const { addHospitals, hospitals } = useServiceStore()

    async function getAllHospitals() {
        try {
            const res = await axios.get(`${api_url}/api/vanue/all`, {
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            })
            addHospitals(res.data.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        getAllHospitals()
    })

    return (
        <div
            className='h-screen w-full fixed top-0 left-0 bg-slate-100'
        >
            <MapContainer
                center={center}
                zoom={10}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
};

export default MapView;
