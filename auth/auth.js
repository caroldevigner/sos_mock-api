// auth.js
const passport = require("passport")
const passportJWT = require("passport-jwt")
const jwt = require("jwt-simple")
const users = require("../data/users")
const cfg = require("./config.js")
const ExtractJwt = passportJWT.ExtractJwt
const Strategy = passportJWT.Strategy
const params = {
    secretOrKey: cfg.jwtSecret || 'my53cr3tK3y',
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

module.exports = function () {
    var strategy = new Strategy(params, function (payload, done) {
        var user = users[payload.id] || null
        if (user) {
            return done(null, { id: user.id })
        } else {
            return done(new Error("User not found"), null)
        }
    });

    passport.use(strategy);

    return {
        initialize: function () {
            return passport.initialize()
        },
        authenticate: function () {
            return passport.authenticate("jwt", cfg.jwtSession)
        },
        generateToken: (req, res) => {
            if (req.body.email && req.body.password) {
                var email = req.body.email;
                var password = req.body.password;
                var user = users.find(function (u) {
                    return u.email === email && u.password === password;
                });
                if (user) {
                    var payload = { id: user.id };
                    var token = jwt.encode(payload, cfg.jwtSecret);
                    res.json({ token: token });
                } else {
                    res.sendStatus(401);
                }
            } else {
                res.sendStatus(401);
            }
        }
    };
};
