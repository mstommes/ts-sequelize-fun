//@/main.ts
import "reflect-metadata"
import express, {Request, Response} from "express"
import connection from "./connection"
import Dog from "./models"

const app = express()
const PORT = 3000
app.use(express.json())

app.get("/", (req: Request, res: Response): Response => {
   return res.json({message: "Sequelize Example"})
})

app.get("/dogs", async (req: Request, res: Response): Promise<Response> => {
    const allDogs: Dog[] = await Dog.findAll();
    return res.status(200).json(allDogs);
  });
const start = async (): Promise<void> => {
    try{
        await connection.sync()
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`)
        })
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}
void start()