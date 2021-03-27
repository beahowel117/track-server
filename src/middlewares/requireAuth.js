const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  //authorization === 'Bearer token'
  if(!authorization){
    return res.status(401).send({ error: 'You must be logged in'})
  }

  const token = authorization.replace('Bearer ', '');
  //first arg is the token we want to validate, the second is our key we want to keep secret and the third is a cb function after json web token has done some validation on the token
  //the payload is whatever we put into our jwt in our authRoutes ==> {userId: user._id}
  jwt.verify(token, 'MY_SECRET_KEY', async(err, payload) => {
    if(err) {
      return res.status(401).send({error: 'You must be logged in'})
    }

    const { userId } = payload;

    const user = await User.findById(userId);
    req.user= user;
    next(); 
  })
};
