//@/connection.ts

import { Sequelize } from "sequelize-typescript"
import Dog from "./models"

//NORMALLY THESE ITEMS WOULD BE STORED IN AN ENV FILE BUT THEY ARE ONLY FOR LOCAL SETUP AND NOT FOR A DEPLOYED SERVER
//*************************DO NOT PUSH ACTUAL SECRETS TO GITHUB IF USING WITH A REAL SERVER ****************//

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