module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db');
        db.create_product(req.body.name, req.body.description, req.body.price, req.body.image_url)
        .then(response => {
            console.log(response);
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
            res.status(500);
        })
    },
    getOne: (req, res, next) => {
        console.log(req.params.id);
        const db = req.app.get('db');
        db.read_product(req.params.id)
        .then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500)
            console.log(err)
        })
    },
    getAll: (req, res, next) => {
        const db = req.app.get('db');
        db.read_products()
        .then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500)
            console.log(err);
        })
    },
    update: (req, res, next) => {
        const db = req.app.get('db');
        db.update_product(req.params.id, req.query.desc)
        .then(response => {
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
            res.status(500);
        })
    },
    delete: (req, res, next) => {
        const db = req.app.get('db');
        db.delete_product(req.params.id)
        .then(response => {
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
            res.status(500);
        })
    }
}