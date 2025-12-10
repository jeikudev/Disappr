import { redis } from "@/lib/redis";
import Elysia from "elysia";
import { nanoid } from "nanoid";

const ROOM_TTL = 60 * 10; // 10 minutes

export const postRoom = new Elysia({ prefix: "/room" }).post(
  "/create",
  async () => {
    const roomId = nanoid();

    await redis.hset(`meta:${roomId}`, {
      connected: [],
      createdAt: Date.now(),
    });

    await redis.expire(`meta:${roomId}`, ROOM_TTL);

    return { roomId };
  }
);

export const getRoom = new Elysia({ prefix: "/room" }).get("/info", () => {
  return { message: "Room info" };
});

export const getRoomById = new Elysia({ prefix: "/room" }).get("/:id", () => {
  return { message: "Room by ID" };
});

export const deleteRoom = new Elysia({ prefix: "/room" }).delete(
  "/delete",
  () => {
    return { message: "Room deleted" };
  }
);

export const patchRoom = new Elysia({ prefix: "/room" }).patch(
  "/update",
  () => {
    return { message: "Room updated" };
  }
);
