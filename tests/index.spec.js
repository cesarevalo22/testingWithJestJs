import app from '../src/app'
import request from 'supertest'

describe('GET /tasks', () => {
    test('should respond with  a 200 status code', async () => { 
        const response = await request(app).get('/task').send()
        expect(response.statusCode).toBe(200)
    })
    test('should response with an array', async() =>{
        const response = await request(app).get("/task").send()
        expect(response.body).toBeInstanceOf(Array)
    })
})

describe('POST /task', () =>{
    //should respond with a 200 status 
    test('should respond with a 200 status code', async() => {
        const response = await request(app).post('/task').send()
        expect(response.statusCode).toBe(200)
     })
//should respond with a content-type of aplication json
     test('should have a content-type: aplication/json in the header', async ()=>{
        const response = await request(app).post('/task').send()
        expect(response.headers['content-type']).toEqual(
            expect.stringContaining('json')
        )
     })

     test('answer should  content an id', async ()=>{
        const response = await request(app).post('/task').send({
            title: "testTask",
            description:" testTaskDescription"
        })
        expect(response.body.id).toBeDefined();
        
     })
//should respond with a jsson object containing new task with an id
})
