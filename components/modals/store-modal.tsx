"use client";

import { userStoreModal } from "@/hooks/use-store-modal";
import {Modal} from "../ui/modal"

export const StoreModal=()=>{
    const storeModal=userStoreModal();
 return(
    <Modal
    title="Create store"
    description="Add a new store to  manage products and categories"
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}
    >
        Future Create Store Form

    </Modal>
 )
   
}