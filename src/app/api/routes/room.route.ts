import Elysia from "elysia";

export const postRoom = new Elysia({ prefix: "/room" }).post("/create", () => {
  return { message: "Room created" };
});
