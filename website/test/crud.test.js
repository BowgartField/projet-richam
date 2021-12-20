const nock = require('nock');
const mocks = require('node-mocks-http');
const create = require("../pages/api/user/create");

let userCreatedId;

describe('/api/user/create', () => {

    test('Should create a user and return it', async () => {

        const {req, res } = mocks.createMocks({
            method: 'POST',
            query: {
                "firstname": "Test",
                "lastname": "Test1",
                "age": 12
            }
        });

        await create.CreateUser(req,res);

        expect(res._getStatusCode()).toBe(200);

        userCreatedId = JSON.parse(res._getData())._id;

    })

});

describe('Test CRUD api for users', () => {

    let lastUserId;

    it("/api/create", () => {

        nock('http://localhost:3000/api')
            .post("/user/create", {
                
            })
            .reply(201,(uri, requestBody, cb) => {
                console.log(requestBody)    
            })

    });

    it("Read", () => {

        nock('http://localhost:3000/api/')
            .post("user/read", {"id": lastUserId})
            .reply(200, {})

    });

    it("Update", () => {

        nock("http://localhost:3000/api/")
            .post("user/update", {})
            .reply(200, {})

    });

    it("Delete", () => {

        nock('http://localhost:3000/api/')
            .post("user/delete", {"id" : ""})
            .reply(200,{message: "user deleted with sucess"})

    });

});