const { add, subtract, multiply } = require('../src/calculator');

beforeAll(() => {
    console.log("Before all Tests")
})

beforeEach(() => {
    console.log("Before each Test")
})

afterEach(() => {
    console.log("After each Test")
})

afterAll(() => {
    console.log("After all Tests")
})


test('Adding two numbers', async () => {
    expect(add(5, 5)).toStrictEqual(10)
    expect(add(100, 200)).toStrictEqual(300)
})

test('Subtracting two numbers', async () => {
    expect(subtract(10, 10)).toStrictEqual(0)
    expect(subtract(200, 100)).toStrictEqual(100)
})

test('Multiplying two numbers', async () => {
    expect(multiply(10, 10)).toStrictEqual(100)
    expect(multiply(200, 100)).toStrictEqual(20000)
})