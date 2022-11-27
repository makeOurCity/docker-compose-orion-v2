const axios = require("axios");

axios
  .post(
    "http://localhost:1026/v2/entities/urn:ngsi-ld:MEASUREMENT:id:1/attrs",
    {
      description: {
        type: "Text",
        value: "私の部屋にある温度計です。",
      },
    }
  )
  .then((res) => {
    console.log(res.status);
  })
  .catch((err) => {
    console.log(err);
  });
