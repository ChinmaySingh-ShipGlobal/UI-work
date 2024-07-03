import { ADD_INPUT_DATA } from "./constants";
import { RateInitialState } from "./interfaces";


const reducer = (state=RateInitialState, action)=>{
    switch(action.type){
        case ADD_INPUT_DATA:
            return{
                ...state,action.payload
            }
    }
}
export default reducer;