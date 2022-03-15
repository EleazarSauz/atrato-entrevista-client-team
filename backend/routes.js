const router = require('express').Router();
const controllers = require('./controllers');

router.post('/user', controllers.createUser);
router.put('/user/:id', controllers.updateUser);
router.delete('/user/:id', controllers.deleteUser);
router.get('/user', controllers.getListUser);

module.exports = router;