const Express = require('express');
const app = Express();

const resume = require('./resume.json');

app.set('view engine', 'pug');

app.use(Express.static('dist'));

app.get('/', (req, res) => {
  res.format({
    html: () => res.render('../src/index', resume),
    json: () => res.json(resume),
    'application/pdf': () => res.render('../src/index', resume)
  });
});

// TODO: send me a message
//app.post('/hi', () => {});

// TODO: access and error logging

app.listen(3000);
