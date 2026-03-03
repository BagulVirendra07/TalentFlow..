<div align="center">

# ⚡ TalentFlow

### A Modern Applicant Tracking System (ATS)

*Built with React · Powered by Dexie.js (IndexedDB) · Zero Backend Required*

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://reactjs.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)

</div>

---

## 📸 Screenshots

### 🏠 Dashboard
> Welcome screen with live KPIs, recent candidates, active jobs, pipeline overview, and hiring health

![Dashboard](screenshots/dashboard.png)

---

### 💼 Job Openings
> Browse and manage all open positions — searchable, filterable, drag-to-reorder

![Jobs](screenshots/jobs.png)

---

### 👥 Candidates List
> Full candidate table with smart filtering, sorting, stage badges, and star ratings

![Candidates](screenshots/candidates.png)

---

### 🗂 Kanban Pipeline Board
> Drag-and-drop candidates across 5 hiring stages in a visual Kanban board

![Kanban Board](screenshots/kanban.png)

---

### � Candidate Profile
> Deep-dive into any candidate — contact info, skills, timeline, notes, and stage controls

![Candidate Profile](screenshots/candidate-profile.png)

---

### 🧠 Assessment Builder
> Create and manage custom screening assessments with multiple question types

![Assessments](screenshots/assessments.png)

---

### 📊 Analytics Dashboard
> Visual analytics — pipeline breakdown, department metrics, offer rate, conversion rate

![Analytics](screenshots/analytics.png)

---

### ⌨️ Spotlight Search (Ctrl+K)
> Instant global search across all jobs and candidates with keyboard shortcuts

![Spotlight Search](screenshots/spotlight.png)

---

### 🌙 Light Mode
> Full dark/light theme toggle stored in localStorage

![Light Mode](screenshots/light-mode.png)

---

## ✨ Features

### 🏠 Dashboard
- **Live KPI cards** — Total Jobs, Candidates, Hired, Assessments (all clickable)
- **Recent Candidates** panel with stage badges
- **Active Jobs** panel with quick-links
- **Pipeline Overview** bar chart (Applied → Hired)
- **Quick Actions** — shortcuts to every core feature
- **Hiring Health** — Excellent/Good/Needs Attention status, conversion rate, offer rate

### 💼 Job Management
- Create, edit, and delete job postings with full details (title, department, location, type, tags, description)
- **Drag-to-reorder** job cards with persistent ordering
- **Search** across title, department, location, and tags
- **Filter** by status (Active / Draft / Archived) and department
- **Pagination** with smart page buttons
- **Job Detail** page with candidate pipeline stats and per-job candidate table

### 👥 Candidate Management
- **List view** — sortable table with name, email, stage, rating, source, skills, applied date
- **Kanban board** — drag candidates between 5 pipeline stages
- **Candidate Profile** — 3-tab view (Overview · Timeline · Notes)
  - Click-to-move stage selector
  - ⭐ Star rating widget (1–5 stars)
  - Add timestamped notes
  - Full activity timeline
  - Edit profile in a modal
- Add candidates via form with full validation
- Delete with confirmation toast

### 🧠 Assessments
- **Assessment Builder** — create unlimited assessments
- **4 question types**: Text, Multiple Choice, Rating Scale, Yes/No
- Expandable card UI — add/edit/delete questions inline
- **Runtime Form** — candidate-facing assessment with:
  - Progress tracker
  - Applicant info capture
  - Required field validation
  - Success confirmation screen
- Preview assessments before sending

### 📊 Analytics
- 8 KPI metric cards with color-coded icons
- **Candidate Pipeline** bar chart by stage
- **Jobs by Department** horizontal bar chart
- **Hiring Funnel** visualization
- Offer Rate & Conversion Rate live calculation

### 🔍 Spotlight Search (`Ctrl+K`)
- Global search across all Jobs and Candidates
- Real-time results with 250ms debounce
- **Quick Actions** when no query typed
- Keyboard shortcuts: `Ctrl+K` to open, `ESC` to close
- Results show stage/status badges

### 🔔 Notifications Bell
- Live activity feed from the local database
- Shows recent candidates and new job postings
- Relative timestamps ("6m ago", "2h ago")
- Click-through to candidate or job profile

### 🌙 Dark / Light Mode
- Premium **dark mode** by default (deep navy + indigo)
- Clean **light mode** with soft-indigo tones
- Toggle in the navbar — **persisted in localStorage**

---

## 🏗 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Routing | React Router v6 |
| State / Server State | TanStack React Query v5 |
| Local Database | Dexie.js (IndexedDB wrapper) |
| Drag & Drop | @hello-pangea/dnd · @dnd-kit/sortable |
| Icons | Lucide React |
| Styling | Vanilla CSS with CSS Custom Properties |
| Fonts | Inter · Plus Jakarta Sans (Google Fonts) |
| Notifications | Custom Toast Context (no libraries) |
| Theming | Custom ThemeContext with `data-theme` attribute |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 16
- **npm** ≥ 8

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/talentflow.git
cd talentflow

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

The app opens at **http://localhost:3000** (or 3001 if 3000 is in use).

> **No backend needed.** Everything runs in the browser using IndexedDB via Dexie.js. The database is automatically seeded with realistic demo data on first launch.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Jobs/
│   │   ├── JobsBoard.jsx        # Job listings with drag-to-reorder
│   │   ├── JobCard.jsx          # Individual job card component
│   │   ├── JobDetail.jsx        # Job detail page with pipeline stats
│   │   └── JobForm.jsx          # Create/edit job modal form
│   ├── Candidates/
│   │   ├── CandidatesList.jsx   # Candidates table view
│   │   ├── CandidatesBoard.jsx  # Kanban pipeline board
│   │   ├── CandidateProfile.jsx # Full candidate profile page
│   │   ├── CandidateCard.jsx    # Kanban card component
│   │   └── CandidateForm.jsx    # Add candidate modal form
│   ├── Assessments/
│   │   ├── Builder.jsx          # Assessment builder UI
│   │   └── RuntimeForm.jsx      # Candidate-facing assessment form
│   ├── Spotlight/
│   │   └── SpotlightSearch.jsx  # Global Ctrl+K search overlay
│   └── Navbar.jsx               # Top navigation bar
├── pages/
│   ├── Dashboard.jsx            # 🏠 Home dashboard
│   └── Analytics.jsx            # 📊 Analytics dashboard
├── context/
│   ├── ToastContext.jsx         # Global toast notifications
│   ├── ThemeContext.jsx         # Dark/light mode toggle
│   └── SpotlightContext.jsx     # Spotlight search state
├── hooks/
│   └── useApi.js                # All React Query hooks (CRUD)
├── db/
│   └── dexie.js                 # Database schema + seed data
├── App.jsx                      # Root routing + providers
├── index.js                     # React entry point
└── index.css                    # Global design system CSS
```

---

## 🗄 Database Schema

TalentFlow uses **IndexedDB** via Dexie.js — fully offline, fully persistent.

```
jobs          id, title, department, location, type, status, tags[], description, order, createdAt
candidates    id, name, email, phone, stage, source, skills, experience, rating, jobId, createdAt
timelines     id, candidateId, stage, notes, date, addedBy
notes         id, candidateId, text, createdAt
assessments   id, title, description, createdAt
questions     id, assessmentId, text, type, required, options[], order
submissions   id, assessmentId, candidateId, jobId, name, email, answers{}, submittedAt
```

---

## 🎨 Design System

TalentFlow uses a custom CSS design system with CSS Custom Properties:

```css
/* Core Colors */
--primary:        #6366f1  /* Indigo */
--secondary:      #8b5cf6  /* Violet */
--accent:         #06b6d4  /* Cyan */
--success:        #10b981  /* Emerald */
--warning:        #f59e0b  /* Amber */
--danger:         #ef4444  /* Red */

/* Backgrounds (dark mode) */
--bg-primary:     #0f1117
--bg-card:        #1e2433
--bg-elevated:    #252d3d
```

**Typography:** `Inter` for body text, `Plus Jakarta Sans` for headings.

**Animations:** `fadeIn`, `slideUp`, `slideInRight`, shimmer skeleton loaders, pulse dot, hover lifts.

---

## 🛠 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Starts dev server at http://localhost:3000 |
| `npm run build` | Builds optimised production bundle |
| `npm test` | Runs the test suite |

---

## 🧹 Reset Demo Data

If you want a fresh database (clear seeded data):

1. Open Chrome DevTools → **Application** tab
2. Go to **Storage → IndexedDB**
3. Delete `TalentFlowDB_v2`
4. Refresh the page — fresh seed data is automatically generated

---

## 📄 License

MIT © 2026 TalentFlow

---

<div align="center">
  <strong>Built with ❤️ using React + Dexie.js</strong><br/>
  <em>No backend. No cloud. Just your browser.</em>
</div>
