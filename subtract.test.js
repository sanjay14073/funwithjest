const {subtraction}=require('./index')
test('case 1 for diff',()=>{
    expect(subtraction(2,3)).toBe(-1)
})
test('case 2 for diff',()=>{
    expect(subtraction(200,-3)).toBe(203)
})
test('case 3 for diff',()=>{
    expect(subtraction(2000,300)).toBe(1700)
})
test('case 4 for diff',()=>{
    expect(subtraction(10000,10000)).toBe(0)
})
test('case 5 for diff',()=>{
    expect(subtraction(22,33)).toBe(-11)
})