const axios = require("axios");

axios
  .put(
    "http://localhost:1026/v2/entities/urn:ngsi-ld:MEASUREMENT:id:1/attrs/numValue/value",
    "22.0",
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  )
  .then((res) => {
    console.log(res.status);
  })
  .catch((err) => {
    console.log(err);
  });
