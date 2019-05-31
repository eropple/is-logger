# `@eropple/is-logger` #
I like using Bunyan as a logger. But I also like making my tools available to
people who don't. (Even though they should be using Bunyan. Y'all, just use
Bunyan!)

To that end, I needed a utility library that does two things:

- `isLogger(obj)`: is this a logger? Defined loosely as "does it have the same
  output methods as `console` has?".
- `isBunyan(obj)`: is this a Bunyan logger? Defined similarly loosely as "does
  it pass `isLogger(obj)` and also have `child`, `fatal`, and `streams` (some
  of the most important methods on a Bunyan logger).
