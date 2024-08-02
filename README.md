# suind-fe



This project is a Next.js application designed for managing and viewing drone information. It includes features for logging in, viewing drone details, and managing drone fleets.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running the Project Locally](#running-the-project-locally)
- [Running with Docker](#running-with-docker)


## Prerequisites

Before you begin, ensure you have the following installed on your device:

- **Node.js**: Version 16 or higher. [Download Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js or can be installed separately. [Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- **Docker**: Optional, but recommended for containerized deployments. [Install Docker](https://docs.docker.com/get-docker/)

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
2. Install Dependencies 
    npm install

Running the Project Locally


Start the Development Server
npm run dev

Build for Production
npm run build


Start the Production Server
npm start


Running with Docker

Build the Docker Image
docker build -t your-image-name .

Run the Docker Container
docker run -p 3000:3000 your-image-name
