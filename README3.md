How to Run This Project (From Scratch)
1️⃣ Prerequisites

Make sure Node.js is installed:

node -v
npm -v

2️⃣ Install Dependencies

From the project root:

npm install express

3️⃣ Start the Server
node app.js


Expected output:

Server running at http://localhost:3000

🌐 Available API Endpoints
🟢 Get all products
GET /products


Status: 200 OK

🟢 Get product by ID
GET /products/:id


Status: 200 OK | 404 Not Found

🟡 Add a new product
POST /products


Request Body (JSON):

{
  "name": "Milk",
  "price": 3.5,
  "inStock": true
}


Status: 201 Created | 400 Bad Request

🔵 Replace entire product
PUT /products/:id


Status: 200 OK | 400 Bad Request | 404 Not Found

🟣 Update only product price
PATCH /products/:id/price


Request Body:

{
  "price": 2.0
}


Status: 200 OK | 400 Bad Request | 404 Not Found

🔴 Delete a product
DELETE /products/:id


Status: 204 No Content | 404 Not Found

📊 HTTP Methods & Status Codes Used
Method	Purpose	Status Codes
GET	Read data	200, 404
POST	Create data	201, 400
PUT	Replace data	200, 400, 404
PATCH	Partial update	200, 400, 404
DELETE	Remove data	204, 404