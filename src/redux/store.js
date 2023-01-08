import { createStore } from "redux";
import produce from "immer";

//state initial
const initialState = {
  employeesList: [
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue randomaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH",
    },
    {
      firstName:"Test2",
      lastName:"Test2",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test3",
      lastName:"Test3",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test4",
      lastName:"Test4",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test5",
      lastName:"Test5",
      birthDate:"12/01/1993",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test6",
      lastName:"Test6",
      birthDate:"12/01/1992",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1994",
      startDate:"12/01/2017",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1994",
      startDate:"12/01/2020",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2021",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },{
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1994",
      startDate:"12/01/2017",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1994",
      startDate:"12/01/2020",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2021",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },{
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1994",
      startDate:"12/01/2017",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1994",
      startDate:"12/01/2020",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2021",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },{
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1994",
      startDate:"12/01/2017",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1994",
      startDate:"12/01/2020",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2021",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },{
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1994",
      startDate:"12/01/2017",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1994",
      startDate:"12/01/2020",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2021",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },{
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1994",
      startDate:"12/01/2017",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1994",
      startDate:"12/01/2020",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2021",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },{
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"93",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1994",
      startDate:"12/01/2017",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"93",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1994",
      startDate:"12/01/2020",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"93",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2021",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
    {
      firstName:"Test",
      lastName:"Test",
      birthDate:"12/01/1997",
      startDate:"12/01/2022",
      street:"rue random",
      city:"calais",
      state:"alabama",
      zipCode:"62",
      department:"RH"
    },
  ],
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
