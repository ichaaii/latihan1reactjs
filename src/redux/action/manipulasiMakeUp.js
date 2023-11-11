import { createSlice } from '@reduxjs/toolkit'

export const manipulasiMakeUp = createSlice({ 
    name: 'KotakMakeUp',
    initialState: {
        jumlahmakeup : 10,
        namaBrand : "lato lato",
        penerbit : "sari roti",
        listBedak : ["bedak tabur", "bedak foundation", "bedak halus"]
    },
    //untuk manipulasi data yg ada
    reducers: {
        kurangiMakeup : (state) => {state.jumlahmakeup = state.jumlahmakeup - 1},
        tambahMakeup : (state) => {state.jumlahmakeup = state.jumlahmakeup + 1},
    
        gantiBrand : (state, action) =>{
            state.namaBrand = action.payload.namaBrand
            state.penerbit = action.payload.penerbit
        },

        hapusBedak : (state) => {
            state.listBedak.pop()
        },

        tambahBedak : (state, action) => {
            state.listBedak.push(action.payload)
        },

    },  

 })

 export const { kurangiMakeup , tambahMakeup, gantiBrand, hapusBedak, tambahBedak} = manipulasiMakeUp.actions

 export default manipulasiMakeUp.reducer