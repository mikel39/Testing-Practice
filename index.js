const capitalize = (string) => {
    const firstChar = string[0];
    const rest = string.slice(1);

    return firstChar.toUpperCase() + rest;
};

const reverseString = (string) => {
    const arr = string.split("");

    const result = [];

    arr.forEach((char) => {
        result.unshift(char);
    });

    return result.join("");
};

class Calculator {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static divide(a, b) {
        return a / b;
    }
    static multiply(a, b) {
        return a * b;
    }
}

const caesarCipher = (string, key) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const arr = string.split("");
    const result = [];

    arr.forEach((char) => {
        let index = key;

        if (alphabet.includes(char.toLowerCase())) {
            index += alphabet.indexOf(char.toLowerCase());
        }

        if (index > alphabet.length - 1) {
            index = Math.abs(alphabet.length - index);
        }

        //uppercase cheking
        if (
            char.toUpperCase() === char &&
            alphabet.includes(char.toLowerCase())
        ) {
            result.push(alphabet[index].toUpperCase());
            // non alphabet
        } else if (index === key) {
            result.push(char);
        } else {
            result.push(alphabet[index]);
        }
    });

    return result.join("");
};

const analyzeArray = (arr) => {
    const object = {};

    object.average = arr.reduce((prev, cur) => prev + cur) / arr.length;
    object.min = Math.min(...arr);
    object.max = Math.max(...arr);
    object.length = arr.length;

    console.log(object);
    return object;
};

export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };
