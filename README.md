# MedVision XR - AR/VR Medical Training Platform

Phase 1 foundation for a final-year mini project using WebXR.

## Current Status (Phase 1 Complete)
- Monorepo with separate frontend and backend apps
- Frontend route shell: Dashboard, Learn, Anatomy, AR Mode, VR Mode, 360 Scene, Login
- Backend TypeScript API skeleton with JWT auth endpoints
- MongoDB connection and environment validation

## Tech Stack
- Frontend: React + TypeScript + Vite + React Router + Three.js ecosystem
- Backend: Node.js + Express + TypeScript + MongoDB + JWT + Zod

## Project Structure
- `frontend/` - Web app (UI, routes, upcoming 3D/AR/VR modules)
- `backend/` - API server (auth, progress tracking, modules, quiz APIs)

## Local Setup
### 1) Prerequisites
- Node.js 18+
- npm
- MongoDB running locally on `mongodb://127.0.0.1:27017`

### 2) Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs at `http://localhost:5173`

### 3) Backend
```bash
cd backend
npm install
npm run dev
```
Backend runs at `http://localhost:5000`

### 4) Health Check
Open:
- `http://localhost:5000/api/health`

## Auth API (Phase 1)
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me` (Bearer token required)

## Notes
- Use `.env.example` files in `frontend/` and `backend/` as templates.
- Real ARCore/WebXR AR, VR mode, anatomy interactions, blood flow, and learning modules are implemented in upcoming phases.

## Next Phase
Phase 2 starts with interactive 3D heart anatomy viewer:
- model loading
- rotate/zoom/pan
- selectable parts with labels/info panel
- hover/click highlight animations
