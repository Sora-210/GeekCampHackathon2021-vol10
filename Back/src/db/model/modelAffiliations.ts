import { Model, DataTypes } from 'sequelize'
import { dbInstance } from '../instance'

class Affiliations extends Model {
    public uid: string
    public project_id: number
    public readonly createAt: Date
    public readonly updatedAt: Date
}

Affiliations.init({
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
},{
    sequelize: dbInstance,
    timestamps: true
})

export { Affiliations }