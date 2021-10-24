//Import
import { Sequelize } from 'sequelize'
import { queryAffiliationTable } from './migrationAffiliations'
import { queryProjectTable } from './migrationProjects'
import { queryTodoTable } from './migrationTodos'

//すべてのテーブルを作成
const allMigrationUp = function(instance:Sequelize) {
    queryAffiliationTable.up(instance.getQueryInterface())
    queryProjectTable.up(instance.getQueryInterface())
    queryTodoTable.up(instance.getQueryInterface())
}

//すべてのテーブルを削除
const allMigrationDown = function(instance:Sequelize) {
    queryAffiliationTable.down(instance.getQueryInterface())
    queryProjectTable.down(instance.getQueryInterface())
    queryTodoTable.down(instance.getQueryInterface())
}

//########################
export {
    allMigrationUp,
    allMigrationDown,
    queryProjectTable,
    queryAffiliationTable,
    queryTodoTable
}