function mapReduce(inputs){
  let result =inputs.map(obj=>obj[0]).reduce((dummyString,x)=>dummyString+x,'')
  console.log(`[${inputs}] becomes ${result}`);
}

module.exports = mapReduce;
