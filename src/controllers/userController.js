const {
    getAllUsers ,getUserById ,createUser,UpdateUser,deleteUser
} = require("../services/userService")


async function getAllUsersController(req,res) {

    try {

        const users = await getAllUsers();

        res.status(200).json(users);
        
    } catch (error) {
        console.error(error)
        return res.status(500).json(error);
    }
    
}

async function getUserByIdController(req,res) {
    try {
        const id = req.params.id;
        const user = await getUserById(id);
        if (!user){
            return res.status(404).json({messege:"user not found"})
        }
        return res.status(200).json(user)
    } catch (error) {
        console.error(error)
        return res.status(500).json(error);
    }
}

async function createUserController(req,res) {
    try {
        const {name,email} = req.body;
        const newUser = await createUser({name,email});
        if (!name || !email) {
            return res.status(400).json({messege:"name and email are required"})
        }
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error)
        return res.status(500).json(error);
    }
}

async function updateUserController(req,res) {

    try {
        
        const {name,email} = req.body;
        const id = req.params.id


        const user = await UpdateUser(id,{name,email});
        if (!user) {
            return res.status(404).json({messege:"user not found"})
        }

        else {
            return res.status(200).json(user)
        }

    } catch (error) {
        console.error(error)
        return res.status(500).json(error)
    }
    
}


async function deletedUserController(req,res) {
    try {

        const id = req.params.id
        const user = await deleteUser(id)
        if (!user) {
            return res.status(404).json({messge:"user not found"})
        }
        else {
            return res.status(200).json({messege:`user is deleted succ`,user})
        }
        
        
    } catch (error) {
        console.error(error);
        return res.status(500).json(error)
    }
}

module.exports = {getAllUsersController,getUserByIdController,createUserController,updateUserController,deletedUserController}