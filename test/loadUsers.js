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
const numberofsponsors = 100;
const numberofevents = 100;

debugHttp();
chai.use(chaiHttp);

describe("Add Users to DB", () => {
    it("Create Users", async () => {
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
                console.log(body.location);
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
    it("Create Sponsors", async () => {
        let i = 0;
        while (i < numberofsponsors){
            const body = {
                name: faker.company.companyName(),
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber('##########'),
                website: faker.internet.domainName(),
                address1: faker.address.streetAddress(),
                address2: faker.address.secondaryAddress(),
                city: faker.address.city(),
                state: faker.address.stateAbbr(),
                zip_code: faker.address.zipCode("#####"),
                location: {
                    lat: faker.address.latitude(),
                    lng: faker.address.latitude()
                },
                logo: faker.image.business(),
                facebook: faker.internet.domainName(),
                instagram: faker.internet.domainName(),
                twitter: faker.internet.domainName()
            };
            if (debug === true){
                console.log(body.name);
                console.log(body.first_name);
                console.log(body.last_name);
                console.log(body.email);
                console.log(body.phone);
                console.log(body.website);
                console.log(body.address1);
                console.log(body.address2);
                console.log(body.city);
                console.log(body.state);
                console.log(body.zip_code);
                console.log(body.location);
                console.log(body.logo);
                console.log(body.facebook);
                console.log(body.instagram);
                console.log(body.twitter);
            }
            const res = await chai.request('http://localhost:3000/api')
            .post('/sponsors')
            .send(body);
            
            if (debug === true){
                console.log(res);
            }
            expect(res).to.have.status(200);
            i++;
        }
    });
    it("Create Events", async () => {
        let i = 0;
        while (i < numberofevents){
            let creators = [1,2,3,4,5];
            let sports = [1,2,3,4,5];
            let positions = [1,2,3,4,5];
            let players = [1,2,3,4,5,6,7,8,9,10];
            const body = {
                creator: faker.random.arrayElement(creators),
                sport_id: faker.random.arrayElement(sports),
                position_id: faker.random.arrayElement(positions),
                description: faker.random.words(20),
                date: faker.date.between("2018-01-01", "2018-12-31"),
                address: faker.address.streetAddress(),
                address2: faker.address.secondaryAddress(),
                city: faker.address.city(),
                state: faker.address.stateAbbr(),
                zip: faker.address.zipCode("#####"),
                location: {
                    lat: faker.address.latitude(),
                    lng: faker.address.latitude()
                },
                players: faker.random.arrayElement(players)
            };
            if (debug === true){
                console.log(body.creator);
                console.log(body.sport_id);
                console.log(body.position_id);
                console.log(body.description);
                console.log(body.date);
                console.log(body.address1);
                console.log(body.address2);
                console.log(body.city);
                console.log(body.state);
                console.log(body.zip_code);
                console.log(body.location);
                console.log(body.players);
            }
            const res = await chai.request('http://localhost:3000/api')
            .post('/events')
            .send(body);
            
            if (debug === true){
                console.log(res);
            }
            expect(res).to.have.status(200);
            i++;
        }
    });
});