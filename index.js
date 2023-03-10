const { json } = require('express')
const express = require('express')

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

const students = [
    'AGebn',
    'tpeterec',
    'amrioss',
    'BlakesHere',
    'kittbg',
    'calebbeam',
    'ImRlyNewHereSry',
    'DanielPurdy509',
    'Kennedyz71',
    'DessertWarrior',
    'israr2468',
    'jacobrphillips',
    'joegor85',
    'jordan-carlson99',
    'josh-benton',
    'joshuastew',
    'jrm0527',
    'Spirit1269',
    'MDrevon',
    'cnickbradford',
    'ranegray',
    'TDow520',
    'Rusty12321',
    'tech-n-code',
    'legacyunlimited',
]
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// GET /students - send back all students as json
app.get('/students', (req, res) => {
    res.send(students)
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
