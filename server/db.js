import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: 5001,
    dialect: 'postgres',
    logging: false,
  }
)

;(async () => {
  try {
    await sequelize.authenticate()
    console.log('Postgres connected')
  } catch (e) {
    console.error('Connected filed', e)
  }
})()

export default sequelize
