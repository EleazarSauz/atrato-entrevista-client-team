const createUser = (req, res) => {
    console.log('cresateUser')
    res.status(200).json({message: "hello cresateUser :)"})
}

const updateUser = (req, res) => {
    console.log('updateUser')
    res.status(200).json({message: "hello updateUser :)"})
}

const deleteUser = (req, res) => {
    console.log('deleteUser')
    res.status(200).json({message: "hello deleteUser :)"})
}

const getListUser = (req, res) => {
    console.log('getListUser')
    res.status(200).json({message: "hello getListUser :)"})
}



module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getListUser
}