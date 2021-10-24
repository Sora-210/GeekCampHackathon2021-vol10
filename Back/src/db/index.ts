//Import
import { dbInstance } from './instance'
//model
import { Todos } from './model/modelTodos'
import { Projects } from './model/modelProjects'
import { Affiliations } from './model/modelAffiliations'
//#######################################################
const DB = {
    instance: dbInstance,
    Todos: Todos,
    Projects: Projects,
    Affiliations: Affiliations
}

export {
    DB
}