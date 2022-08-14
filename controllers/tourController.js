const fs = require('fs');
const Tour = require('../models/tourModel');

// Refactored into separate id verification controller with param middleware,
// we have access to val
// Philosophy of Express: Try to work with middleware as much
// as we can
exports.checkID = (req, res, next, val) => {
  next();
};

// Refactored into separate middleware to validate if there is tour name and price
exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'No tour name or price found',
    });
  }

  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestTime: req.requestTime,
    results: 9,
    // data: {
    //   tours
    // },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;

  // const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    // data: {
    //   tour,
    // },
  });
};

exports.createTour = (req, res) => {};

exports.updateTour = (req, res) => {
  const id = req.params.id * 1;

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here ...',
    },
  });
};

exports.deleteTour = function (req, res) {
  const id = req.params.id * 1;

  res.status(204).json({
    status: 'success',
    data: null,
  });
};
