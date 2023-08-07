"use client";

import {useEffect} from "react"
import {Modal} from "@/components/ui/modal"
import { userStoreModal } from "@/hooks/use-store-modal";
const SetupPage=()=>{
    const onOpen=userStoreModal((state)=>state.onOpen)
    const isOpen=userStoreModal((state)=>state.isOpen)

    useEffect(()=>{
       if(!isOpen){
        onOpen();
       }
    },[isOpen,onOpen]);
    return(
        <div className="p-4">
            {/* <Modal title="Test" description="Test desc" isOpen onClose={()=>{}} >
                 Children
            </Modal> */}
            RootPAge
        </div>
    )
}
export default SetupPage