const axios = require("axios");

axios
  .get("http://localhost:1026/v2/entities/urn:ngsi-ld:MEASUREMENT:id:1")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
