const express = require('express')
const app = express()
const port = 3000
const routenav = require('./router/routeNavigation')

app.get('/greeting', (_, res) => {
  res.status(200).json({
    message: 'Hello World!',
    commit_id: `${process.env.CI_COMMIT || 'latest'}`
  })
})

app.use(express.json())
app.use('/', routenav)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

