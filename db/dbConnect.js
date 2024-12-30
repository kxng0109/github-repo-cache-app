import { createClient } from "redis";

const REDIS_PORT = process.env.REDIS_PORT || 6379;

const redisClient = await createClient(REDIS_PORT)
	.on("error", (err) => console.error("Redis CLient Error", err))
	.connect();

export default redisClient;