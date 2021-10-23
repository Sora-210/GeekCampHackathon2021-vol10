import { QueryInterface, DataTypes } from "sequelize"
const queryProjectTable = {
    up: (QueryInterface:QueryInterface) => {
        return QueryInterface.createTable('Projects', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING
            },
            owner_uid: {
                allowNull: false,
                type: DataTypes.STRING
            },
            createAt: {
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
        return QueryInterface.dropTable('Projects')
    }
}

export { queryProjectTable }