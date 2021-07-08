module.exports = app => {
    app.route('/empresas')
        .get(app.api.empresas.save)
}