const db_model = require("../model/db.model");

exports.db_controller = async (req, res) => {
    try {
        const req_body = req.body;
        
        // Construct the object from the request body
        const reqObj = {
            name: req_body.name,
            email: req_body.email,
            message: req_body.message
        };

        // Create the object in the database (await the asynchronous call)
        const obj_created = await db_model.create(reqObj);

        // Send success response after successful creation
        res.status(201).send({
            message: "User registered successfully",
            data: {
                name: obj_created.name,
                email: obj_created.email,
                message: obj_created.message
            }
        });

    } catch (error) {
        console.error("Error registering user:", error);  // Log the error for debugging

        // Send error response with a proper status code
        res.status(500).send({
            message: "Error occurred while registering the user",
            error: error.message // Optionally, send the error details
        });
    }
};
