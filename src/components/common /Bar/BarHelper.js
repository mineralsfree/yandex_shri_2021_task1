export const getStylesForBar = (number) =>{
  let marginLeft = 0;
  let marginRight = 0;
  let zIndex = 10;
  if (number===2){
    marginLeft='-16px';
    zIndex=9;
  } else if (number===3){
    marginRight='-16px';

  } else if (number===4){
    marginLeft='-16px';
    zIndex=8
  } else if (number!==1) {
    marginRight='-16px';
  }
  return {marginRight, marginLeft, zIndex}
}
export const getStylesForNumber = number => {
  if (number === 1) {
    return {}
  } else if (number===2){
    return {marginLeft: '16px'}
  } else if (number===3){
    return {marginRight: '16px'}
  } else if (number===4){
    return {marginLeft: '16px'}
  } else {
    return {marginRight: '16px'}

  }
}