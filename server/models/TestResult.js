import { DataTypes } from 'sequelize'
import sequelize from '../db.js'
import User from './User.js'

const TestResult = sequelize.define('TestResult', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  categories: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  publicId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
})

TestResult.belongsTo(User, { onDelete: 'CASCADE' })

export default TestResult
