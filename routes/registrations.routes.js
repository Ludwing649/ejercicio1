const express = require('express');

//controllers
const {
    getAllRegistrations,
    getAllRegistrationById,
    Checkin,
    checkout,
    cancelRegitration,
} = require('../controllers/registrations.controllers');

const registrationsRouter = express.Router();

registrationsRouter.get('/', getAllRegistrations);
registrationsRouter.get('/', getAllRegistrationById);
registrationsRouter.post('/', Checkin);
registrationsRouter.patch('/', checkout);
registrationsRouter.delete('/', cancelRegitration);

module.exports = { registrationsRouter };


