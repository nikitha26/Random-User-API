import React from "react";
const BUY_CAKE = "BUY_CAKE";

function buycake(){
    return{
        type:BUY_CAKE,
    }
}

const initialstate = {
    name:"coolcake ",
    cake:20,
}

const Reducer = (state = initialstate , action) =>{
        switch (action.type) {
           case BUY_CAKE: return{
               cake:state-1,
           } 
           default:return state
       }
}

export default Reducer;