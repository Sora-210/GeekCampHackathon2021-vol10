import { Sequelize } from 'sequelize'
const dbInstance = new Sequelize({
    "username": "root",
    "password": "pass",
    "database": "taskchecker",
    "host": "db",
    "dialect": "mysql"
})
export { dbInstance }