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

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    };
    return newCompany
};



const newFakeCompany = createCompany();
const newFakeUser = createUser();
const newFakeProduct = createProduct();
console.log(newFakeProduct);
console.log(newFakeUser);
console.log(newFakeCompany);
/*console.log(userAndCompany)*/

app.get("/api", (req, res) => {
    res.json({ message: "Hello World...." });
});

app.get("/api/user/new", (req, res) => {
    res.json({newFakeUser});
});

app.get("/api/companies/new", (req, res) => {
    res.json({newFakeCompany});
});

app.get("/api/user/company", (req,res) => {
    const both = {
        User: newFakeUser,
        Company: newFakeCompany,
    }
    res.json({both})
});



app.listen( port, () => console.log(`Listening on port: ${port}`) );



