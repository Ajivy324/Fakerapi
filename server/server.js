const express = require('express');
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const {faker} = require('@faker-js/faker');
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number('901-###-####'),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    };
    return newUser
};

const newFakeUser = createUser();
const newFakeProduct = createProduct();
console.log(newFakeProduct);
console.log(newFakeUser)

app.get("/api", (req, res) => {
    res.json({ message: "Hello World...." });
});

app.get("/api/user/new", (req, res) => {
    res.json({newFakeUser});
});



app.listen( port, () => console.log(`Listening on port: ${port}`) );



