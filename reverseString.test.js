import { reverseString } from "./reverseString";

test("Should reverse string 'test' to 'tset'",() =>{
    expect(reverseString('test')).toBe('tset');
});

test("Should reverse string 'dog' to 'god'",() =>{
    expect(reverseString('test')).toBe('tset');
});

test("Should reverse string 'House' to 'esuoh'",() =>{
    expect(reverseString('test')).toBe('tset');
});
