import { Model, DataTypes } from 'sequelize'
import { dbInstance } from '../instance'
import { Affiliations } from './modelAffiliations'

class Projects extends Model {
    public readonly id: number
    public name: string
    public owner_uid: string
    public readonly createdAt: Date
    public readonly updatedAt: Date
}

Projects.init({
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

export { Projects }