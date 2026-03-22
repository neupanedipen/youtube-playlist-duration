# 🎬 YouTube Playlist Length Calculator

A modern web app built with **Next.js + TypeScript + Tailwind CSS** that calculates the total duration of any YouTube playlist — including playback speeds and average video length.

## ✨ Features

- 🔗 Paste any YouTube playlist URL
- ⏱️ Total playlist duration
- ⚡ Duration at different speeds (1x → 2x)
- 📊 Average video duration
- 🎨 Clean, responsive UI
- 🔒 API key secured on server (Next.js API route)

---

## 🛠️ Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Heroicons
- YouTube Data API v3
- Moment.js

---

## 🚀 Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/youtube-playlist-length.git
cd youtube-playlist-length
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables
Create a `.env` file in the root:

```bash
YOUTUBE_API_KEY=your_youtube_api_key_here
```

### 4. Run the development server

```bash
YOUTUBE_API_KEY=your_youtube_api_key_here
```

## 📁 Project Structure
```bash
src/
  app/
    page.tsx
    api/playlist-duration/route.ts
  components/
    HeroSection.tsx
    PlaylistForm.tsx
    LoadingCard.tsx
    ResultsGrid.tsx
    Footer.tsx
```


