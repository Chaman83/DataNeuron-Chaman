const express = require('express');
const router = express.Router();

const { 
    getAllEmployeeDetails,
    addEmployeeDetails,
    updateUserDetails
} = require("../controllers/details");


router.route("/").get(getAllEmployeeDetails);
router.route("/").post(addEmployeeDetails);
router.route("/:_id").put(updateUserDetails);
// router.route("/addEmployee").post(addEmployeeDetails);

module.exports = router; 