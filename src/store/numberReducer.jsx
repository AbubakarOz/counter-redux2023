const initialState = {
    number: 0,
  };
  
const start = "start";
const increment = "increment";
const decrement = "decrement";
const random = "random";

export const numberReducer = (state = initialState, action) => {
    switch (action.type) {
      case start:
        return {
          ...state,
          number: (state.number = 0),
        };
      case increment:
        return {
          ...state,
          number: state.number < 100 ? state.number + 1 : state.number,
        };
      case decrement:
        return {
          ...state,
          number: state.number > 0 ? state.number - 1 : state.number,
        };
      case "random":
        return {
          ...state,
          number: (state.number = action.payload),
        };
      default:
        return state;
    }
  };