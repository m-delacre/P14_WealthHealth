import { createStore } from "redux";
import produce from "immer";

//state initial
const initialState = {
  employeesList: [
    {
      firstName:"Marcus",
      lastName:"Williams",
      birthDate:"1997/04/12",
      startDate:"2020/03/23",
      street:"44 rue joie",
      city:"Calais",
      state:"Alabama",
      zipCode:"8845",
      department:"Marketing",
    },
    {
      firstName:"Mathilde",
      lastName:"Dincourt",
      birthDate:"2001/06/03",
      startDate:"2022/11/24",
      street:"33 rue feuille",
      city:"Boulogne",
      state:"Arizona",
      zipCode:"62200",
      department:"Human ressources"
    },
    {
      firstName:"Colas",
      lastName:"Corazon",
      birthDate:"1980/08/19",
      startDate:"2018/04/04",
      street:"88 rue carton",
      city:"Lille",
      state:"Florida",
      zipCode:"9944",
      department:"Legal"
    },
    {
      firstName:"Jean-Pierre",
      lastName:"Christophe",
      birthDate:"1982/05/30",
      startDate:"2015/01/11",
      street:"rue affiche",
      city:"Austin",
      state:"Texas",
      zipCode:"7789",
      department:"Sales"
    },
    {
      firstName:"Amy",
      lastName:"Storford",
      birthDate:"1991/12/02",
      startDate:"2017/07/06",
      street:"rue carraux",
      city:"Bectone",
      state:"Utah",
      zipCode:"4532",
      department:"Sales"
    },
    {
      firstName:"Maria",
      lastName:"Sanchez",
      birthDate:"1992/09/21",
      startDate:"2020/02/14",
      street:"rue carzil",
      city:"Pentone",
      state:"Idaho",
      zipCode:"4412",
      department:"Engineering"
    },
    {
      firstName:"Buck",
      lastName:"Soulwest",
      birthDate:"1996/07/16",
      startDate:"2019/02/28",
      street:"rue farnear",
      city:"Putchok",
      state:"Vermont",
      zipCode:"7788",
      department:"Engineering"
    },
    {
      firstName:"Yasmine",
      lastName:"Adarah",
      birthDate:"1989/08/29",
      startDate:"2016/04/23",
      street:"rue random",
      city:"Picoretti",
      state:"Iowa",
      zipCode:"8895",
      department:"Human ressources"
    },
    {
      firstName:"Edmon",
      lastName:"Breslov",
      birthDate:"1990/06/14",
      startDate:"2021/03/12",
      street:"rue palao",
      city:"Pertron",
      state:"Missouri",
      zipCode:"2277",
      department:"Sales"
    },
    {
      firstName:"Ygor",
      lastName:"Rosovic",
      birthDate:"1997/01/12",
      startDate:"2021/01/15",
      street:"rue biscodoro",
      city:"Marsweart",
      state:"Maine",
      zipCode:"6644",
      department:"Sales"
    },
    {
      firstName:"Helene",
      lastName:"Swarchz",
      birthDate:"1992/03/16",
      startDate:"2022/05/26",
      street:"rue pittortfol",
      city:"Qwario",
      state:"Michigan",
      zipCode:"8877",
      department:"Marketing"
    },
    {
      firstName:"Emilio",
      lastName:"Ramizota",
      birthDate:"1992/10/18",
      startDate:"2016/02/03",
      street:"rue marleo",
      city:"Pesbunt",
      state:"Ohio",
      zipCode:"3344",
      department:"Sales"
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
