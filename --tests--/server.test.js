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

  // Testing 404 on a bad method
  test("Is the route is existed ", async () => {
    const respond = await mockRequest.post("/person");
    expect(respond.status).toBe(404);
  });

  
   //check if when given a name in the query string, the output object is correct
   test("Is the output is correct", async () => {
    const respond = await mockRequest.get("/person?name=hanin");
    expect(respond.body.name).toEqual("hanin");
  });
 
});
