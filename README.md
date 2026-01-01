✅ Prerequisites

Make sure you have:

Node.js installed (v18+ recommended)

npm installed

Check versions:

node -v
npm -v

🚀 How to Run This Project (Step-by-Step)
1️⃣ Clone or Download the Project
git clone <your-repository-url>
cd greenfield-center


OR
Download the ZIP and extract it, then open the folder in VS Code.

2️⃣ Initialize Node Project (if not already done)
npm init -y

3️⃣ Install Dependencies
npm install express

5️⃣ Start the Server
node app.js


You should see:

Server running at http://localhost:3000

🌐 Test the Routes in Browser

Open your browser and visit:

URL	Description
http://localhost:3000
	Home page
http://localhost:3000/events
	Events list
http://localhost:3000/classes
	Classes list
http://localhost:3000/contact
	Contact info
🧪 Sample API Responses
/events
[
  "Yoga Class - Monday 7pm",
  "Gardening Workshop - Wednesday 5pm",
  "Book Club - Friday 6pm"
]

/contact
{
  "email": "info@greenfieldcenter.org",
  "phone": "555-123-4567"
}

📦 Serving Static Files

Place files inside the public/ folder.

Example:

public/logo.png


Access it in browser:

http://localhost:3000/logo.png

⚠️ Common Issues & Fixes
❌ Cannot find module 'express'

✔ Run:

npm install express

❌ npm run dev not working

✔ This project uses:

node app.js


(You can later add nodemon if needed)

🎯 Learning Outcome

After completing this case study, you will understand:

Why project structure matters

How to modularize Express routes

How to scale an Express app cleanly

How real-world teams organize backend projects

🧠 Next Improvements (Optional)

Add controllers folder

Add MongoDB models

Add error-handling middleware

Add environment variables using .env