import Users from '../models/user.model.js'

export const getUsersForSideBar = async (req, res) => {
    try {
        console.log("getting all users")
        const loggedInUserId = req.user._id;
        const allUsers = await Users.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(allUsers)
    } catch (error) {
        console.log("GetUsers for sidebar error ", error)
        res.status(500).json({ error: "Internal server error" })
    }
}