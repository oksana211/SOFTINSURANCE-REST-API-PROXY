const path = require("path");
const jestOpenAPI = require('jest-openapi');
const axios = require("axios");

const openApiFilePath = path.normalize(path.join(__dirname, "./specs/softinsurance.yml"));

jestOpenAPI(openApiFilePath);

const apikey = "kKIMPTH2cCYOGd9PXNa146HNkQOFJAPb";
const authorization = "Bearer Az7QMAZDYXYowTyU8JWAzTBip2B7";
const basePath = "https://oksanaveretina222-eval-test.apigee.net/softinsurance-rest-api-proxy";

const packageBody = { name: "string",
                        description: "string",
                        price: 11750,
                        productIds: [
                            "d6f2bc4d-951f-4cdd-8ea0-86544a982cf8",
                            "fe2aba49-45cd-4096-8150-094dfbd38258",
                            "ff7b4c70-03e1-4c9d-949f-090e51d83028"
                        ]};

describe("Catalog", () => {
    const options = {
        headers: { authorization, apikey }
    };

    describe("GET requests", () => {
        describe("Packages: valid response", () => {
            let response = null;
            const requestUrl = basePath + "/catalog/packages";

            beforeAll(async() => {
                response = await axios.get(requestUrl, options);
            });

            it("should return a 200 response", () => {
                expect(response.status).toEqual(200);
            });

            it("should satisfy the OpenAPI spec", () => {
                expect(response).toSatisfyApiSpec();
            });
        });

        describe("Base packages: valid response", () => {
            let response = null;
            const requestUrl = basePath + "/catalog/packages/base";

            beforeAll(async() => {
                response = await axios.get(requestUrl, options);
            });

            it("should return a 200 response", () => {
                expect(response.status).toEqual(200);
            });

            it("should satisfy the OpenAPI spec", () => {
                expect(response).toSatisfyApiSpec();
            });
        });

        describe("Products list", () => {
            let response = null;
            const requestUrl = basePath + "/catalog/products";

            beforeAll(async() => {
                response = await axios.get(requestUrl, options);
            });

            it("should return a 200 response", () => {
                expect(response.status).toEqual(200);
            });

            it("should satisfy the OpenAPI spec", () => {
                expect(response).toSatisfyApiSpec();
            });
        });

        describe("Product", () => {
            let response = null;
            const requestUrl = basePath + "/catalog/products/fe2aba49-45cd-4096-8150-094dfbd38258";

            beforeAll(async() => {
                response = await axios.get(requestUrl, options);
            });

            it("should return a 200 response", () => {
                expect(response.status).toEqual(200);
            });

            it("should satisfy the OpenAPI spec", () => {
                expect(response).toSatisfyApiSpec();
            });
        });
    });

    describe("POST requests", () => {
        describe("Add package", () => {
            let response = null;
            const requestUrl = basePath + "/catalog/packages";

            beforeAll(async() => {
                response = await axios.post(requestUrl, packageBody, options);
            });

            it("should return a 201 response", () => {
                expect(response.status).toEqual(201);
            });

            it("should satisfy the OpenAPI spec", () => {
                expect(response).toSatisfyApiSpec();
            });
        });

        describe("Add Base package", () => {
            let response = null;
            const requestUrl = basePath + "/catalog/packages/base";

            beforeAll(async() => {
                response = await axios.post(requestUrl, packageBody, options);
            });

            it("should return a 201 response", () => {
                expect(response.status).toEqual(201);
            });

            it("should satisfy the OpenAPI spec", () => {
                expect(response).toSatisfyApiSpec();
            });
        });

        describe("Add product", () => {
            let response = null;
            const requestUrl = basePath + "/catalog/products";
            const body = {  name: "nhtbgvf",
                            description: "tgrfe",
                            price: 433};

            beforeAll(async() => {
                response = await axios.post(requestUrl, body, options);
            });

            it("should return a 201 response", () => {
                expect(response.status).toEqual(201);
            });

            it("should satisfy the OpenAPI spec", () => {
                expect(response).toSatisfyApiSpec();
            });
        });
    });

    describe("PUT requests", () => {
        describe("Update product", () => {
            let response = null;
            const requestUrl = basePath + "/catalog/products/fe2aba49-45cd-4096-8150-094dfbd38258";
            const body = {  name: "oiuyjthyr",
                            description: "tgrazsadfe",
                            price: 43};

            beforeAll(async() => {
                response = await axios.put(requestUrl, body, options);
            });

            it("should return a 200 response", () => {
                expect(response.status).toEqual(200);
            });

            it("should satisfy the OpenAPI spec", () => {
                expect(response).toSatisfyApiSpec();
            });
        });
    });

    describe("PATCH requests", () => {
        describe("Update partially product", () => {
            let response = null;
            const requestUrl = basePath + "/catalog/products/fe2aba49-45cd-4096-8150-094dfbd38258";
            const body = {  name: "oiuyjthyr",
                            price: 42};

            beforeAll(async() => {
                response = await axios.patch(requestUrl, body, options);
            });

            it("should return a 200 response", () => {
                expect(response.status).toEqual(200);
            });

            it("should satisfy the OpenAPI spec", () => {
                expect(response).toSatisfyApiSpec();
            });
        });
    });

    // describe("DELETE requests", () => {
    //     describe("delete product", () => {
    //         let response = null;
    //         const requestUrl = basePath + "/catalog/products/e4194a13-e146-465d-8d00-4c1f6f9a370f";
    //
    //         beforeAll(async() => {
    //             response = await axios.delete(requestUrl, options);
    //         });
    //
    //         it("should return a 200 response", () => {
    //             expect(response.status).toEqual(200);
    //         });
    //
    //         it("should satisfy the OpenAPI spec", () => {
    //             expect(response).toSatisfyApiSpec();
    //         });
    //     });
    // });


});
