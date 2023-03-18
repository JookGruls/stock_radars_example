export function register(result) {
   return async (dispatch, getState) => {
      const currentResult = getState().result.result;
      dispatch(addResultRegister([...currentResult, result]));
   };
}

export const REGISTER = 'REGISTER';

export const addResultRegister = (result) => ({
   type: REGISTER,
   payload: { result }
});
