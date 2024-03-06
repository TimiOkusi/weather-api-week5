"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLondonWeatherDailyData = exports.generateFranceWeatherData = exports.generateNigeriaWeatherData = exports.generateDublinWeatherData = exports.generateLondonWeatherData = void 0;
const faker_1 = require("@faker-js/faker");
const generateLondonWeatherData = () => {
    // Generate random weather data
    const generatedWeatherData = {
        temperature: faker_1.faker.number.int({ min: -15, max: 30 }),
        humidity: faker_1.faker.number.int({ min: 79, max: 86 }),
        wind: faker_1.faker.number.int({ min: 2, max: 78 }),
        rain: faker_1.faker.number.int({ min: 65, max: 75 }),
    };
    // Return weather data
    return generatedWeatherData;
};
exports.generateLondonWeatherData = generateLondonWeatherData;
const generateDublinWeatherData = () => {
    // Generate random weather data
    const generatedWeatherData = {
        temperature: faker_1.faker.number.int({ min: -15, max: 30 }),
        humidity: faker_1.faker.number.int({ min: 79, max: 86 }),
        wind: faker_1.faker.number.int({ min: 2, max: 78 }),
        rain: faker_1.faker.number.int({ min: 65, max: 75 }),
    };
    // Return weather data
    return generatedWeatherData;
};
exports.generateDublinWeatherData = generateDublinWeatherData;
const generateNigeriaWeatherData = () => {
    //Generate random weather data
    const generatedWeatherData = {
        temperature: faker_1.faker.number.int({ min: -0, max: 40 }),
        humidity: faker_1.faker.number.int({ min: 65, max: 90 }),
        wind: faker_1.faker.number.int({ min: 10, max: 78 }),
        rain: faker_1.faker.number.int({ min: 65, max: 75 }),
    };
    //Return weather data
    return generatedWeatherData;
};
exports.generateNigeriaWeatherData = generateNigeriaWeatherData;
const generateFranceWeatherData = () => {
    //Generate random weather data
    const generatedWeatherData = {
        temperature: faker_1.faker.number.int({ min: -12, max: 32 }),
        humidity: faker_1.faker.number.int({ min: 65, max: 80 }),
        wind: faker_1.faker.number.int({ min: 10, max: 78 }),
        rain: faker_1.faker.number.int({ min: 65, max: 75 }),
    };
    //Return weather data
    return generatedWeatherData;
};
exports.generateFranceWeatherData = generateFranceWeatherData;
const generateLondonWeatherDailyData = () => {
    // Generate random weather data
    const generatedWeatherDailyData = {
        dayOne: 14,
        dayTwo: 23,
        dayThree: 17,
    };
    // Return weather data
    return generatedWeatherDailyData;
};
exports.generateLondonWeatherDailyData = generateLondonWeatherDailyData;
