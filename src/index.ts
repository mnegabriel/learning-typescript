import express from 'express'
import createUser from './services/CreateUser'

const app = express()

app.get( '/', (request, respose) => {
    const user = createUser({
        email: 'gabrielmd123@gmail.com', 
        password: '123456',
        techs: [ 
            'NodeJs', 
            'ReactJs', 
            'React Native',
            { name: 'Javascript', level: 89 }
        ]
})
    return respose.json({ message: "hello world!"})
})

app.listen(3333)


