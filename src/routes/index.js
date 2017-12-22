const express = require('express');
const router = express.Router();
const model = require('../models/task')();


router.get('/',(req,res)=>{
    model.find({},(err,tasks)=>{
        if(err){throw err};
        res.render('index',{
            title : 'CRUD of tasks',
            tasks: tasks
        })
    })
});

router.get('/changeStatus/:id',(req,res)=>{
    let id = req.params.id;
    model.findById(id,(err,task)=>{
        if(err){throw err;}
        task.status = !task.status;
        task.save()
        .then(()=>{res.redirect('/')})
    })
});

router.get('/deleteTask/:id',(req,res)=>{
    let id = req.params.id;
    model.findById(id,(err,task)=>{
        if(err){throw err;}
        task.remove()
        .then(()=>{res.redirect('/')})
    })
});

router.post('/add',(req,res)=>{
    let body = req.body;
    body.status = false;

    model.create(body,(err,task)=>{
        if (err) {throw err;}
        res.redirect('/');
    });
});

module.exports = router;