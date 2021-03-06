module.exports = function(app) {
    let dreamlist = require('../controllers/dreamListController'),
        userHandlers = require('../controllers/userController')

    app.route('/dreams')
        .get(dreamlist.list_all_dreams)
        .post(dreamlist.create_a_dream)

    app.route('/dreams/:dreamId')
        .get(dreamlist.read_a_dream)
        .put(dreamlist.update_a_dream)
        .delete(dreamlist.delete_a_dream)

    app.route('/auth/register')
        .post(userHandlers.register)

    app.route('/auth/login')
        .post(userHandlers.login)
}
