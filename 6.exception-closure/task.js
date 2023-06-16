function parseCount(count) {
	if (isNaN(Number.parseFloat(count))) {
		throw new Error("Невалидное значение")
	}
	return Number.parseFloat(count)
}

function validateCount(count) {
	try {
		return parseCount(count)
	} catch (error) {
		return error
	}
}

class Triangle {
	constructor(a, b, c) {
		this.a = a
		this.b = b
		this.c = c
		if (a + b < c || a + c < b || c + b < a) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
	}
	get perimeter() {
		return this.a + this.b + this.c;
	}
	get area() {
		const p = (this.a + this.b + this.c) / 2
		return Math.round(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 1000) / 1000
	}
}

function getTriangle(aArea, bArea, cArea) {
	try {
		return new Triangle(aArea, bArea, cArea);
	} catch (e) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует"
			},
			get area() {
				return "Ошибка! Треугольник не существует"
			}
		}
	}
}