const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('template', {
        locals: {
            title: "Dawgs > Cats",
            message: ""
        },
        partials: {
            partial: "partial-cats-dogs"
        }
    })
});

module.exports = router;