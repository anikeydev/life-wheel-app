import { DataTypes } from 'sequelize'
import sequelize from '../db.js'
import User from './User.js'

const TestResult = sequelize.define('TestResult', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey,
  },
  categories: {
    type: DataTypes.JSON,
    allowNull: false,
  },
})

TestResult.belongsTo(User, { onDelete: 'CASCADE' })

export default TestResult
