import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "postgres",
  entities: []
})

AppDataSource.initialize().then(() => {
  console.log('[Database] Database is running')
}).catch(err => {
  console.log('[Database] Error during Data Source initialization', err)
})