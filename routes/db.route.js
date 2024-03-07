const dbController = require("../controller/db.controller")

module.exports = (app)=>{
app.post("/portfolio_be/api/v1/db/db_controller",dbController.db_controller)
}