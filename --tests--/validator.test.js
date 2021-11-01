"use strict";

// basic Requirments:
const { app } = require("../src/server");
const supertest = require("supertest");
const mockRequest = supertest(app);

//200 Testing if the if the name is in the query string:
test("Is the type of query string", async () => {
  const respond = await mockRequest.get("/person?name=hanin");
  expect(respond.status).toEqual(200);
});

//500 Testing if the query is a  name :if no name in the query string
test("if no name in the query string", async () => {
  const respond = await mockRequest.get("/person?name=");
  expect(respond.status).toEqual(500);


});
