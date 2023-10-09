const mongoose = require('mongoose');
const Schema = mongoose.schema;
const contactController = require('../controllers/contact.controller');

const contactSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('Contact', contactController.create);

module.exports = router;