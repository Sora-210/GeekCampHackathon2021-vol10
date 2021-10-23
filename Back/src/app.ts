//Import
import express from 'express'
import { json as BodyParserJson } from 'body-parser'
import cors from 'cors'
import { initializeApp } from 'firebase-admin/app'
import { getAuth, Auth } from 'firebase-admin/auth'


//###################################################
//MagicNumber
const PORT:Number = 8000
//###################################################
const app:express.Express = express()
app.use(BodyParserJson())
app.use(cors())

initializeApp({
    projectId: 'hackathon-gorupdev-tool'
})
const auth:Auth = getAuth()
//###################################################
//tokenCheck
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
//###################################################
app.listen(PORT, () => {
    console.log("API Server Started.")
})