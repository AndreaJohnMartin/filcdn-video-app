## 🎥 FilCDN Video Streaming App

A decentralized video upload and streaming application built for the **PLGenesis Hackathon** under the **FilCDN** category.

## 🚀 Overview

This application allows users to upload video files that are:

- ✅ Stored on Filecoin via **Lighthouse's PDP deals**
- ✅ Served via **FilCDN for fast delivery**
- ✅ Streamable directly from IPFS

## 💡 Features

- Upload video from browser
- Automatically uploads via Lighthouse SDK
- Enables CDN delivery via IPFS gateway
- Displays CID and streaming link
- Preview video within the page

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Backend**: Node.js, Express, Multer
- **Storage**: Filecoin (via [Lighthouse](https://lighthouse.storage))
- **CDN**: FilCDN (enabled in upload config)

## 📸 Demo Screenshots

> ![Output Demo - 1](https://github.com/user-attachments/assets/4a0bdda7-04fa-4e4c-b190-b54f3e4ef2dc)
> ![Output Demo - 2](https://github.com/user-attachments/assets/f7a640c4-fd23-4772-8a84-117c933db2ee)
 
Example:

## 🔗 Live Preview
> file:///C:/Projects/filcdn-video-app/index.html

## 📦 Local Setup
# Clone the repo
git clone https://github.com/AndreaJohnMartin/Blockchain_Internship.git
cd Blockchain_Internship/filcdn-video-app

# Install dependencies
npm install

# Start the server
node index.js

# Open index.html in your browser
✅ Lighthouse Upload API Setup
API Key is required from Lighthouse Dashboard

Enabled CDN in upload parameters
enableCDN: true

📁 Folder Structure
filcdn-video-app/
├── index.html          # Frontend UI
├── index.js            # Express backend for file upload
├── upload-test.js      # (optional) standalone test
├── uploads/            # Temporary storage (auto-deleted)
└── package.json

🏆 Submission
✅ Submitted under FilCDN Category

✅ Meets all requirements:

PDP storage deal ✅

FilCDN enabled ✅

End-to-end demo working ✅

👤 Author
Andrea John Martin
[GitHub](https://github.com/AndreaJohnMartin)
