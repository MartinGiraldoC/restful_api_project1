const db = require('../models')

const getAllUsers = async()=>{
    try {
        let users = await db.User.findAll()
        return users
    } catch (error) {
        return error.message || 'Failed to get users'
    }
}

const getUser = async(id)=>{
    try {
        let user = await db.User.findByPk(id)
        return user
    } catch (error) {
        //return error.message || 'Failed to get user'
        throw {status:500, message:'Failed to get user'}
    }
}

const createUser = async (name,email,phone,password)=>{
    try {
        const newUser = await db.User.create(
            {name, email, phone, password}
        )
        return newUser
    } catch (error) {
        //return error.message || 'User could not be created'
        throw {status:500, message:'User could not be created'}
    }
}
const updateUser = async (id, name, email, phone, password) => {
    try {
        let upNewUser = await db.User.update({
            name, email, phone, password
        },{
            where: {
                id,
            }
        })

        return upNewUser
        
    } catch (error) {
        return error.message || 'Falied to update user'
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser
};