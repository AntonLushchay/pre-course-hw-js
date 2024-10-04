let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let newPassportMarried = JSON.parse(JSON.stringify(passportMarried));


passportMarried.married = false;
newPassportMarried.married = true;

console.log(passportMarried);
console.log(newPassportMarried);