# Magazine

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```bash
- Node.js (v20.11.0)
- npm (v10.2.4)
- Git (for cloning the repository)
```

### Installing

A step by step series of examples that tell you how to get a development environment running.

First, clone the repository:

```bash
git clone https://github.com/kumaraguru16/eg-frontend.git
```

#### Navigate into your project directory:

```bash
cd eg-frontend
```

#### Install dependencies:

```bash
npm install
```

#### Configure your environment:

Create a .env file in root folder.

Example for environment file.

```bash
VITE_BASE_URL=http://localhost:3000/
```

### Running the project with Vite

To start the development server, run:

```bash
npm run dev
```

This command will start the Vite development server and open the project in your default web browser. You should see your application running at `http://localhost:5173`.

### Building for production

To build the project for production, run:

```bash
npm run build
```

This command will generate a `dist` folder that contains the production-ready static files of your project.

## Authors

- **Kumaraguru** - [kumaraguru16](https://github.com/kumaraguru16)

## License

This project is licensed under the MIT License
