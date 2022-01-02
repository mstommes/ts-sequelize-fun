//@/connection.ts

import { Sequelize } from "sequelize-typescript"
import Dog from "./models"

const connection = new Sequelize({
    dialect: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "localmariadb",
    logging: false,
    models: [Dog],
})

export default connection