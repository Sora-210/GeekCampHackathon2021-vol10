//Import
import express from 'express'
import { json as BodyParserJson } from 'body-parser'
import cors from 'cors'
import { initializeApp } from 'firebase-admin/app'
import { getAuth, Auth } from 'firebase-admin/auth'
import { dbInstance } from './db/instance'
//###################################################
//DB access check
dbInstance.authenticate()
    .then((r) => {
        console.log("DB success")
    })
    .catch((e) => {
        console.log("DB error")
        console.log(e)
    })
//###################################################
//MagicNumber
const PORT:Number = 8000
//###################################################
//express setting
const app:express.Express = express()
app.use(BodyParserJson())
app.use(cors())

//firebase setting
initializeApp({
    projectId: 'hackathon-gorupdev-tool'
})
const auth:Auth = getAuth()
//###################################################
//jwtCheck
app.all('*', (req, res, next) => {
    const token:string = req.header('Authorization')!
    auth.verifyIdToken(token)
    .then((result) => {
        req.uid = result.uid
        next()
    })
    .catch((e) => {
        res.status(403).json({})
    })
})
//###################################################
//Routing
import { projectsRouter } from './router/Projects'
app.use('/projects', projectsRouter)
import { todosRouter } from './router/Todos'
import { all } from 'sequelize/types/lib/operators'
app.use('/todos', todosRouter)
//###################################################
app.listen(PORT, () => {
    console.log("API Server Started.")
    console.log("Listening port:" + PORT)
})