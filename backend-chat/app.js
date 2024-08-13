import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router as userRoutes } from './routes/userRoutes.js'
import { router as chatRoutes } from './routes/chatRoutes.js'
import { authenticate, syncUp } from './config/database.js'
import { envs } from './config/environments/environments.js'

const app = express();
const port = envs.PORT || 3000;

app.use(cors());
app.use(express.json());

async function main() {
    try {
        await authenticate()
        await syncUp()
    } catch (error) {
        console.log(error)
    }
}

main()

app.use('/api/users', userRoutes);
app.use('/api/chat', chatRoutes);






app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
