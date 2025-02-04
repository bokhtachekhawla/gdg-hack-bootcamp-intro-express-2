const express = require ("express")

const {
    getAllUsersController,getUserByIdController,createUserController,updateUserController,deletedUserController
} = require("../controllers/userController")

const {middleware} = require("../middleware/middleware")

const userRouter = express.Router()

userRouter.get("/",getAllUsersController)
userRouter.get("/:id",getUserByIdController)
userRouter.post("/",middleware,createUserController)
userRouter.put("/:id",updateUserController)
userRouter.delete("/:id",deletedUserController)


module.exports = userRouter