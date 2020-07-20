import express from 'express'
import createUser from './services/CreateUser'

const app = express()

app.get( '/', (request, respose) => {
    const user = createUser('Gabriel', 'gabrielmd123@gmail.com', '123456')
    return respose.json({ message: "hello world!"})
})

app.listen(3333)


