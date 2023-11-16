const mongo = require("mongoose");

exports.Database = () => {
  mongo
    .connect("mongodb+srv://hubertmichaelseelan:oZYACDmZlKoaNTxN@cluster0.ez66ddl.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log("Error in the Database connection", err));
};
