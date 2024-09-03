# Express.js MVC Template

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
  - [API Endpoints](#api-endpoints)
- [License](#license)

## Project Overview

This project is a boilerplate for building an Express.js application with MVC architecture. It provides a starting point for Node.js backend applications with essential features like environment configuration, testing, and common middleware.

## Features

- `Express.js`: Minimal and flexible Node.js web application framework.
- `Environment Configuration`: Using dotenv to manage environment variables.
- `CORS`: Cross-Origin Resource Sharing enabled via the cors package.
- `Request Logging`: HTTP request logger using morgan.
- `Testing`: Integrated with Jest and Supertest for testing routes and functionality.
- `Linting` - ESLint configured for code quality and consistency.

## Usage

### Getting Started

Before you begin, ensure you have Node.js installed on your local machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/marventures/expressjs-mvc-template.git
   cd expressjs-mvc-template
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create an Environment File:

   ```bash
   cp .env.example .env
   ```

4. Start the Development Server:

   ```bash
   npm start
   ```

NOTE: The server will start at http://localhost:{PORT}.

### Available Scripts

- `npm start` - Starts the server with Node.js and watches for file changes.
- `npm test` - Runs the Jest test suite.
- `npm run lint` - Lints the codebase using ESLint.
- `npm run lint:fix` - Automatically fixes linting issues

### API Endpoints

#### Test

- GET `/api/test`: Test default endpoint available in the template.

## License

- This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
