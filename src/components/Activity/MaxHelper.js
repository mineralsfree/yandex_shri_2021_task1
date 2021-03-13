export const getRange = (data) =>{
  const tempArr = []
  let dataArr = Object.values(data);
  dataArr.forEach((row) => tempArr.push(Math.max.apply(null, row)));
  const max = Math.max.apply(null, tempArr);
  const resolveObject =  {0: 'min'};
  const rangeLength =Math.floor(max / 3);
  console.log(max);
  for (let i = 1; i <= max; i++) {
    const val = i / rangeLength
    if (val <= 1) {
      resolveObject[i] = 'mid';
    } else if (val <= 2) {
      resolveObject[i] = 'max';
    } else {
      resolveObject[i] = 'extra';
    }
  }
  console.log(      resolveObject);
  return [rangeLength, max, resolveObject];
}