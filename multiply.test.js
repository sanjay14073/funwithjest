const {multiply}=require('./index')
test('case 1 for product',()=>{
    expect(multiply(2,3)).toBe(6)
})
test('case 2 for product',()=>{
    expect( multiply(200,-3)).toBe(-600)
})
test('case 3 for product',()=>{
    expect(multiply(2000,300)).toBe(600000)
})
test('case 4 for product',()=>{
    expect(multiply(10000,0)).toBe(0)
})
test('case 5 for product',()=>{
    expect(multiply(22,3)).toBe(66)
})