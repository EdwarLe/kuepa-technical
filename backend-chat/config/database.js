import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    logging: false,
});

export async function authenticate() {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully')
    } catch (error) {
        throw new Error('Error al autenticar: ', error)

    }
}

export async function syncUp() {
    try {
        await sequelize.sync()
        console.log('Connection has been established successfully')
    } catch (error) {
        throw new Error('Erro al sincronizar:', error)
    }
}

export default sequelize


