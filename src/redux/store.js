import { createStore } from "redux";
import produce from "immer";

//state initial
const initialState = {
  employeesList: [],
};

//action creator
export const addEmployee = (employee) => ({
  type: "addEmployee",
  payload: { newEmployee: employee },
});

function reducer(state = initialState, action) {
  //action addEmployee
  if (action.type === "addEmployee") {

    const newEmployee = action.payload.newEmployee;

    return produce(state, (draft) => {
      draft.employeesList.push(newEmployee)
    });
  }

  //default state return
  return state;
}

//creation du store
export const store = createStore(reducer, initialState);
