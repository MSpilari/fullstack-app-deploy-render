# Fullstack Application with React, Spring Boot, PostgreSQL, and Docker

## Overview

This project is a fullstack web application built using:

- **Frontend**: Vite with React and Typescript
- **Backend**: Spring Boot
- **Database**: PostgreSQL
- **Deployment**: Docker containers hosted on [Render](https://render.com/)

The goal is to demonstrate how to build a full-featured web application, from development to deployment.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Technologies](#technologies)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Running the Project Locally](#running-the-project-locally)
6. [Running Project on Docker](#running-the-project-on-docker)

---

## Project Structure

```bash
.
├── frontend/               # React frontend
│   ├── public/
│   ├── src/                # React components and pages
│   ├── Dockerfile          # Dockerfile for React
│   └── package.json        # React dependencies
├── backend/                # Spring Boot backend
│   ├── src/                # Java code for APIs and services
│   ├── Dockerfile          # Dockerfile for Spring Boot
│   └── pom.xml             # Maven dependencies
├── docker-compose.yaml      # Docker Compose file to manage multi-container application
└── README.md               # Project documentation
```

---

## Technologies

- **Frontend**: React, Typescript
- **Backend**: Spring Boot, Maven
- **Database**: PostgreSQL, Neon Database
- **Containerization**: Docker, Docker Compose
- **Deployment**: Render

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**, currently using v.20
- **Java**, currently using v.21
- **Maven**
- **Docker**
- **Docker Compose**

---

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/MSpilari/fullstack-app-deploy-render.git
cd fullstack-app-deploy-render
```

### 2. Install frontend dependencies:

```bash
cd frontend
npm install
```

### 3. Install backend dependencies:

```bash
cd ../backend
mvn clean install
```

---

## Running the Project Locally

### 1. Running the frontend:

```bash
cd frontend
npm run dev
```

The frontend will be accessible at `http://localhost:5173`.

### 2. Running the backend:

```bash
cd backend
mvn spring-boot:run
```

The backend will be accessible at `http://localhost:8080`.

---

## Running the project on Docker

This project includes a `docker-compose.yaml` file to manage the frontend, backend and Postgres database.

### 1. Build and run the containers:

```bash
docker-compose up -d --build
```

### 2. Access the application:

- Frontend: `http://localhost:9090`
- Backend: `http://localhost:8080`
- PostgreSQL: `localhost:5432` (default username: `user`, password: `1234`)

### 3. Stopping the containers:

```bash
docker-compose down
```

---
