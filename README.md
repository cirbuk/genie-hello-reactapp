## Genie Hello World App

This App makes uses of this [Genie Hello API](https://docs.kubric.io/docs/say-hello-world) to generate your own welcome poster in a simple-to-use react app.

Check out the app hosted <mark>here</mark> or Tickle the with the code in your local machine using the setup below.

## Setting up this project locally

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. Clone The repo

```
git clone https://github.com/cirbuk/genie-hello-reactapp.git
```

2. Install required dependencies, set the nvm to 10.16. [Guide to install nvm](https://github.com/nvm-sh/nvm#install-script)

```
cd genie-hello-reactapp
nvm use 10.16
npm install
```

3. Start the webpack server

```
npm run build-development
```

4. Start the express server in another terminal

```
npm start
```

5. Get the app running on your browser

> [http://localhost:4000](http://localhost:4000/)

## Trying out the app
Simply type out your **human name, a text, background color** in the given input boxes and hit generate. You'll see a personalised poster just for you that looks something like this!


![hellohuman.png](https://lh3.googleusercontent.com/2fPVVFkdOzc-PAImyCMB_MQuGhfPaitMQbIi8oE7xUlzZxM4bp3jOjrf8qlrlPWCYC5PdYrt7F7zBqb10PGjFHYl)

