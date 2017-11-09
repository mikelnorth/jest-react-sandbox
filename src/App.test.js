const funcs = require('./utilities/functions.js');
const cars = require('./../server/carData.json')

test('getCars function test', () => {
    expect.assertions(1);
    const url = "http://localhost:3001/api/cars"
    return funcs.getCars(url).then(res => {
        expect(res[0].color).toEqual('Yellow')
    })
})

test('filterById will return correct car', () => {
    let carToCheck = funcs.filterById(cars, 5)
    expect(carToCheck[0].id).toEqual(5);
})

test('Check if random number is between 1 & 10', () => {
    expect(funcs.getRandomNum()).toBeLessThanOrEqual(10);
    expect(funcs.getRandomNum()).toBeGreaterThanOrEqual(1);

})

test('is color correct', () => {
    let color = funcs.getByColor(cars, "Yellow");
    expect(color[0].color).toBe("Yellow")
})

test('return winner of the match', () => {
    expect(funcs.whoWins(20, 20, 10, 10)).toBe('Elf')
    expect(funcs.whoWins(4, 6, 4, 8)).toBe('Elf')
    expect(funcs.whoWins(3, 6, 4, 8)).toBe('Orc')
    expect(funcs.whoWins(5, 10, 10, 6)).toBe('Orc')
})