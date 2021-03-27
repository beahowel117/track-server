const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Track = mongoose.model('Track');

const router = express.Router();

router.use(requireAuth);

router.get('/track', async (req, res) => {
  const tracks =  await Track.find({ userId: req.user._id });

  res.send(tracks);
});

router.post('/track', async (req, res) => {
  const { name, locations } = req.body;

  if(!name || !locations){
    return res
      .status(422)
      .send({error: 'you must provide a name and location'});
  }
  try{
    const track = new Track({ name, locations, userId: req.user._id });
    await track.save();
    res.send(track);
  } catch(err){
    res.status(422).send({error: err.message});
  }
});

module.exports = router;
