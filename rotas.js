const app = require("./app");

app.get('/', (req, res) => {
    console.log('oi')
    res.send('oi')
} )
app.post('/sing-up', (req, res) => {
    console.log('oi')
    res.send('oi')
})
app.get('/' , search )