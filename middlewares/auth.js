const jwt = require('../modules/jwt');
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

const authUtil = {
    checkToken: async (req, res, next) => {
        // var token = req.headers.token;
        // console.log(req.headers)
        let tokenOrigin = req.headers.authorization;
        // 토큰 없음
        if (!tokenOrigin)
            return res.status(401).json({ error: 'unauthorized' });
        let tokenString = tokenOrigin.split(' ')[1];
        // decode
        const user = await jwt.verify(tokenString);
        // 유효기간 만료
        if (user === TOKEN_EXPIRED)
            return res.status(401).json({ error: 'token expired' });
        // 유효하지 않는 토큰
        if (user === TOKEN_INVALID)
            return res.status(401).json({ error: 'invalid expired' });
        // if (user.idx === undefined)
        //     return res.status(401).json({ error: 'invalid expired' });
        // req.idx = user.idx;
        // console.log("In middleWare : ", user)
        next();
    }
}

module.exports = authUtil;