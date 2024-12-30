import express from "express";
import getRepos from "./controllers/getRepos.controlller.js";
import cacheMiddleware from "./middleware/cache.middleware.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/repos/:username", cacheMiddleware, getRepos);

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
