# 🌍 WayFind — TravelStyle Matcher

A personalized travel destination recommendation system that helps users discover destinations based on their travel preferences, budget, duration, activities, climate, travel group, and preferred pace.

WayFind uses a server-side matching algorithm to calculate compatibility scores and rank destinations according to the user's travel style.

---

## ✨ Features

- 🧭 Personalized destination recommendations
- 💰 Budget-based matching
- 🏔️ Destination type preference
- 🌤️ Climate preference
- 🎯 Activity preference
- 🚶 Preferred travel pace
- 👨‍👩‍👧 Travel group selection
- 📅 Trip duration matching
- 📊 Match percentage for each destination
- 💾 Saved travel profiles
- 🔌 JSON API for destination data
- ❤️ Health-check endpoint with running commit ID
- 🐳 Dockerized application
- ✅ Automated testing
- 🔍 ESLint code quality checks
- ⚙️ GitHub Actions CI/CD
- 🚀 Automated deployment to Render

---

# 🎯 Problem Statement

Choosing a travel destination can be difficult because different travelers have different budgets, interests, preferred climates, travel groups, and activity preferences.

WayFind solves this problem by allowing users to describe their ideal trip and automatically matching their preferences against a collection of destinations.

The system calculates a compatibility score for each destination and presents the destinations in ranked order.

---

# 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | Backend web framework |
| EJS | Server-side rendering |
| JavaScript | Application logic |
| HTML/CSS | Frontend interface |
| Node.js Test Runner | Automated testing |
| ESLint | Code linting |
| Docker | Containerization |
| Git & GitHub | Version control |
| GitHub Actions | CI/CD |
| Render | Cloud deployment |

---

# 🏗️ System Architecture

```mermaid
flowchart LR

    U[User]

    U --> W[WayFind Web Application]

    W --> E[Express.js Server]

    E --> V[EJS Views]

    E --> M[Travel Matcher]

    M --> D[Destination Dataset]

    E --> API[/api/destinations]

    E --> H[/health]

    G[Git Push] --> GA[GitHub Actions]

    GA --> L[ESLint]

    L --> T[Automated Tests]

    T --> DB[Docker Build]

    DB --> S[Docker Health Smoke Test]

    S --> R[Render Deploy Hook]

    R --> LIVE[Live WayFind Application]