# Node.js Express MySQL Application

This project is a Node.js application that uses Express.js as the web framework and MySQL as the database, with Sequelize as the ORM.

## Description

This application demonstrates how to set up a Node.js server with Express, connect to a MySQL database using Sequelize, and define User and Transaction models. It's designed to provide a foundation for building robust web applications with user management and transaction tracking capabilities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your MySQL database and update the configuration in `config/database.js`.

4. Run the application:
   ```bash
   npm start
   ```

## Usage

After starting the server, it will attempt to connect to the database and synchronize the models. If successful, you'll see the following messages in the console:

```
database connected
Database synchronized
Server running on port <PORT>
```

## Features

- Express.js web server setup
- MySQL database connection using Sequelize
- User and Transaction model definitions
- Database synchronization on startup

## Dependencies

- Express.js
- Sequelize
- MySQL2

## Configuration

Update the `config/database.js` file with your MySQL database credentials:

```javascript
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
