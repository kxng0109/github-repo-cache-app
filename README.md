# GitHub Repos Cache App
This simple app allows users to fetch the number of public repositories from a GitHub username, and stores the result in a Redis cache for faster subsequent requests.

## Prerequisites
Before running the app, make sure you have the following installed:
- Node.js (v14 or higher)
- Redis: Redis should be installed and running on the default port (6379) on your local machine. You can install Redis using the method of your choice (e.g., Homebrew on macOS, apt on Ubuntu, or Redis downloads for Windows).

## Installation
### Clone the repository:
```bash
git clone https://github.com/kxng0109/github-repo-cache-app.git
cd github-repo-cache-app
```

### Install the dependencies:
``` bash
npm install
```

### Install Redis (if not already installed):
Check the <a href="https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/" target="_blank">official docs here</a>.

### Start Redis server:
Make sure Redis is running on the default port (`6379`) or you can modify change te value using the `.env` file, check the next step below.
```bash
redis-server
```

### Set up the .env file:
Create a .env file in the root of your project and configure the following environment variables:

```plaintext
PORT=<port_express_app_will_run_on>
REDIS_PORT=<port_your_redis_server_is_running_on>
```
PORT: The port where the Express app will run (default is 3000).
REDIS_PORT: The port where Redis is running (default is 6379).

### Start the app server:
After Redis is running, you can start the Node.js server:
```bash
npm run dev
```
This will start the server using Nodemon on `localhost:3000`.

## Usage
Once the server is running, you can make a request to fetch the number of public repositories for any GitHub user.
- Open your browser or use a tool like Postman to visit:
```bash
http://localhost:3000/repos/username
```
Replace `username` with the desired GitHub username.
Example:
```bash
http://localhost:3000/repos/kxng0109
```

The app will:
1. Check Redis for the cached data.
2. If the data exists in Redis, it will return the cached result.
3. If the data does not exist, it will make a request to the GitHub API to fetch the number of public repositories, store it in Redis, and then return the result.
Note: The data is set to expire in `3600` seconds (1 hour).

## Tech Stack
- Node.js: JavaScript runtime used for server-side code.
- Express: Web framework to build the API.
- Axios: Promise-based HTTP client to fetch data from the GitHub API.
- Redis: In-memory data store for caching API responses.

## Additional Notes
- The Redis cache is used to store the number of repositories for each GitHub user, so repeated requests for the same user will be faster.
- Redis data will expire after 1 hour by default. You can modify the expiration time in the Redis logic if you need a different duration.

## License
This project is open-source and available under the <a href="/LICENSE">MIT License.</a>
