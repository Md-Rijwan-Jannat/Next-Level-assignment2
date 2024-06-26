# Apollo Level 2 Assignment 2 ( E-Commerce API ) -

This is a Node.js application built with Express.js, MongoDB (using Mongoose), and TypeScript.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Md-Rijwan-Jannat/Next-Level-assignment2.git
   ```

2. Navigate into the project directory:

   ```bash
   cd Next-Level-assignment2
   ```

3. Install dependencies:
   ```bash
   yarn install
   ```

## Usage

### Development Mode

To run the application in development mode:

```bash
yarn start:dev
```

This will start the server using `ts-node-dev`, which enables live reloading on code changes.

### Production Mode

To build and run the application in production mode:

1. Build the TypeScript files:

   ```bash
   yarn build
   ```

2. Start the server:
   ```bash
   yarn start:prod
   ```

### Linting and Formatting

To lint the TypeScript files:

```bash
yarn lint
```

To automatically fix linting issues:

```bash
yarn lint:fix
```

To format the TypeScript files using Prettier:

```bash
yarn prettier
```

### Testing

This project doesn't have tests set up yet. You can add your own testing framework and write tests accordingly.

### Configuration

This project uses dotenv for environment variable configuration. Create a `.env` file in the root directory and add your environment variables there.

Example `.env` file:

```plaintext
PORT=3000
MONGODB_URI=mongodb+srv://Apollo-Level2-Assignment-2:oX1n0FV2fQ5jwKB6@cluster0.gejjs5n.mongodb.net/E-commerce?retryWrites=true&w=majority&appName=Cluster0
```

## Dependencies

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS) with various options.
- **Dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **Zod**: TypeScript-first schema declaration and validation library.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Eslint**: Pluggable JavaScript linter.
- **Prettier**: Opinionated code formatter.

### Good Luck!
