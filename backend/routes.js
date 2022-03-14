const router = require('express').Router();
const controllers = require('./controllers');

router.post('/user', controllers.createUser);
router.put('/user', controllers.updateUser);
router.delete('/user', controllers.deleteUser);
router.get('/user', controllers.getListUser);

module.exports = router;