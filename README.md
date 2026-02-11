# 🚀 Version Control System (GitHub Clone)
GitHub Clone – A full-stack MERN application that replicates core GitHub features including authentication (JWT), repository creation, search, profile management, and activity heatmap. Deployed with AWS Amplify (frontend) and EC2 (backend) using MongoDB Atlas.

---

## 🌐 Live Links

- 🔗 Frontend (AWS Amplify): https://main.d37y4f57y4w6ph.amplifyapp.com/
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f7dce271-2416-4cde-9ebd-8302c73f84da" />


---

## 🛠 Tech Stack

### Frontend
- React.js
- Fetch API
- CSS
- AWS Amplify (Deployment)

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- CORS Configuration
- Render / AWS EC2 Deployment

---

## ✨ Features

- 🔐 User Signup & Login (JWT Authentication)
- 📦 Create & Manage Repositories
- 👤 Fetch User-Specific Repositories
- 🌍 RESTful API Architecture
- ⚙️ Environment-based Configuration
- ☁️ Cloud Deployment (Frontend + Backend)
- Custom CLI built using Yargs
- S3 integration for commit push functionality

---

## 📁 Project Structure
version-control-system/
│
├── frontend/
└── backend/


---

## ⚙️ Local Development Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/your-repository-name.git
cd your-repository-name

cd backend
npm install


PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

npm start st
