const test = require("node:test");
const assert = require("node:assert");
const http = require("node:http");

const app = require("../app");

function makeRequest(path, method = "GET", body = null) {
  return new Promise((resolve, reject) => {
    const server = app.listen(0, () => {
      const port = server.address().port;

      const options = {
        hostname: "localhost",
        port: port,
        path: path,
        method: method,
        headers: {}
      };

      if (body) {
        options.headers["Content-Type"] =
          "application/x-www-form-urlencoded";
      }

      const req = http.request(options, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          server.close();

          resolve({
            statusCode: res.statusCode,
            body: data,
            headers: res.headers
          });
        });
      });

      req.on("error", (error) => {
        server.close();
        reject(error);
      });

      if (body) {
        req.write(body);
      }

      req.end();
    });
  });
}


// ========================================
// HOME PAGE TEST
// ========================================

test("GET / should return status 200", async () => {
  const response = await makeRequest("/");

  assert.strictEqual(response.statusCode, 200);
});


// ========================================
// MATCHER PAGE TEST
// ========================================

test("GET /matcher should return status 200", async () => {
  const response = await makeRequest("/matcher");

  assert.strictEqual(response.statusCode, 200);
});


// ========================================
// API TEST
// ========================================

test("GET /api/destinations should return JSON", async () => {
  const response = await makeRequest("/api/destinations");

  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(
    response.headers["content-type"].includes("application/json"),
    true
  );
});


// ========================================
// HEALTH CHECK TEST
// ========================================

test("GET /health should return status 200", async () => {
  const response = await makeRequest("/health");

  assert.strictEqual(response.statusCode, 200);
});


// ========================================
// MATCHING TEST
// ========================================

test("POST /match should return results page", async () => {
  const body =
    "budget=medium" +
    "&duration=5" +
    "&group=family" +
    "&type=mountains" +
    "&climate=cool" +
    "&activity=nature" +
    "&pace=relaxed";

  const response = await makeRequest(
    "/match",
    "POST",
    body
  );

  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(
    response.body.includes("Destinations Made For You"),
    true
  );
});