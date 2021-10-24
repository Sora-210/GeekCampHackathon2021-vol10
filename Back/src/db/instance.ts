import { Sequelize } from 'sequelize'
import { allMigrationUp } from './migration/migrationAll'
const dbInstance = new Sequelize({
    "username": "root",
    "password": "pass",
    "database": "taskchecker",
    "host": "db",
    "dialect": "mysql"
})

//Migration
allMigrationUp(dbInstance)

export { dbInstance }