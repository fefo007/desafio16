const express =require('express')
const {Router}=require( 'express')
const {fork} = require('child_process')
const logger = require('../loggers/loggersLog4js')

const randomNumRoutes = new Router()

randomNumRoutes.use(express.json())
randomNumRoutes.use(express.urlencoded({ extended: true }))

randomNumRoutes.get('/randoms',(req,res)=>{
    const cant = req.query.cant || 100000
    const randomGenerator = fork('../container/randomNum.js')
    randomGenerator.on('message',(result)=>{
        res.status(200).json(result)
    })
    randomGenerator.send(cant)
})
randomNumRoutes.get('*',(req,res)=>{
    logger.warn('ruta inexistente')
    res.redirect('/randoms')
})