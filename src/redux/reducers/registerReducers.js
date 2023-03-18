import { REGISTER } from '../actions/registerActions';

const initialState = { result: [] };

export default function registerReducers(state = initialState, action) {
   switch (action.type) {
      case REGISTER:
         return {
            ...state,
            result: action.payload.result
         };
      default:
         return state;
   }
}
