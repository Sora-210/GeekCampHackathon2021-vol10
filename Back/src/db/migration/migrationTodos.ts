import { QueryInterface, DataTypes } from "sequelize"
const queryTodoTable = {
    up: (QueryInterface:QueryInterface) => {
        return QueryInterface.createTable('Todos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            uid: {
                allowNull: false,
                type: DataTypes.STRING
            },
            project_id: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            status: {
                allowNull: false,
                type: DataTypes.BOOLEAN
            },
            content: {
                allowNull: false,
                type: DataTypes.STRING
            },
            periad: {
                allowNull: true,
                type: DataTypes.DATE
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE
            }
        })
    },
    down: (QueryInterface:QueryInterface) => {
        return QueryInterface.dropTable('Todos')
    }
}

export { queryTodoTable }