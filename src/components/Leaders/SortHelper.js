export const sortProfiles = (data) => {
  let retArr = [data[0]];
  for (let i = 1; i <=Math.ceil(data.length/2); i+=2) {
    retArr.push(data[i]);
    retArr.unshift(data[i+1]);
  }
  if (data.length % 2 === 0) {
    data.push(data[data.length-1])
  }
  return retArr;
}