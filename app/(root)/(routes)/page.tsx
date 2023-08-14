"use client";

import {useEffect} from "react"
import { userStoreModal } from "@/hooks/use-store-modal";
const SetupPage=()=>{
    const onOpen=userStoreModal((state)=>state.onOpen)
    const isOpen=userStoreModal((state)=>state.isOpen)

    useEffect(()=>{
       if(!isOpen){
        onOpen();
       }
    },[isOpen,onOpen]);
    return null
}
export default SetupPage