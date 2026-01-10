📁 Project Setup
1️⃣ Initialize Project
npm init -y


📌 Use:
Creates package.json to manage dependencies, scripts, and metadata.

2️⃣ Install Core Dependencies
npm install express zod dotenv


📌 Use:

express → Web server & routing

zod → Runtime request validation

dotenv → Environment variables

3️⃣ Install Development Dependencies
npm install -D typescript ts-node nodemon @types/node @types/express


📌 Use:

typescript → Type safety

ts-node → Run TypeScript directly

nodemon → Auto-restart server

@types/* → Type definitions

⚙️ TypeScript Configuration
4️⃣ Initialize TypeScript
npx tsc --init


📌 Use:
Creates tsconfig.json to control TypeScript compilation.

📂 Recommended Folder Structure
src/
│── app.ts              # App entry point
│── server.ts           # Server startup
│── routes/             # Route definitions
│── middleware/         # Validation & error handling
│── schemas/            # Zod schemas
│── errors/             # Custom API errors
│── types/              # Shared TypeScript types


📌 Use:
Keeps code modular, scalable, and team-friendly.

▶️ Running the Application
5️⃣ Start Development Server
npm run dev


📌 Use:

Runs server using nodemon

Auto-reloads on file changes

6️⃣ Run Using ts-node (Manual)
npx ts-node src/server.ts


📌 Use:
Runs TypeScript without compiling to JavaScript.

7️⃣ Build for Production
npx tsc


📌 Use:
Compiles TypeScript into JavaScript (dist/ folder).

8️⃣ Start Production Server
node dist/server.js


📌 Use:
Runs compiled JavaScript for production.

📜 NPM Scripts

Add this to package.json:

"scripts": {
  "dev": "nodemon src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}


📌 Use:

npm run dev → Development

npm run build → Compile

npm start → Production

🧪 API Testing
9️⃣ Test Endpoints (Example)
curl -X POST http://localhost:3000/redeem \
-H "Content-Type: application/json" \
-d '{"customerId":"uuid","points":100}'


📌 Use:
Manually test API behavior & validation.

❗ Common Commands Summary (Quick Look)
Command	Purpose
npm init -y	Create project
npm install express	Install Express
npm install -D typescript	Add TypeScript
npx tsc --init	Create tsconfig
npm run dev	Run dev server
npx tsc	Build project
node dist/server.js	Run production
🎯 Key Takeaways

✔ Express handles requests & responses
✔ TypeScript ensures compile-time safety
✔ Zod validates runtime data
✔ Nodemon improves development speed
✔ Clean scripts = professional workflow

🧠 Interview One-Liner

I initialize the project with npm, install Express for routing, TypeScript for safety, Zod for runtime validation, and use ts-node with nodemon for development. The project is built using tsc and run in production with Node.