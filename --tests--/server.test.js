"use strict";

// basic Requirments:
const { app } = require("../src/server");
const supertest = require("supertest");
const mockRequest = supertest(app);

//Testenig Units for SERVER-API:

describe("Testing APIT Errors", () => {
  //To Do:

  //Testing if the route is existed :404 on a bad route:
  test("Is the route is existed ", async () => {
    const respond = await mockRequest.get("/home");
    expect(respond.status).toBe(404);
  });

  //500 Testing if the query is a  name :if no name in the query string
  test("if no name in the query string", async () => {
    const respond = await mockRequest.get("/person");
    expect(respond.status).toEqual(500);
  });

  //200 Testing if the if the name is in the query string:
  test("Is the type of query string", async () => {
    const respond = await mockRequest.get("/person?name=hanin");
    expect(respond.status).toEqual(200);
  });

  //check if when given a name in the query string, the output object is correct
  test("Is the output is correct", async () => {
    const respond = await mockRequest.get("/person?name=hanin");
    console.log(respond.body,'PP');
    expect(respond.body.name).toEqual('hanin');
  });
});
