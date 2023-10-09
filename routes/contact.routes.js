const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

router.post('/', contactController.create);
router.get('/', contactController.getAll);
router.get('/:id', contactController.getById);
router.patch('/:id', contactController.updateById);
router.delete('/:id', contactController.deleteById);

module.exports = router;