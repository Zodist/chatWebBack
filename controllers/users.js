const jwt = require('../modules/jwt');
const User = require('../models/userV2');

module.exports = {
    signin: async (req, res) => {
        /* user정보를 DB에서 조회 */
        const id = req.body.id;
        const user = await User.findOne({ id });
        console.log("userInfo :", user);
        if (!user) {
            return res.status(400).json({ error: 'invalid user' });
        }           
            
        /* user의 idx, email을 통해 토큰을 생성! */
        const jwtToken = await jwt.sign(user);
        return res.status(200).json({
            token: jwtToken.token
        })
        // send(util.success(200, 'LOGIN_SUCCESS', {
        //     /* 생성된 Token을 클라이언트에게 Response */
        //     token: jwtToken.token
        // }))
    },
    createNewUser: async function (req, res, next) {
        try {
            const user = await new User(req.body).save();
            res.status(201).json({
                result: 'ok',
                user: user
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
}