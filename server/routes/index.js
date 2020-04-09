var express = require('express');
var router = express.Router();
var axios = require('axios');

router.post('/hello/', async function(req, res, next) {

  let { name, color, bgColor } = req.body.params;
  const url = `http://genie.kubric.io/api/hello?name=${name}&textcolor=${color.replace('#', '%23')}&bgcolor=${bgColor.replace('#', '%23')}`;

  try {
    const result = await axios.get(url);
    res.send({
      status: result.status,
      statusText: result.statusText,
      data: result.request.res.responseUrl
    });
  } catch (err) {
    res.send({
      status: err.response.status,
      statusText: err.response.statusText,
      data: err.response.data
    });
  }
});

module.exports = router;
