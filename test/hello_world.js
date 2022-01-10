const hello_world = artifacts.require("hello_world");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("hello_world", function (/* accounts */) {
  it("should assert true", async function () {
    await hello_world.deployed();
    return assert.isTrue(true);
  });
});
