## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_GUARDIAN_API_KEY`: Your guardian api key [https://open-platform.theguardian.com/access/]

`REACT_APP_NYTIMES_API_KEY`: Your nytimes api key [https://developer.nytimes.com/get-started]

`REACT_APP_NEWSAPI_API_KEY`: Your newsapi api key [https://newsapi.org/account]

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Docker

It's a simple Dockerfile for running app.

Run Docker

```bash
  sudo docker-compose up --build -d to build and run in detached mode
```

Check your created image

```bash
  sudo docker images
```

Stop Docker

```bash
  sudo docker-compose down
```
