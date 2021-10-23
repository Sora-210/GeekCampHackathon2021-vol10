import { QueryInterface, DataTypes } from "sequelize"
const queryAffiliationTable = {
    up: (QueryInterface:QueryInterface) => {
        return QueryInterface.createTable('Affiliations', {
            uid: {
                allowNull: false,
                type: DataTypes.STRING
            },
            project_id: {
                allowNull: false,
                type: DataTypes.INTEGER
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
        return QueryInterface.dropTable('Affiliations')
    }
}

export { queryAffiliationTable }