import * as Bunyan from "bunyan";
import BunyanBlackhole from "bunyan-blackhole";

import {
  isBunyan,
  isLogger
} from "./index";

describe('isLogger', () => {
  it('should validate the console', () => {
    expect(isLogger(console)).toBe(true);
  });

  it('should validate Bunyan loggers', () => {
    expect(isLogger(Bunyan.createLogger({ name: "foo" }))).toBe(true);
  });

  it('should validate bunyan-blackhole', () => {
    expect(isLogger(BunyanBlackhole("test"))).toBe(true);
  });

  it("shouldn't validate an empty object", () => {
    expect(isLogger({})).toBe(false);
  });
});

describe('isBunyan', () => {
  it('should not validate the console', () => {
    expect(isBunyan(console)).toBe(false);
  });

  it('should validate Bunyan loggers', () => {
    expect(isBunyan(Bunyan.createLogger({ name: "foo" }))).toBe(true);
  });

  it('should validate bunyan-blackhole', () => {
    expect(isBunyan(BunyanBlackhole("test"))).toBe(true);
  });

  it("shouldn't validate an empty object", () => {
    expect(isBunyan({})).toBe(false);
  });
});
