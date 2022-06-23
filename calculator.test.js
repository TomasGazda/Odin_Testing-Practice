import { add,subtract,divide,multiply } from "./calculator";

test('Should sum up 1 and 2 result should be 3', () => { 
    expect(add(1,2)).toBe(3);
 })

test('Should sum up 3 and 6 result should be 9', () => { 
    expect(add(3,6)).toBe(9);
 })

test('Should sum up -3 and 6 result should be 3', () => { 
    expect(add(-3,6)).toBe(3);
 })

test('Should sum up -3 and -6 result should be -9', () => { 
    expect(add(-3,-6)).toBe(-9);
 })









 test('Should subtract 1 and 2 result should be -1', () => { 
    expect(subtract(1,2)).toBe(-1);
 })

test('Should subtract 6 and 3 result should be 3', () => { 
    expect(subtract(6,3)).toBe(3);
 })

test('Should subtract -3 and 6 result should be -9', () => { 
    expect(subtract(-3,6)).toBe(-9);
 })

test('Should subtract -3 and -6 result should be 3', () => { 
    expect(subtract(-3,-6)).toBe(3);
 })


test('Should divide 6 by 3, result should be 2', () => { 
    expect(divide(6,3)).toBe(2);
 })
 test('Should divide 1 by 2, result should be 0.5', () => { 
    expect(divide(1,2)).toBeCloseTo(0.5);
 })

 test('Should multipy 6 by 3, result should be 18', () => { 
    expect(multiply(6,3)).toBe(18);
 })
test('Should divide 1 by 2, result should be 0.5', () => { 
    expect(multiply(1,0.5)).toBeCloseTo(0.5);
 })




