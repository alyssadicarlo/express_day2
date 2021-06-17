const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('template', {
        locals: {
            title: "GOOO DAWGS!!",
            message: "SICK EM WOOF WOOF WOOF!"
        },
        partials: {
            partial: "partial-cats-dogs"
        }
    });
});

module.exports = router;