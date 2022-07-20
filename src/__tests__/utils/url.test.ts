import { urls } from "../../utils/url";

describe("Testing constructURL function", () => {
  it("should return the a url with only a key value", () => {
    const url = urls("http://testingurls.com", {
      "key=value": true
    });

    expect(url).toBe("http://testingurls.com?key=value");
  });

  it("should not return a url with only key value", () => {
    const url = urls("http://testingurls.com", {
      "key=value": false
    });

    expect(url).toBe("http://testingurls.com");
  });

  it("should return the a url with two a key values", () => {
    const url = urls("http://testingurls.com", {
      "key=value": true,
      "foo=bar": true
    });

    expect(url).toBe("http://testingurls.com?key=value&foo=bar");
  });
});
