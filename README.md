## Envirenment Variables

For using news fetch apis you need to add this envirenment variable with your own api keys

REACT_APP_GUARDIAN_API_KEY = `<your guardian api-key>` [https://open-platform.theguardian.com/access/]
REACT_APP_NYTIMES_API_KEY = `<your nytimes api-key>` [https://developer.nytimes.com/get-started]
REACT_APP_NEWSAPI_API_KEY = `<your newsapi api-key>` [https://newsapi.org/account]

!!! Make sure that you re-run the application if the envirenment variables don't work !!!

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### Docker

It's a simple Dockerfile for running app.

1. `sudo docker build . -t <YOUR_IMAGE_NAME>`
2. Check your created image `sudo docker images`
3. run docker image `sudo docker run -d -p <ports 3000:3000> <YOUR_IMAGE_NAME>`
4. stop docker image `sudo docker stop <RUNNING_CONTAINER_ID>`
