//Import
import { Router } from 'express'
const projectsRouter:Router = Router()
//###################################################
/*
get / :所属プロジェクト一覧
post / :プロジェクト新規作成
delete / :プロジェクト削除
post /join : プロジェクトに参加
post /leave : プロジェクトから抜ける

*/

projectsRouter.get('/', (req, res) => {
    res.json(
        {
            "status":req.uid
        }
    )
})


//###################################################
export { projectsRouter }
//###################################################