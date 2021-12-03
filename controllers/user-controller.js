'use strict'

class UserController {

    static async index(req, res) {
        res.send('Hello World!');
    }

}

module.exports = UserController;