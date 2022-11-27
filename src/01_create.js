const axios = require("axios");

const data = {
  id: "urn:ngsi-ld:MEASUREMENT:id:1",
  type: "DeviceMeasurement",
  numValue: {
    type: "Number",
    value: 20.5,
  },
};

axios
  .post("http://localhost:1026/v2/entities", data)
  .then((res) => {
    console.log(res.status);
  })
  .catch((err) => {
    console.log(err);
  });
