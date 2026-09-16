# Changelog

## [1.1.0] - 2026-09-16

### Added

- Support for SQS FIFO queue names ending in the lowercase `.fifo` suffix. The suffix counts toward the 80-character limit.
- Regression coverage for FIFO name boundaries, malformed suffixes, and non-string inputs.

### Changed

- Return `false` for non-string inputs, including numbers, arrays, objects, and boxed strings, instead of implicitly converting them to strings. Custom conversion hooks are no longer invoked.
- Replace AVA, XO, and Prettier with Node's built-in test runner, removing all development dependencies.
- Replace Travis CI with GitHub Actions checks on Node.js 22, 24, and 26, plus a separate Node.js 8 runtime check.
- Refresh package metadata and the lockfile, and run tests before manual npm publication.

### Fixed

- Correct the function name in the README examples and update the CI badge.

### Compatibility

- The CommonJS export, synchronous boolean API, standard queue-name rules, and Node.js `>=8` runtime support remain unchanged.
- The documented input type remains a primitive string. Callers relying on implicit conversion must pass a string explicitly.

[1.1.0]: https://github.com/SimonJang/is-aws-queue/compare/v1.0.1...v1.1.0
