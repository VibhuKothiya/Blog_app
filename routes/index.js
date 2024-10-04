const express = require("express")
const routes = express.Router()
const userRoute = require("./user_route")
const postRoute = require("./post_route");
const commentRoute = require("./comment_route");
const authRoute = require("./auth_route")

routes.use("/user", userRoute)
routes.use("/post", postRoute)
routes.use("/comment", commentRoute)
routes.use("/user", authRoute)

module.exports = routes;