const tourController = require('../controllers/tourController');
const express = require('express');

const router = express.Router();

// middleware runs when id is present in the urls
// and this middleware is local to tour, so only tour routes
// which have the id in the url will trigger this middleware
router.param('id', tourController.checkID);

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
