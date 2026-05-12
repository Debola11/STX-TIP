// import { createContext, useEffect, useReducer } from "react";

// const initialState = {
//   user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null,
//   token: localStorage.getItem("token"),
//   activationToken: localStorage.getItem("activationToken"),
//   activation_Code: localStorage.getItem("activation_Code")
// };

// export const authContext = createContext(initialState);

// interface State {
//   user: any;
//   token: string | null;
//   activationToken: string | null;
//   activation_Code: string | null;
// }

// interface Action {
//   type: string;
//   payload?: any;
// }

// const authReducer = (state: State, action: Action): State =>
// {
//   switch (action.type)
//   {
//     case "ACTIVATE_USER":
//       return {
//         activationToken: action.pa