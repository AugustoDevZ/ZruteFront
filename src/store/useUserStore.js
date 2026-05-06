import { create } from "zustand";

export const useUserNameStore = create((set)) = (({

    userName: null,
    
    setUserName: (newUserName) => 
        set({
            userName = newUserName
        })
    

}));