var express = require("express");
const router = express.Router();
var mongo = require("../Utils/db");
var getir = require("../Models/getir");

router.post("/", async (req, res) => {
  const { startDate, endDate, minCount, maxCount } = req.body;

  let code = 0; // Default code
  let msg = "Success"; // Default message

  let start = new Date(startDate); // Converting dates into the actual date format
  let end = new Date(endDate);

  if (!checkValues(req.body, "startDate|endDate|minCount|maxCount")) {
    // Check if any payload parameters are missing, and if it is throw an error.
    code = 1;
    msg = "Missing JSON Body value(s).";
    let result = {
      code: code,
      msg: msg,
    };
    return res.status(200).send(result);
  } else if (
    minCount > maxCount ||
    maxCount < minCount ||
    start > end ||
    end < start
  ) {
    // Check if there's a logic error between numbers or dates.
    code = 2;
    msg = "Minimum value is greater than maximum value or vice versa.";
    let result = {
      code: code,
      msg: msg,
    };
    return res.status(200).send(result);
  }

  const data = await getir.aggregate(
    [
      {
        $match: { createdAt: { $gte: start, $lte: end } }, // Get values between the given date interval
      },
      {
        $project: {
          _id: 0,
          key: "$key",
          createdAt: "$createdAt",
          totalCount: { $sum: "$counts" },
        },
      },
      {
        $match: { totalCount: { $lte: maxCount, $gte: minCount } }, // Get totalCounts that are between the minCount and maxCount
      },
    ],
    function (err, resp) {
      if (resp) {
        let result = {
          code: code,
          msg: msg,
          records: resp,
        };
        return res.status(200).send(result); // Return the result in the requested format
      } else {
        return res.status(200).send({ message: "Data not found" }); // Throw an error
      }
    }
  );
});

function checkValues(obj, list) {
  if (typeof list === "string") {
    list = list.split("|");
  }
  for (prop of list) {
    let val = obj[prop];
    if (val === null || val === undefined) {
      return false;
    }
  }
  return true;
}

module.exports = router;
