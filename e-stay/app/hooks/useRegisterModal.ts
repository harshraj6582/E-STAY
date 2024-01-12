'use client'
import {create} from 'zustand'

interface RegisterModalStore{
    isOpen : boolean ;
    onOpen : () => void ;
    onClose : () => void ;
}


const userRegisterModal = create<RegisterModalStore>((set)=> ({
    isOpen : true ,
    onOpen : () => set({ isOpen : true}),
    onClose : () => set({ isOpen : false}),
   


})) 
 
export default userRegisterModal;