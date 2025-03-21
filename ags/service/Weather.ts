import { Variable, exec } from "astal";

const weatherCommand = [
	"curl",
	"https://api.weatherapi.com/v1/forecast.json?key=91b2ef5fcb9b4ef9b3770235252402&q=Chifeng&days=1&aqi=no&alerts=no",
];

export const weather = Variable<any | null>(null).poll(
	30_000,
	weatherCommand,
	(out, prev) => JSON.parse(out),
);
