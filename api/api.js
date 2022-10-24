import express from 'express';

const api = express()

api.get('/status', (_,res) => {
    res.json({
        msg: 'api en linea'
    })
})

export default api;