# nodejs-express-mongodb-101
Entry level back-end application with Nodejs, Express and MongoDB

GET: https://nodejs-messages-api-101.herokuapp.com/messages

POST: https://nodejs-messages-api-101.herokuapp.com/messages

GET: https://nodejs-messages-api-101.herokuapp.com/messages/:msgID

PUT: https://nodejs-messages-api-101.herokuapp.com/messages/:msgID

DELETE: https://nodejs-messages-api-101.herokuapp.com/messages/:msgID

Message schema:
```json
{
   title: {
      type: String
   },
   body: {
      type: String
   },
   created_date: {
      type: Date,
      default: Date.now
   }
}
```
