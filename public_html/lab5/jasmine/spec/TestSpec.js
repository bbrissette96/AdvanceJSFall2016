
//describe("reverseString", function() {
//    
//    it("should take a string and reverse it", function() {
//        expect( reverseString('hello') ).toEqual('olleh');
//    });
//    
//    it("should return the value given if not a typeof String", function() {
//        expect( reverseString(null) ).toBe(null);
//        expect( reverseString(0) ).toEqual(0);
//    });
//
//});
//
//
//describe("getMaxOfArray", function() {
//    
//    it("should take an array of numbers and return the highest value", function() {
//        expect( getMaxOfArray([1,2,3]) ).toEqual(3);
//        expect( getMaxOfArray([1,2,3]) ).toBeGreaterThan(0);
//    });
//    
//    it("should return the value given if not a typeof Array", function() {
//        expect( getMaxOfArray(null) ).toBe(null);
//        expect( getMaxOfArray(0) ).toEqual(0);
//    });
//    
//    it("should return NaN If at least one of the arguments cannot be converted to a number.", function() {
//        expect( getMaxOfArray(['a','b','c']) ).toEqual(NaN);
//    });
//
//});
//
//
//describe("strUpper", function() {
//    
//    it("should take a string and return it in all uppercase", function() {
//        expect( strUpper('hello') ).toBe('HELLO');        
//    });
//    
//    it("should return the value given if not a typeof string", function() {
//        expect( strUpper(null) ).toBe(null);
//        expect( strUpper(0) ).toEqual(0);
//    });
//    
//});


describe ("getDollarAmount", function(){
    
   it("should take 10.03 and only return 10", function(){
       expect( getDollarAmount('10.03') ).toEqual('10');
   });
   it("should take 0.03 and only return 0", function(){
       expect( getDollarAmount('0.03') ).toEqual('0');
   });
   it("should take 10.03 and only return 10", function(){
       expect( getDollarAmount('1.03') ).toEqual('1');
   });
    
});

describe ("getCentAmount", function(){
    it("should take a dollar amount with cents and only return the cent amount.", function(){
        expect( getCentAmount('10.03') ).toEqual('03');
        
    });
    expect( getCentAmount('0.03') ).toEqual('03');
        expect( getCentAmount('0.3') ).toEqual('30');
        expect( getCentAmount('.3') ).toEqual('30');
        expect( getCentAmount('.03') ).toEqual('03');
        expect( getCentAmount('0.0') ).toEqual('00');
        expect( getCentAmount('0.00') ).toEqual('00');
        expect( getCentAmount('0.99') ).toEqual('99');
        expect( getCentAmount('0.001') ).toEqual('00');
        expect( getCentAmount('0.009') ).toEqual('00');
});
