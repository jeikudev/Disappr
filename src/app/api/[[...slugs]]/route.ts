import { Elysia } from "elysia";
import { postRoom } from "../routes/room.route";

const app = new Elysia({ prefix: "/api" }).use(postRoom);

export const GET = app.fetch;
export const POST = app.fetch;

export type App = typeof app;
