EHS 360 — HSE Platform
A comprehensive Health, Safety & Environment platform built as a lightweight single-page application with Supabase backend. Three integrated modules covering the complete safety lifecycle: induction, permits, and asset management.

Modules
Module
File
Purpose
Safety Induction	index.html	Visitor/contractor/employee onboarding with video training & assessments
Permits & Checklists	permits.html	Work permit lifecycle with categorized checklists & approval workflow
HSE Assets	assets.html	Asset inventory, inspection schedules, consumables, fire extinguisher management
Unified Login	login.html	Single entry point with role-based module routing & user management

Demo Credentials
Role
Username
Password
Access
Administrator	admin	admin123	All modules + configuration
Host Manager	manager1	pass123	Induction + Permits
Security Officer	security1	pass123	Induction (gate operations)
Supervisor	supervisor1	pass123	Permits
Safety Manager	safetymanager1	pass123	Assets + Induction
Safety Officer	safetyofficer1	pass123	Assets (inspections)

Inductees sign in with their registered mobile number — no password needed.

Features
Safety Induction
Profile-driven flows (Visitor / Contractor / New Employee)
Video packs with 200MB uploads (Supabase Storage)
Assessments with configurable pass mark & attempt limits
Visitor Pass — valid N days after induction (configurable, default 30)
Safety Passport — contractors, 180-day validity (configurable)
Lifetime Passport — new employees, no expiry
Returning visitor auto-approval within validity
Multi-day visits, group induction (2–15 persons)
Security gate: verify, check-in with PPE tracking, live duration, check-out
In-person induction workflow for groups
Permits & Checklists
Permit types: Hot Work, Confined Space, Electrical Isolation
Checklists categorized as start / hourly / end with approval tags
Approval workflow: Supervisor → Manager (self-approval option)
Person validation against induction records (passport validity check)
PPE & tools selection from admin-managed tables
Full lifecycle: Draft → Submitted → Approved → Active → Closed
HSE Asset Management
Asset inventory with categories, types, locations, shelf life
Inspection schedules (daily → annual) with checklist completion
Refill/replace schedules with auto-stock updates
Consumable management (issue/receive PPE)
Dedicated fire extinguisher management
Automatic alerts 7 days before any due date
Expiry & low-stock tracking
Tech Stack
Frontend: Vanilla HTML/CSS/JS (single-file modules, no build step)
Backend: Supabase (PostgreSQL + REST API + Storage + RLS)
Auth: Custom credential store (demo) — plant-scoped
Charts: Chart.js | QR Codes: qrcode.js
No external libraries for data — native fetch() to Supabase REST API
Setup
1. Create Supabase Project
Sign up at supabase.com and create a project
Get your Project URL and anon key from Settings → API
Replace them in each HTML file:
js

var SUPABASE_URL='https://YOUR-PROJECT.supabase.co';
var SUPABASE_ANON_KEY='YOUR_ANON_KEY';
2. Run Database Schema
Open SQL Editor in Supabase and run the setup scripts:

Core tables (users, profiles, plants, modules, video packs, visitors)
Permits tables (permit_types, checklists, permits, PPE, tools)
Assets tables (asset_categories, asset_types, assets, schedules, alerts)
3. Deploy to GitHub Pages
Push all HTML files to a GitHub repository
Settings → Pages → Deploy from main branch
Access at https://YOUR-USERNAME.github.io/REPO-NAME/
Or deploy to Netlify: drag the folder to app.netlify.com/drop

Project Structure
text

├── login.html      # Unified login + user/profile management (admin)
├── index.html      # Safety Induction module
├── permits.html    # Permits & Checklists module
├── assets.html     # HSE Asset Management module
├── README.md
└── test.html       # Connection diagnostic page
Database Schema (Key Tables)
text

users, profiles, plants, modules, vpacks, visitors, groups, audit,
notifications, config,
permit_types, checklist_templates, permits, permit_history,
ppe_items, tools,
asset_categories, asset_types, assets, inspection_schedules,
refill_schedules, asset_checklists, inspection_logs,
consumable_logs, asset_alerts
All tables have Row Level Security enabled with permissive policies for the anon key (demo mode).

Plant-Based Scoping
All data and workflows are scoped to the user's assigned plant. Users only see records, schedules, and assets belonging to their plant. Admin users can be assigned "All Plants" for cross-plant visibility.

Responsive Design
Mobile-first with drawer navigation
Bottom-sheet modals on phones
Custom dropdowns (viewport-safe on mobile)
Touch-friendly 44px+ targets
Horizontally scrollable tables with hidden columns on small screens
Security Notes (Production)
⚠️ This is a demo configuration:

Passwords stored in plaintext — migrate to Supabase Auth
RLS is permissive — implement role-based policies
Anon key exposed in frontend — acceptable for demo, harden for production
License
Internal demo project — all rights reserved.