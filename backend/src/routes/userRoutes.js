import express from 'express';
import { User } from '../models/userModel.js';

const router = express.Router();  


// Post method
router.post('/post', (req, res) => {
    res.json({message: "This is a Post API - Create"})
})

// Dynamically storing user Form Data from React form into Backend and then into Database using Post Method

router.post('/users', async (req, res) => {
    const userData = new User(req.body);

    try {
            console.log("Recieved user data:", userData);
            const savedUserData = await userData.save();
            res.status(200).json(savedUserData);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
});

// router.post('/usersFormData', async (req, res) => {
//     const userData = new User(req.body);

//     try {
//             console.log("Recieved user data:", userData);
//             const savedUserData = await userData.save();
//             res.status(200).json(savedUserData);
//     } catch (error) {
//         res.status(400).json({message: error.message})
//     }
// });

router.post('/usersFormData', (req, res) => {
    const emailData = req.body;
    console.log("user data recieved", emailData)

    res.json({
        status: 'success',
        message: 'Data recieved successfully!'
    })
})

// Get all user data route - getAllUserData

router.get('/getAllUserData', async (req, res) => {
    try {
        const userData = await User.find();
        console.log("Get user data 2", userData)
        res.json(userData);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// <----- Hard coated the user data and send it to MongoDB ------>

// router.post('/userData', async (req, res) => {
//     const data = new User({
//         fullName: req.body.fullName,
//         email: req.body.email,
//         age: req.body.age,
//         password: req.body.password,
//         confirmPassword: req.body.confirmPassword
//     })

//     try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })



// Get all method - Read
router.get('/getAll', (req, res) => {
    res.status(200).json({message: 'To Get all the Api'})
})

// Get by Id method
router.get('/getOne/:id', (req, res) => {
    res.status(200).json({ message: `To get the specific ${req.params.id}`})
})

// Post method - Create
router.post('/userData', (req, res) => {
    res.status(201).json({message: "user data created"})
})

// Update all - Patch
router.patch('/update', (req, res) => {
    res.json({message: "To update the data"})
})

//Update by Id method
router.patch('/update/:id', (req, res) => {
    res.json({ message: `To update the specific ${req.params.id}`})
})

// Delete by Id method - Delete
router.delete('/delete/:id', (req, res) => {
    res.send(' deleted the message - req.params.id')
})

export const userRoute = router;


// CRUD Methods

// //Post Method
// router.post('/post', async (req, res) => {
//     const data = new Model({
//         name: req.body.name,
//         age: req.body.age
//     })

//     try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

// //Get all Method
// router.get('/getAll', async (req, res) => {
//     try {
//         const data = await Model.find();
//         res.json(data)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// //Get by ID Method
// router.get('/getOne/:id', async (req, res) => {
//     try {
//         const data = await Model.findById(req.params.id);
//         res.json(data)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// //Update by ID Method
// router.patch('/update/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const updatedData = req.body;
//         const options = { new: true };

//         const result = await Model.findByIdAndUpdate(
//             id, updatedData, options
//         )

//         res.send(result)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// //Delete by ID Method
// router.delete('/delete/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const data = await Model.findByIdAndDelete(id)
//         res.send(`Document with ${data.name} has been deleted..`)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })