const request = require("supertest")("http://localhost:8081/");
const expect = require("chai").expect;

describe("Valid return of application", function () {
  it("check if Hello is returned", async function () {
    const response = await request.get("/server.js");
    expect(response.status).to.eql(200);
    expect(response.text).to.contain("Hello");
  });
});
