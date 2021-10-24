//Import
import { Router } from 'express'
import { DB } from '../db/index'
const todosRouter:Router = Router()
//###################################################
/*
get / :自分対象todoを取得
post / :todoを作成する
get /:id :idのtodo取得
get /project/:projectId: プロジェクトidのtodoを取得
patch /:id :todoのステータスを切り替える
delete /:id :todoを削除する
*/

todosRouter.post('/', async(req, res) => {
    const T = await DB.instance.transaction()
    try {
        const sendData = {
            uid: req.uid,
            project_id: req.body.projectId,
            status: false,
            content: req.body.content,
        }
        const response = await DB.Todos.create(sendData)
        await T.commit()
        res.status(201).json(response)
    } catch(e) {
        await T.rollback()
        res.status(500).json()
    }
})

todosRouter.get('/', async(req, res) => {
    const T = await DB.instance.transaction()
    try {
        const options = {
            where: {
                uid: req.uid
            },
            transaction: T
        }
        const response = await DB.Todos.findAll(options)
        await T.commit()
        res.status(201).json(response)
    } catch(e) {
        console.log(e)
        await T.rollback()
        res.status(500).json()
    }
})

todosRouter.get('/:id', async(req, res) => {
    const T = await DB.instance.transaction()
    try {
        // const checkOptions = {
        //     where: {
        //         uid: req.uid
        //     },
        //     transaction: T
        // }
        // const check = await DB.Affiliations.findOne(checkOptions)
        const options = {
            where: {
                id: req.params.id
            },
            transaction: T
        }
        const response = await DB.Todos.findOne(options)
        await T.commit()
        res.status(201).json(response)
    } catch(e) {
        await T.rollback()
        res.status(500).json()
    }
})

todosRouter.get('/project/:projectId', async(req, res) => {
    const T = await DB.instance.transaction()
    try {
        const checkOptions = {
            where: {
                uid: req.uid,
                project_id: req.params.projectId
            },
            transaction: T
        }
        const check = await DB.Affiliations.findOne(checkOptions)
        if (!check) throw Error
        const options = {
            where: {
                project_id: req.params.projectId
            },
            transaction: T
        }
        const response = await DB.Todos.findAll(options)
        await T.commit()
        res.status(201).json(response)
    } catch(e) {
        console.log(e)
        await T.rollback()
        res.status(500).json()
    }
})

todosRouter.patch('/:id', async(req, res) => {
    const T = await DB.instance.transaction()
    try {
        const todoOptions = {
            where: {
                id: req.params.id
            },
            transaction: T
        }
        const todo = await DB.Todos.findOne(todoOptions)
        if (!todo) throw Error
        const updateData = {
            status: !todo.status
        }
        const updateoptions = {
            where: {
                id: req.params.id
            },
            transaction: T
        }
        const response = await DB.Todos.update(updateData, updateoptions)
        await T.commit()
        res.status(201).json(response)
    } catch(e) {
        console.log(e)
        await T.rollback()
        res.status(500).json()
    }
})

todosRouter.delete('/:id', async(req, res) => {
    const T = await DB.instance.transaction()
    try {
        const options = {
            where: {
                id: req.params.id,
                uid: req.uid
            },
            transaction: T
        }
        const response = await DB.Todos.destroy(options)
        await T.commit()
        res.status(201).json(response)
    } catch(e) {
        await T.rollback()
        res.status(500).json()
    }
})

export { todosRouter }