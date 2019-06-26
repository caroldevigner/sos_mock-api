# SOS Ambulancia - API

This an mock API sample for this project:
- [Project page](#) – Lorem ipsum

## Before using
1) Please make sure that you have `Node.js` installed (https://nodejs.org/)

2) Inside `/data` create a `users.js` file with some fake list of users to be used in the authentication:
```javascript
module.exports = [
    { id: 1, name: "John", email: "john@mail.com", password: "john123" },
    { id: 2, name: "Sarah", email: "sarah@mail.com", password: "sarah123" }
]
```

3) Add your application configuration to a `.env` file in the root of your project. **Make sure the `.env` file is added to your `.gitignore` so it is not checked-in the code**
```shell
PORT=3333
API_KEY=your_api_key_here
```

4) Run the following command from the root of your project:
```bash
npm start
```

## Usage
Run the following command to startup the project:

```bash
npm start
```

- It will run by default the server at port 3333.

## Plugins

Here is a list of plugins available for installation via NPM.

- [Some Plugin](#) – Lorem ipsum

## References
- [JSON Server - Documentation](https://github.com/typicode/json-server)
- [API para Autenticar usuários com JWT e Passport](https://tableless.com.br/autenticar-usuarios-com-jwt-e-passport/)
- [Creating a Secure REST API in Node.js](https://www.toptal.com/nodejs/secure-rest-api-in-nodejs)
- [Node.js Everywhere with Environment Variables!](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786)