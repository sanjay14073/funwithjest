const {divide}=require('./index')
test('case 1 for division',()=>{
    expect(divide(2,3)).toBe(0.6666666666666666)
})
test('case 2 for division',()=>{
    expect( divide(200,2)).toBe(100)
})
test('case 3 for division',()=>{
    expect(divide(2000,500)).toBe(4)
})
test('case 4 for division',()=>{
    expect(divide(10000,0)).toBe(Infinity)
})
test('case 5 for division',()=>{
    expect(divide(0,3)).toBe(0)
})