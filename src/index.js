const express = require('express')

const v1Router = require('./v1/routes')

const v1WorkoutRouter = require('./v1/routes/workoutRoutes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// testing purpose endpoint

app.get('/', (req, res) => {
    res.send("<h2>It's working!</h2>")
})

app.use("/api/v1", v1Router)

app.use('/api/v1/workouts', v1WorkoutRouter)

app.listen(PORT, () => {
    console.log(`Api is listning on port ${PORT}`)
})

