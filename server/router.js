const { Router } = require('express');
const router = Router();
const { user } = require('./controllers');

router.post('/users', user.create);
router.get('/users', user.readAll);
router.get('/users/:id', user.read);
router.put('/users/:id', user.updatePut);
router.patch('/users/:id', user.updatePatch);
router.delete('/users/:id', user.destroy);

module.exports = router;