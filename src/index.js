const app = require("./app");

const { connect } = require("./config/db.connection");

const port = process.env.PORT || 3100;

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error(`Error connecting to database: ${error.message}`);
  });
