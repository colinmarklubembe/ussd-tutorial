# USSD Tutorial

Welcome to the **USSD Tutorial** project! This repository provides a step-by-step guide to building and integrating USSD (Unstructured Supplementary Service Data) applications. It is designed to help developers understand the basics of USSD and implement solutions effectively.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

USSD is a communication protocol used by GSM cellular telephones to communicate with the service provider's computers. This tutorial demonstrates how to create a USSD application and integrate it with backend services.

## Features

- Step-by-step USSD application development.
- Integration with backend APIs.
- Example use cases for real-world applications.
- Easy-to-follow code samples.

## Prerequisites

Before starting, ensure you have the following:

- Basic knowledge of programming.
- A development environment (e.g., Node.js).
- Access to a USSD gateway or simulator (e.g., Africa's Talking).
- MongoDB installed and running locally or on a cloud service.
- Mongoose library for MongoDB integration.
- Access to a USSD gateway or simulator (e.g. Africa's Talking).

## Setup and Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/colinmarklubembe/ussd-tutorial.git
   cd ussd-tutorial
   ```

2. Install dependencies using Bun:

   ```bash
   bun install
   ```

3. Configure your USSD gateway settings in the `.env` file if any.

4. Start the development server:

   ```bash
   bun run start
   ```

## Usage

- Test your USSD application using a simulator or a real USSD gateway.
- Customize the code to fit your specific use case.

## Folder Structure

```plaintext
/ussd tutorial
    README.md
    index.ts
    models/
```

- `README.md`: Documentation for the tutorial.
- `index.ts`: Contains the main application logic for handling USSD requests and responses.
- `models/`: Directory for defining MongoDB schemas and models used in the application.

## Testing with Ngrok

To test your USSD application locally, you can use [Ngrok](https://ngrok.com/) to expose your local server to the internet. Follow these steps to set up a temporary callback URL:

1. Install Ngrok if you haven't already. You can download it from [Ngrok's official website](https://ngrok.com/download).

2. Start your local development server on port `8000`:

   ```bash
   bun run start
   ```

3. In a new terminal, run the following Ngrok command to expose your local server:

   ```bash
   ngrok http 8000
   ```

4. Ngrok will generate a public URL that tunnels to your local server. It will look something like this:

   ```plaintext
   https://<random-subdomain>.ngrok.io
   ```

5. Use this public URL as the callback URL in your USSD gateway configuration for testing.

This allows you to test your USSD application with real-world requests while running it locally.

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

Happy coding!
