const {users} = require ("../data/users.js")

async function getAllUsers() {
    return users;
}


async function getUserById(id) {
    const user = users.find(user=>user.id === parseInt(id))
    return user 
}

async function createUser(data) {
    const newUser = {
        name : data.name,
        email:data.email,
        id : users.length+1,
    }
    users.push(newUser)
    return newUser
}


async function UpdateUser(id,data) {
    const user = users.find(user=>user.id === parseInt(id))

    if (!user) {
        return null
    }
    user.name = data.name;
    user.email = data.email;
    return user
}

async function deleteUser(id) {
    const userIndex = users.findIndex(user=>user.id === +id)
    if (userIndex === -1) {
        return null
    }

    const [deletedUser] = users.splice(userIndex,1)
    return deletedUser
    
}

module.exports = {getAllUsers,getUserById,createUser,UpdateUser,deleteUser}