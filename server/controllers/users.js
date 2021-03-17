import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const secret = process.env.TOKEN_SECRET

export const createJWT = (req, res) => {
    const user = req.body
    try {
        const token = jwt.sign(user, secret, { expiresIn: "24h" })
        res.status(200).json(token)
    } catch (error) {
        console.log(error)
    }

}