const {sum}=require('./index')
test('case 1 for sum',()=>{
    expect(sum(2,3)).toBe(5)
})
test('case 2 for sum',()=>{
    expect(sum(200,-3)).toBe(197)
})
test('case 3 for sum',()=>{
    expect(sum(2000,300)).toBe(2300)
})
test('case 4 for sum',()=>{
    expect(sum(-10000,10000)).toBe(0)
})
test('case 5 for sum',()=>{
    expect(sum(22,33)).toBe(55)
})