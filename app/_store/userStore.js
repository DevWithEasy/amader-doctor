import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const userStore = (set) => ({
    isAuth: false,
    user: {},
    notifications : [],
    appointments : [],
    random: 0,
    addUser: (user) => {
        set(() => ({
            isAuth: true,
            user: user,
            notifications : user.notifications
        }))
    },
    addDoctors: (doctors) => {
        set(() => ({
            doctors: doctors
        }))
    },
    addAppointments : (data)=>{
        set(() => ({
            appointments : data
        }))
    },
    addNotifications: (notifications) => {
        set((state) => ({
            notifications : notifications 
        }))
    },
    readSingleNotification: (id) => {
        set((state) => ({
            notifications: state.notifications.map(notification=> notification._id !== id ? notification : {...notification,status : true})
        }))
    },
    readAllNotifications: () => {
        set((state) => ({
            notifications: state.notifications.map(notification=>{
                return {...notification, status : 'read'}
            })
        }))
    },
    deleteAllNotifications: () => {
        set((state) => ({
            notifications: []
        }))
    },
    removeUser: () => {
        set((state) => ({
            isAuth: false,
            user: {},
            notifications : [],
            appointments : []
        }))
    },
    reload: () => {
        set((state) => ({
            random: Math.random()
        }))
    }
})
const useUserStore = create(
    devtools(
        persist(userStore, {
            name: "user"
        })
    )
)
export default useUserStore;