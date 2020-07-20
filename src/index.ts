import express from 'express'

const app = express()

app.get( '/', (request, respose) => {
    return respose.json({ message: "hello world!"})
})

app.listen(3333)


