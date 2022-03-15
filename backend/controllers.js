const { User } = require('./models')
const fetch = require('node-fetch')

const createUser = async (req, res) => {
    try {
        
        const reqRandommer = await fetch("https://randommer.io/api/Card", {
            method: "GET",
            headers: {
                "X-Api-Key": process.env.API_KEY_RANDOMMER
            },
        })
        
        const card = await reqRandommer.json()

        const user = new User({...req.body, card})
        
        res.status(201).json(await user.save())
    } catch (error) {
        console.log('error', error)
        res.status(400).json(error)
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.updateOne({ _id : req.params.id}, req.body)
        
        res.status(200).json(user)
    } catch (error) {
        console.log('error', error)
        res.status(500)
    }
}

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        
        res.status(200).json({message: 'User deleted successfully'})
    } catch (error) {
        console.log('error', error)
        res.status(500)
    }
}

const getListUser = async (req, res) => {
    try {
        const user = await User.find()
        
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