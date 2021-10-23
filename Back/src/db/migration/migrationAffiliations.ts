import { QueryInterface, DataTypes } from "sequelize"
const queryAffiliationTable = {
    up: (QueryInterface:QueryInterface) => {
        return QueryInterface.createTable('Affiliations', {
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
        return QueryInterface.dropTable('Affiliations')
    }
}

export { queryAffiliationTable }