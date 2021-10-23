import { Model, DataTypes } from 'sequelize'
import { dbInstance } from '../instance'

class Affiliations extends Model {
    public id: number
    public uid: string
    public project_id: number
    public readonly createdAt: Date
    public readonly updatedAt: Date
}

Affiliations.init({
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
},{
    sequelize: dbInstance,
    timestamps: true
})

export { Affiliations }