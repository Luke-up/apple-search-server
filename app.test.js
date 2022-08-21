//Supertest is used to create CRUD operations
const request = require("supertest");
const app = require("./app");

//test checks if response is recieved from server
describe("Unit test", () => {
  test("server should return response", (done) => {
    request(app)
      .get("/okay")
      .expect(200)
      .expect((res) => {
        res.body = "okay";
      })
      .end((err, res) => {
        if (err) return document(err);
        return done();
      });
  });
});

//test checks if the itunes API is functioning
describe("Snapshot test", () => {
  test("should carry out get request", async () => {
    const response = await request(app).get(
      "/media?term=Lucy&&media=movie&&attribute=movieTerm&&limit=1"
    );
    expect(response.body).toMatchSnapshot(this);
  });
});
