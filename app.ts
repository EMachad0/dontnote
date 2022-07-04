import cookieParser from "cookie-parser";
import express from "express";
import path from "path";
import createError from "http-errors";
import logger from "morgan";

const indexRouter = require("./app/routes");
const usersRouter = require("./app/routes/users");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "./app/views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./app/public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// @ts-ignore
// TODO: look-up express error handler ts types
app.use(function (err, req, res, _) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
