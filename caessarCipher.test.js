import {caesarCipher,returnletter } from "./caesarCipher";


 test('Test shifting by one inside circle of lower letters',()=>{
    expect(returnletter('a',1)).toBe('b');
 });
 test('Test shifting by 5 inside circle of lower letters',()=>{
    expect(returnletter('a',5)).toBe('f');
 });
 test('Test shifting by minus 2 inside circle of lower letters',()=>{
    expect(returnletter('d',-2)).toBe('b');
 });

 test('Test shifting by one inside circle of upper letters',()=>{
    expect(returnletter('A',1)).toBe('B');
 });

 test('Test shifting by 6 inside circle of upper letters',()=>{
    expect(returnletter('A',6)).toBe('G');
 });
 test('Test shifting by minus 2 inside circle of upper letters',()=>{
    expect(returnletter('D',-2)).toBe('B');
 });

 test('Test shifting by one outside circle of lower letters',()=>{
    expect(returnletter('z',1)).toBe('a');
 });

 test('Test shifting by 4 outside circle of lower letters',()=>{
    expect(returnletter('z',4)).toBe('d');
 });

 test('Test shifting by one outside circle of lower letters',()=>{
    expect(returnletter('Z',1)).toBe('A');
 });

 test('Test shifting by 4 outside circle of lower letters',()=>{
    expect(returnletter('Z',4)).toBe('D');
 });


 test('Test shifting by  minus one outside circle of lower letters',()=>{
    expect(returnletter('a',-1)).toBe('z');
 });

 test('Test shifting by -4 outside circle of lower letters',()=>{
    expect(returnletter('a',-4)).toBe('w');
 });

 test('Test shifting by minus one outside circle of lower letters',()=>{
    expect(returnletter('A',-1)).toBe('Z');
 });

 test("Testing 'abc' to move by one",()=>{
    expect(caesarCipher(1,'abc')).toBe('bcd');
 });

 test("Testing 'aBc' to move by one",()=>{
    expect(caesarCipher(1,'aBc')).toBe('bCd');
 });

 test("Testing 'abc' to move by more",()=>{
    expect(caesarCipher(3,'abc')).toBe('def');
 });

 test("Testing 'testing zen' to move by more",()=>{
    expect(caesarCipher(3,'testing zen')).toBe('whvwlqj chq');
 });

 

