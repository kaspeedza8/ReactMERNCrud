let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

    mongoose.set('useFindAndModify', false);
    //Student Model
    let studentSchema = require('../models/Student')

    //Create Student
    router.route('/create-student').post((req, res, next) =>{
        studentSchema.create(req.body, (error,data)=>{
            if(error){
                return next(error);
            }else{
                console.log(data);
                res.json(data);
            }
        })
    })

    // Read students
    router.route('/').get((req , res) => {
        studentSchema.find((error , data)=>{
            if(error){
                return next(error);
            }else{
                res.json(data)
            }
        })
    })

    // Get single Student
    router.route('/edit-student/:id').get((req , res)=>{
        studentSchema.findById(req.params.id, (error,data)=>{
            if(error){
                return next(error);
            }else{
                res.json(data);
            }
        })
    })

    //Update student
    router.route('/update-student/:id').put((req,res,next)=>{
        studentSchema.findByIdAndUpdate(req.params.id ,{
            $set: req.body
        }, (error,data)=>{
            if(error){
                return next(error);
                console.log(error);
            }else{
                res.json(data);
                console.log('Studennt updated succesfully');
            }
        })
    })

    //Delete Student
    router.route('/delete-student/:id').delete((req,res,next)=>{
        studentSchema.findByIdAndRemove(req.params.id , (error ,data)=>{
            if(eror){
                return next(error);
            }else{
                res.status(200).json({
                    msg:data
                })
            }
        })
    })

    module.exports = router;