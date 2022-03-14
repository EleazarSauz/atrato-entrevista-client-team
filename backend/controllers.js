const { User } = require('./models')


const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        
        res.status(201).json(await user.save())
    } catch (error) {
        console.log('error', error)
        res.status(500)
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.find();
        
        res.status(200).json(user)
    } catch (error) {
        console.log('error', error)
        res.status(500)
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.find();
        
        res.status(200).json(user)
    } catch (error) {
        console.log('error', error)
        res.status(500)
    }
}

const getListUser = async (req, res) => {
    try {
        const user = await User.find();
        
        res.status(200).json(user)
    } catch (error) {
        console.log('error', error)
        res.status(500)
    }
}



module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getListUser
}