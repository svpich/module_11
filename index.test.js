const { convertCelsiusToFahrenheit } = require("./index.js");
const { it, describe } = require("@jest/globals");

describe((""), () => {
    it("when degrees Celsius is greater than zero", () => {
        const result = convertCelsiusToFahrenheit(5);
        expect(result).toBe(41);
    });
    it("when degrees Celsius is below zero", () => {
        const result = convertCelsiusToFahrenheit(-25);
        expect(result).toBe(-13);
    });
    it("when degrees Celsius is zero", () => {
        const result = convertCelsiusToFahrenheit(0);
        expect(result).toBe(32);
    });
})
