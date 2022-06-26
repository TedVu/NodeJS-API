const tourController = require('../controllers/tourController');
const express = require('express');

const router = express.Router();

// middleware runs when id is presentt in the urls
router.param('id', (req, res, next, id) => {
  console.log(`Tour id is: ${id}`);
  next();
});

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
