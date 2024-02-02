// const EmployeeSchema = require("../models/details");
const Employee = require("../models/details");

const addEmployeeDetails = async(req,res) => {
    try{
        const newEmployee = new Employee(req.body);
        console.log(newEmployee,"aa");
        await newEmployee.save();
        console.log(newEmployee,"bb")
        res.status(200).json({msg:'add employee', employee:newEmployee});
    }catch(error) {
        console.log(error)
    }
}

const getAllEmployeeDetails = async(req,res) => {
    const empData = await Employee.find({});
    res.status(200).json({empData});
};

const updateUserDetails = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id, "id");

        // Use findOneAndUpdate instead of updateOne
        const updateUserDetails = await Employee.findOneAndUpdate(
            { _id: id }, // Filter by document ID
            req.body,    // Update with request body
            { new: true } // Return the updated document
        );

        console.log(updateUserDetails, "ccc");

        // Check if no user is updated
        if (!updateUserDetails) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.status(200).json({ msg: "User updated", employee: updateUserDetails });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal server error" });
    }
};


// const updateUserDetails = async(req,res) =>{
//     try{
//         const {id} = req.params.id;
//         console.log(id,"id");
//         const updateUserDetails = await Employee.updateOne(id,req.body,{new:true});
//         console.log(updateUserDetails,"ccc")
//         if(!updateUserDetails) {
//             return res.status(404).json({msg:"error"})
//         }
//         res.status(200).json({msg:"user update",employee:updateUserDetails});
//     } catch (error){
//         console.log(error);
//         res.status(500).json({msg:"error"});
//     }
// }

// const updateUserDetails = async (req, res) => {
//     try {
//         const id = req.params._id;
//         console.log(id, "id");

//         // Correct usage of findOneAndUpdate
//         const updateUserDetails = await Employee.findOneAndUpdate(
//             { _id: id }, // Filter by document ID
//             req.body,    // Update with request body
//             { new: true } // Return the updated document
//         );

//         console.log(updateUserDetails, "ccc");

//         // Check if no user is updated
//         if (!updateUserDetails) {
//             return res.status(404).json({ msg: "User not found" });
//         }

//         res.status(200).json({ msg: "User updated", employee: updateUserDetails });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: "Internal server error" });
//     }
// };


// const addEmployeeDetails = async(req,res) => {
//     const EmployeeDetails = ({
//         "name" : req.body.name,
//         "phone" : req.body.phone,
//         "city" : req.body.city,
//         "designation" : req.body.designation,
//         "salary" : req.body.salary
//     });
//     console.log(newEmployee)
//     EmployeeDetails.save().then((data)=>{
//         res.send(data)
//     })
//     res.status(200).json(newEmployee)

// }

module.exports = {getAllEmployeeDetails,addEmployeeDetails,updateUserDetails};