import * as mathFunctions from "../src/mathFunctions";

test("test validateIntegerNumber function", () => {
    let testValueList = [
        1,
        2,
        3,
        4,
        
        undefined,
        null,
        "asd",
        false,
        {
        name: "ExampleObject",
        id: 0
        }
    ];
    
    expect(mathFunctions.validateIntegerNumber(testValueList[1])).toBe(true);
    
    expect(mathFunctions.validateIntegerNumber(testValueList[null])).toBe(false);
    expect(mathFunctions.validateIntegerNumber(testValueList["ExampleObject"])).toBe(false);
    expect(mathFunctions.validateIntegerNumber(testValueList[9])).toBe(false);
    
});

