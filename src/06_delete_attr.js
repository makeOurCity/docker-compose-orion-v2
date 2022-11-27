const axios = require("axios");

axios
  .delete(
    "http://localhost:1026/v2/entities/urn:ngsi-ld:MEASUREMENT:id:1/attrs/description"
  )
  .then((res) => {
    console.log(res.status);
  })
  .catch((err) => {
    console.log(err);
  });
