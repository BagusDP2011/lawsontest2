const Users = require("../models/Users");
const fastcsv = require("fast-csv");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const emailer = require("../config/emailer");
const pool = require("../config/connectionConfig");


const exportMonthly = async (req, res) => {
  const ws = fs.createWriteStream(
    path.resolve(__dirname, "../templates/monthly.csv")
  );
  try {
    const { email } = req.params;
    const { month } = req.query;
    let sqlQuery = `SELECT M.merchant_name, OI.date, OI.quantity, P.name AS product_name, U.full_name AS user_name, C.name AS city_name, OS.status_id
    FROM OrderItems OI Merchants M JOIN Products P ON OI.product_id = P.product_id JOIN Users U ON OI.user_id = U.id JOIN Cities C ON M.city_id = C.id JOIN OrderStatuses OS ON OI.order_id = OS.order_id
    WHERE EXTRACT(MONTH FROM OI.date) = '${month}' AND EXTRACT(YEAR FROM OI.date) = EXTRACT(YEAR FROM CURRENT_DATE)
    `;
    pool.query(sqlQuery, async function (err, data) {
      if (err) throw err;

      //JSON
      const jsonData = JSON.parse(JSON.stringify(data));
      console.log("jsonData", jsonData);

      //csv
      fastcsv
        .write(jsonData, { headers: true })
        .on("finish", function () {
          console.log(
            "Write to monthly.csv successfully in server folder!"
          );
        })
        .pipe(ws);

      const rawHTML = fs.readFileSync(
        path.resolve(__dirname, "../templates/productReport.html"),
        "utf-8"
      );

      const compiledHTML = handlebars.compile(rawHTML);

      const htmlResult = compiledHTML({});

      await emailer({
        to: email,
        html: htmlResult,
        subject: "Sales Report",
        text: "Sales Report",
        attachments: [
          {
            filename: "monthly.csv",
            path: path.resolve(__dirname, "../templates/monthly.csv"),
          },
        ],
      });

      res.send("All process is done!");
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error when getting stock data",
    });
  }
};

module.exports = {
  exportMonthly,
};
