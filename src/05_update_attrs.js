const axios = require("axios");

const data = {
  numValue: {
    type: "Number",
    value: 19.5,
  },
  description: {
    type: "Text",
    value: "隣の部屋にある温度計です。",
  },
};

axios
  .patch(
    "http://localhost:1026/v2/entities/urn:ngsi-ld:MEASUREMENT:id:1/attrs",
    data
  )
  .then((res) => {
    console.log(res.status);
  })
  .catch((err) => {
    console.log(err);
  });
