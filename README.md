# Insecure Route Parameter Handling in Express.js

This repository demonstrates a common vulnerability in Express.js applications: insecure handling of route parameters.  The provided code lacks proper validation and sanitization of the `:id` parameter in the `/users/:id` route.  This vulnerability could be exploited by a malicious actor to potentially expose unintended data or cause errors.

## Vulnerability

The `bug.js` file contains code with the vulnerability.  The route handler fetches user data based directly on the `req.params.id` value without any validation.  This allows an attacker to craft requests with unexpected input, potentially accessing data they shouldn't have access to, or triggering errors in the application.

## Solution

The `bugSolution.js` file demonstrates a secure implementation.  The code now includes input validation to ensure the `:id` parameter is a number before proceeding with the data fetch.  This mitigates the vulnerability by preventing the application from attempting to process invalid or unexpected input.

## How to reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `node bug.js` to start the vulnerable server.
5. Run `node bugSolution.js` to start the secure server.
6. Send requests to `/users/:id` using different input values, observing the difference in behavior between the vulnerable and secure servers.