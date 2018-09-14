export function bg(state=0,action){
  if(typeof action.type ==='number'){
    return action.type;
  }else{
    return 2
  }
}
export function changeBg(num=0){
  return {type:num}
}