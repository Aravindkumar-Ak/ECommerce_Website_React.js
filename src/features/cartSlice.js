import {createSlice} from "@reduxjs/toolkit"

const initialState={
    cartItems:[],
    amount:1,
    total:0
}



export const cartSlice=createSlice({
name:'cart',
initialState,
reducers:{
    clearCart:(state)=>{
        state.cartItems=[]
        
    },
    removeItem:(state,action)=>{
        const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    addItem:(state,action)=>{
//    state.cartItems.push(action.payload)

   const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
   if (itemInCart) {
     itemInCart.quantity++;
   } else {
     state.cartItems.push({ ...action.payload, quantity: 1 });
   }
    },

    increaseItem:(state,action)=>{
        const cartItem = state.cartItems.find((item) => item.id === action.payload.id);
         cartItem.quantity++;
    },
    decreaseItem:(state,{payload})=>{
        const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if(cartItem.quantity===1){
cartItem.quantity=1;
      }else{
cartItem.quantity--;
      }
    }
}
})
export const {clearCart,removeItem,addItem,increaseItem,decreaseItem}=cartSlice.actions;
export default cartSlice.reducer;