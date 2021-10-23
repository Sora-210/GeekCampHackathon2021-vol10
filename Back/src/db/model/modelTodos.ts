import { Model, DataTypes } from 'sequelize'
import { dbInstance } from '../instance'

class Todos extends Model {
    public readonly id: number
    public uid: string
    public readonly project_id: string
    public status: boolean
    public content: string
    public period: Date
    public readonly createAt: Date
    public readonly updatedAt: Date
}

Todos.init({
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

export { Todos }