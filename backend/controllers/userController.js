  const getAllUsers = (req, res) => {
    res.res('All user fetched')
}

 const signup = (req, res) => {
    res.send('Signing in')
}

  const login = (req, res) => {
    res.send('Login in')
}

 const getUserProlfile = (req, res) => {
    res.send('Profile Fetched')
}

 const updateUserProfile = (req, res) => {
    res.send('Profile Updated')
}

 const deleteUserProfile = (req, res) => {
    res.send('Profile deleted')
}

 export default {
    getAllUsers,
    signup,
    login,
    getUserProlfile,
    updateUserProfile,
    deleteUserProfile
};