import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import generateToken from '../utils/generateToken.js'

export const login = async (req, res) => {

    try {
        const { username, password } = req.body;
        console.log("Login with user: ", username)
        const user = await User.findOne({ username })
        let pass = user.password || ""

        bcrypt.compare(password, pass, function (err, same) {
            if (same) {

                generateToken(user._id, res);
                res.status(200).json({
                    _id: user._id,
                    fullName: user.fullName,
                    username: user.username,
                    profilePic: user.profilePic
                })
            } else {
                res.status(400).json({ error: "Invalid name or password" })
            }
        })

    } catch (error) {
        console.log('Login error', error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "Logged out succesfully" })
    } catch (error) {
        console.log('Logout error', error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

const profilePic = (gender, username) => {
    const baseUrl = `https://avatar.iran.liara.run/public`;
    const maleProfilePic = `${baseUrl}/boy?username=${username}`;
    const femaleProfilePic = `${baseUrl}/girl?username=${username}`;
    switch (gender) {
        case 'male':
            return maleProfilePic;
        case 'female':
            return femaleProfilePic;
        default:
            return baseUrl;
    }
}

export const signup = async (req, res) => {
    console.log("calling signup")
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" })
        }
        const user = await User.findOne({ username })

        if (user) {
            return res.status(400).json({ error: "Username already exists" })
        }
        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: profilePic(gender, username)
        })
        console.log(newUser)
        if (newUser) {
            await generateToken(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({ error: "Invalid data" })
        }
    } catch (error) {
        console.log('Signup error', error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
    console.log("signup")
}