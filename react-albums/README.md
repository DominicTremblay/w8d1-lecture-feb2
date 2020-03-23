# Unit & Intergration Testing

# Unit & Integration Testing

## Content

- Why Testing
- Test-Driven Development
- Code Coverage
- Writing Tests

## Why Testing

### Barriers to Testing

- Takes too much time

  - needs to maintain the test suite
  - Learning curve

- Cost more

  - Slow downs development in the short term
  - You have to deliver the app/feature yesterday
  - It feels like a waste of time
  - There is no budget left for testing
  - don't like testing

- Hard to apply to legacy code
- Everyone needs to do testing and maintain their tests

### Benefits of Testing

- Confidence about your code
- Reduce bugs
- Improve the overall code quality
- Make it production-ready
- Easier to refactor
- Forces you to write modular code
- Understand your code better
- Documents your code

### Types of Tests

- Static

  - Linter
  - Static Type System (PropTypes, Flow, TypeScript)

- Unit Testing

  - Test that individual units (functions usually, maybe a module) work as expected
  - Does the function given the same input gives the same output every time
  - Pure functions are easier to test

- Integration Tests

  - Test that several units are working together as expected
  - Mocking: faking API calls

- End-to-End Testing

  - Test the whole app, much like a user would use the app
  - Takes longer to test

- BDD (Behavior Driven Development)

  it ('shoud do someting)

  expect(someVar)to_be equal(3)

## Test-Driven Development

- Create the test first
- Write the code to make the test pass

1. Write a failing test
2. Write the minimum amount of code to make the test pass

- we don't care that much about writing clean code
- we just write code that makes the test pass

3. Refactor

- Refactor and improve
- All tests should still pass

## Code Coverage

- Percentage of the code that has gone through our tests

  - functions
  - if else
  - lines of code

- The goal is not necessarily to have 100% code coverage, but to decide what to test

## Writing Tests

## Demo

- We'll be writing tests with [JEST](https://jestjs.io/)

  - [JEST Matchers](https://jestjs.io/docs/en/expect)

- Decide what to test
- Isolate the tested code using mocks
- Test helpers [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro)

- To run code coverage

`npm test -- --coverage --watchAll=false`

- Function coverage Has each function (or subroutine) in the program been called?
- Statement coverage Has each statement in the program been executed?
- Branch coverage Has each branch of each control structure (such as in if and case statements) been executed? For example, given an if statement, have both the true and false branches been executed?
- Line coverage has each executable line in the source file been executed?

- [How to read Test Coverage report generated using Jest](https://medium.com/@krishankantsinghal/how-to-read-test-coverage-report-generated-using-jest-c2d1cb70da8b)

## Useful Links

- https://jestjs.io/en/
- https://jestjs.io/docs/en/mock-functions
- https://testing-library.com/docs/guide-which-query
- https://github.com/testing-library/react-testing-library
- https://github.com/testing-library/jest-dom
