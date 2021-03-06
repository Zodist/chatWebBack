const jwt = require('../modules/jwt');
const User = require('../models/userV2');

module.exports = {
    signin: async (req, res) => {
        /* user정보를 DB에서 조회 */
        const id = req.body.id;
        const password = req.body.password;
        // const user = await User.findOne({ id, password });
        await User.findOne({ id }, function (err, user) {
            if (err) throw err;

            console.log("userInfo :", user);
            if (!user) {
                return res.status(400).json({ error: 'invalid user' });
            }
            user.comparePassword(password, async function (err, isMatch) {
                if (err) throw err;
                console.log(password, ':', isMatch); // -&gt; Password123: true
                if (!isMatch) {
                    return res.status(400).json({ error: 'invalid password' });
                } else {
                    /* user의 idx, email을 통해 토큰을 생성! */
                    const jwtToken = await jwt.sign(user);
                    return res.status(200).json({
                        token: jwtToken.token
                    })
                }
            });
        });

        // send(util.success(200, 'LOGIN_SUCCESS', {
        //     /* 생성된 Token을 클라이언트에게 Response */
        //     token: jwtToken.token
        // }))
    },
    createNewUser: async function (req, res, next) {
        User(req.body).save()
            .then(user => res.status(201).json({
                result: 'ok',
                user: user
            }))
            .catch(err => res.status(500).send(err));
        // try {
        //     const user = await new User(req.body).save();
        //     res.status(201).json({
        //         result: 'ok',
        //         user: user
        //     });
        // } catch (err) {
        //     console.error(err);
        //     next(err);
        // }
    },
    updateUser: async function (req, res, next) {
        User.updateByUserId(req.params.id, req.body)
            .then(todo => res.send(todo))
            .catch(err => res.status(500).send(err));
    },
    getUserInfo: async function (req, res, next) {
        let tokenOrigin = req.headers.authorization;
        let tokenString = tokenOrigin.split(' ')[1];
        const loginedUser = await jwt.verify(tokenString);
        const user = await User.findOne({ id: loginedUser.id });
        return res.status(200).json({
            user: user
        })
    },
    verifyToken: async function (req, res, next) {
        let tokenOrigin = req.headers.authorization;
        let logined = false;
        const TOKEN_EXPIRED = -3;
        const TOKEN_INVALID = -2;
        // 토큰 없음
        if (tokenOrigin) {
            let tokenString = tokenOrigin.split(' ')[1];
            // decode
            const user = await jwt.verify(tokenString);
            console.log(user);
            // 유효기간 만료
            if (!(user === TOKEN_EXPIRED || user === TOKEN_INVALID)) {
                logined = true
            }
        }

        return res.status(200).json({
            logined: logined
        })
    },
}