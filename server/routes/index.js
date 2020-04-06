var express = require('express');
var router = express.Router();
var axios = require('axios');

router.post('/hello/', async function(req, res, next) {
  console.log('hello world params', req.params);
  console.log('body', req.body.params);
  let { name, color, bgColor } = req.body.params;
  let url = `http://genie.kubric.io/api/hello`;
  const result = await axios.get(url, { params: { name, textcolor: color.replace('#', '%'), bgcolor: bgColor.replace('#', '%') } });
  console.log('middleware api result', result);
});

module.exports = router;
