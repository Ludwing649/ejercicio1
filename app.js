const express = require('express');
// Routers
const { registrationsRouters } = require('.routes/registrations.routes');
//utils
const { db } = require('./utils/database.utils');
// Init app
const app = express();
//Edpoints
app.use('/api/v1/registrations', registrationsRouter);
db.authenticate()
    .then(() => console.log('Database authenticate'))
    .catch(err => console.log(err));

db.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.log(err));

app.listen(19000, () => {
    console.log('Checking app running on port 19000');
})
