import {
    capitalize,
    reverseString,
    Calculator,
    caesarCipher,
    analyzeArray,
} from "./index.js";

test("capitalize", () => {
    expect(capitalize("test")).toBe("Test");
});

test("reverse string", () => {
    expect(reverseString("test")).toBe("tset");
});

test("calculator add", () => {
    expect(Calculator.add(2, 2)).toBe(4);
});

test("calculator subtract", () => {
    expect(Calculator.subtract(2, 2)).toBe(0);
});

test("calculator divide", () => {
    expect(Calculator.divide(2, 2)).toBe(1);
});

test("calculator multiply", () => {
    expect(Calculator.multiply(2, 2)).toBe(4);
});

test("caesar cipher", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesar cipher", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesar cipher", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analize array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
