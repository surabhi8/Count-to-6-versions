const mapReduce = require('./arrow-functions-part1.js')
console = {
  log: jest.fn()
}
{
let inputs = []
mapReduce(inputs)
test('empty array becomes empty',()=>{
  expect(console.log).toHaveBeenCalledWith("["+inputs+"] becomes ");
})
}
{
let inputs = ["Hello","arrow","functions"]
mapReduce(inputs)
test('["Hello","arrow","functions"] becomes Haf',()=>{
  expect(console.log).toHaveBeenCalledWith("["+inputs+"] becomes Haf");
 })
}
{
let inputs = ["Hello"," "," "]
mapReduce(inputs)
test('["Hello"," "," "] becomes H',()=>{
  expect(console.log).toHaveBeenCalledWith("["+inputs+"] becomes H  ");
 })
}
