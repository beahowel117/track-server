require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
//library to help parse any incoming requests from json deprecated now use app.use(express.json())
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');


const app = express();

app.use(express.json());
app.use(authRoutes);
app.use(trackRoutes);

 const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0.ij7wg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
 mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
 });
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance')
});
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo', err);
});

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email is: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('listening on port 3000')
})

