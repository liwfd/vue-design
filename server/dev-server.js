const compression = require('compression')
const bodyParser = require('body-parser')
const fs = require('fs')
let baseDir = __dirname
module.exports = app => {

    app.use(compression())

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use('/api/getFiles', (req, res) => {
        fs.readdir(baseDir + `/${req.body.type}/`, 'utf-8', (err, data) =>  {
            if (err) {
                res.json({ err, success: false })
            }
            res.json({ data, success: true })
        })
    })

    app.use('/api/setFile', (req, res) => {
        fs.writeFile(baseDir + `/${req.body.type}/${req.body.pageId}.json`, JSON.stringify(req.body), err => {
            if (err) {
                res.json({ err, success: false })
            }
            res.json({ success: true })
        })
    })

    app.use('/api/getFile', (req, res) => {
        fs.readFile(baseDir + `/${req.body.type}/${req.body.pageId}.json`, 'utf-8', (err, data) => {
            // if (err) {
            //     res.json({err})
            // }
            if (data) {
                res.json({ data, success: true })
            } else {
                res.json({ success: false })
            }
        })

    })

    app.use(require('connect-history-api-fallback')())

}
