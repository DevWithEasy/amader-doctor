import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const serviceStore = (set) => ({
    hospitals: [],
    specialists: [],
    doctors: [],
    users: [],
    chamberId : '',
    chambers : [],
    process: false,

    addUsers: (data) => {
        set((state) => ({
            users: data
        }))
    },
    addDoctors: (data) => {
        set((state) => ({
            doctors: data
        }))
    },
    addHospitals: (data) => {
        set((state) => ({
            hospitals: data
        }))
    },
    addSpecialists: (data) => {
        set((state) => ({
            specialists: data
        }))
    },
    addChamber: (id) => {
        set((state) => ({
            chamberId: id
        }))
    },
    addChambers: (data) => {
        set((state) => ({
            chambers: data
        }))
    },
    processing: (value) => {
        set((state) => ({
            process: value
        }))
    },
    removeData: (value) => {
        set((state) => ({
            hospitals: [],
            specialists: [],
            doctors: [],
            users: [],
            chambers : [],
        }))
    },
})
const useServiceStore = create(
    devtools(
        persist(serviceStore, {
            name: "service"
        })
    )
)
export default useServiceStore;