const jwt = require('jsonwebtoken');
const secrets = require('../secrets/secrets');


  try {
    const token = req.headers.authorization;

    if (token) {
      jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        if (err) {
          res.status(401).json({ you: "Very Nope!!" });
        } else {
          req.decodedJwt = decodedToken;
          console.log(req.decodedJwt);
          next();
        }
      })
    } else {
      throw new Error('OOOOOPS!');
    }
  } catch (err) {
    res.status(401).json({ error: err.message });
  };