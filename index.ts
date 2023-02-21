import Koa from "koa";
import logger from "koa-logger";
import json from "koa-json";
const app: Koa = new Koa();
import { router as articles } from "./routes/articles";



app.use(logger());
app.use(json());
app.use(articles.routes());
app.listen(10888);
