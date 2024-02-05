const router = require('express').Router();
const userRoutes = require('./userRoutes');
const uploadRoutes = require('./uploadRoutes');
const musicRoutes = require('./musicRoutes');

router.use('/users', userRoutes);
router.use('/upload', uploadRoutes);
router.use('/music', musicRoutes);

module.exports = router;
