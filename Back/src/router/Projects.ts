//Import
import { Router } from 'express'
import { DB } from '../db/index'
const projectsRouter:Router = Router()
//###################################################
/*
get / :所属プロジェクト一覧
post / :プロジェクト新規作成
delete / :プロジェクト削除
post /join : プロジェクトに参加
delete /leave : プロジェクトから抜ける
*/

projectsRouter.get('/', async(req, res) => {
    const T = await DB.instance.transaction()
    try {
        const options = {
            where: {
                uid: req.uid,
                
            },
            include: [{
                model: DB.Projects,
                required: false
            }],
            transaction: T
        }
        const ProjectList = await DB.Affiliations.findAll(options)
        await T.commit()
        res.status(201).json(ProjectList)
    } catch(e) {
        console.log(e)
        await T.rollback()
        res.status(500).json()
    }
})

projectsRouter.post('/', async(req, res) => {
    const T = await DB.instance.transaction()
    
    try {
        const create_sendData = {
            name: req.body.projectName,
            owner_uid: req.uid
        }
        const res_create = await DB.Projects.create(create_sendData, { transaction: T })
        const join_sendData = {
            uid: req.uid,
            project_id: res_create.id
        }
        await DB.Affiliations.create(join_sendData, { transaction: T})
        await T.commit()
        res.status(201).json(res_create)
    } catch(e) {
        console.log(e)
        await T.rollback()
        res.status(500).json()
    }
})

projectsRouter.delete('/', async(req, res) => {
    const T = await DB.instance.transaction()
    try {
        const project_options = {
            where: {
                owner_uid: req.uid,
                id: req.body.projectId
            },
            transaction: T
        }
        await DB.Projects.destroy(project_options)
        const Affiliations_options = {
            where: {
                project_id: req.body.projectId
            },
            transaction: T
        }
        await DB.Affiliations.destroy(Affiliations_options)
        await T.commit()
        res.status(201).json()
    } catch(e) {
        console.log(e)
        await T.rollback()
        res.status(500).json()
    }
})

projectsRouter.post('/join', async(req, res) => {
    const T = await DB.instance.transaction()
    try {
        const options = {
            where: {
                id: req.body.projectId
            },
            transaction: T
        }
        const response = await DB.Projects.findOne(options)
        if (!response) throw Error
        const sendData = {
            uid: req.uid,
            project_id: req.body.projectId
        }
        const join_response = await DB.Affiliations.create(sendData)
        await T.commit()
        res.status(201).json(join_response)
    } catch(e) {
        await T.rollback()
        res.status(500).json()
    }
})

projectsRouter.delete('/leave', async(req, res) => {
    const T = await DB.instance.transaction()
    try {
        const options = {
            where: {
                uid: req.uid,
                project_id: req.body.projectId
            },
            transaction: T
        }
        const response = await DB.Affiliations.destroy(options)
        await T.commit()
        res.status(201).json(response)
    } catch(e) {
        await T.rollback()
        res.status(500).json()
    }
})


//###################################################
export { projectsRouter }
//###################################################