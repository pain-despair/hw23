class SuperMath {
    constructor() {
        this.operations = {
            '+': (x, y) => x + y,
            '-': (x, y) => x - y,
            '*': (x, y) => x * y,
            '/': (x, y) => x / y,
            '%': (x, y) => x % y
        };
    }
    input(promptText) {
        return prompt(promptText);
    }

    performOperation(obj) {
        const { X, Y, znak } = obj;
        if (this.operations.hasOwnProperty(znak)) {
            return this.operations[znak](X, Y);
        } else {
            console.log("Некоректний оператор. Введіть +, -, *, / або %.");
            return null;
        }
    }

    check(obj) {
        const userDecision = confirm(`Бажаєте зробити операцію ${obj.znak} з числами ${obj.X} та ${obj.Y}?`);
        if (userDecision) {
            const result = this.performOperation(obj);
            if (result !== null) {
                console.log(`Результат: ${result}`);
            }
        } else {
            obj.X = parseFloat(this.input("Введіть нове значення для X:"));
            obj.Y = parseFloat(this.input("Введіть нове значення для Y:"));
            obj.znak = this.input("Введіть новий оператор (+, -, *, / або %):");
            this.check(obj);
        }
    }
}

const obj = { X: 12, Y: 3, znak: "/" };
const math = new SuperMath();
math.check(obj);