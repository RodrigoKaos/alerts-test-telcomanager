const generateDataSet = (dots: number, limit :number = 1) => {
  let inputDataArr = [];
  let outputDataArr = [];
  for(let i = 0; i < dots; i++) {
    inputDataArr.push( (Math.random() * limit) );
    outputDataArr.push( (Math.random() * ( limit/2 )) );
  }
  return { input: inputDataArr, output: outputDataArr};
}

export default generateDataSet;