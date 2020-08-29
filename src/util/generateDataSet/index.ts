const generateDataSet = (dots: number, limit :number = 1) => {
  let inputDataArr = [];
  let outputDataArr = [];
  for(let i = 0; i <= dots; i++) {
    let random = (Math.random() + 0.1);
    inputDataArr.push( random * limit );
    outputDataArr.push( (random * 0.2 ) * limit );
  }
  return { input: inputDataArr, output: outputDataArr};
}

export default generateDataSet;