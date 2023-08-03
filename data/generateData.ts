import { faker } from '@faker-js/faker';

export const personalData={
    fname: faker.person.firstName(),
    lname:faker.person.lastName(),
    phone: Math.floor(Math.random() * 9999999999) + 1000000000,
    ssn: Math.floor(Math.random()* 999999999)+ 100000000
}

export const addressInformation={
   address:faker.location.street(),
   city:faker.location.city(),
   state:faker.location.state(),
   zp:faker.location.zipCode(),
}


export const pass=()=>{
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    return password;
}



