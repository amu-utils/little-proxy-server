module.exports = {
    create: function (app) {
      app.get('/cheese', function (req, res, next) {
        res.status(200).send({
          'name': 'get'
        });
      });
  
      app.post('/cheese', function (req, res, next) {
        res.status(200).send({
          'name': 'posted'
        });
      });
  
      app.delete('/cheese', function (req, res, next) {
        res.status(200).send({
          'name': 'deleted'
        });
      });
  
    }
  }
  