// This test will load any amount of clinics for an org
// export {};
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const datadriven = require("data-driven");
const debugHttp  = require("debug-http");
const faker = require("faker");
// sets locale to de
faker.locale = "en_US";
const debug = false;
const numberofusers = 100;

debugHttp();
chai.use(chaiHttp);

describe("Add Users to DB", () => {
    it("Create 100 Users", async () => {
        let i = 0;
        while (i < numberofusers){
            let genders = [ 'Female' , 'Male' ];
            let heard = ['Facebook', 'Website', 'Instagram', 'Word of Mouth'];
            let device = ['Android', 'iOS'];
            let browser = [ 'Chrome', 'Firefox', 'IE', 'Opera', 'Safari'];
            const body = {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                phone: faker.phone.phoneNumber('##########'),
                gender: faker.random.arrayElement(genders),
                birthday: faker.date.between('1920-01-01', '2000-01-01'),
                city: faker.address.city(),
                state: faker.address.stateAbbr(),
                zip_code: faker.address.zipCode("#####"),
                heard: faker.random.arrayElement(heard),
                //latitude: faker.address.latitude(),
                //longitude: faker.address.longitude(),
                location: {
                    lat: faker.address.latitude(),
                    lng: faker.address.latitude()
                },
                device: faker.random.arrayElement(device),
                browser: faker.random.arrayElement(browser),
                picture: faker.image.people(),
                bio: faker.random.words(),
                nickname: faker.internet.userName(),
                favorite_team: faker.company.companyName()
            };
            if (debug === true){
                console.log(body.first_name);
                console.log(body.last_name);
                console.log(body.email);
                console.log(body.password);
                console.log(body.phone);
                console.log(body.gender);
                console.log(body.birthday);
                console.log(body.city);
                console.log(body.state);
                console.log(body.zip_code);
                console.log(body.heard);
                console.log(body.latitude);
                console.log(body.longitude);
                console.log(body.device);
                console.log(body.browser);
                console.log(body.picture);
                console.log(body.bio);
                console.log(body.nickname);
                console.log(body.favorite_team);
            }
            const res = await chai.request('http://localhost:3000/api')
            .post('/fausers')
            .send(body);
            
            if (debug === true){
                console.log(res);
            }
            expect(res).to.have.status(200);
            i++;
        }
    });
});