const LOGIN ='LOGIN'
const LOGOUT='LOGOUT'
const REGISTER='REGISTER'

export function auth(state={isAuth:false},action){
  switch (action.type) {
    case LOGIN:
      return {...state,isAuth:true}
    case LOGOUT :
    return {...state,isAuth:false}
    case REGISTER:
    return {...state,isAuth:null}
    default:
      return state;
  }
}
export function Login(){
  return {type:LOGIN}
}
export function Register(){
  return {type:REGISTER}
}
export function Logout(){
  return {type:LOGOUT}
}