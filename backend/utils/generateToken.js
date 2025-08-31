/**
 * Generate a JSON web token
 */
import jwt from 'jsonwebtoken'

const generateToken = (id) => {
    return jwt.sign({ id },'vaidya',{
        expiresIn: '30d',
    })
}

export default generateToken
