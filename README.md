# Saurabh Tiwari - Developer Portfolio

This is a Next.js-powered, modern developer portfolio website for Saurabh Tiwari. The content is dynamically managed through Firebase Firestore, and it's built for performance, accessibility, and SEO.

![Portfolio Screenshot](https://picsum.photos/seed/portfolio/1200/600)

## Features

- **Blazing Fast:** Built with Next.js App Router and Server Components.
- **Dynamic Content:** Projects, experience, and profile info managed in Firestore.
- **Responsive Design:** Looks great on all devices, from mobile to desktop.
- **Light & Dark Mode:** Theme toggling with persistence in `localStorage`.
- **SEO Optimized:** Dynamic metadata, `sitemap.xml`, `robots.txt`, and JSON-LD schema.
- **PWA Ready:** Includes a web app manifest for installation on devices.
- **Contact Form:** Saves messages directly to a Firestore collection.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [Shadcn/UI](https://ui.shadcn.com/)
- **Database:** [Firebase Firestore](https://firebase.google.com/docs/firestore)
- **File Storage:** [Firebase Storage](https://firebase.google.com/docs/storage) (for resume PDF)
- **Hosting:** [Firebase Hosting](https://firebase.google.com/docs/hosting) or Vercel
- **Forms:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- A Firebase project

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd saurabh-tiwari-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Firebase

1.  Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2.  In your project, go to **Project settings** > **General**.
3.  Under "Your apps," click the **Web** icon (`</>`) to add a new web app.
4.  Give it a name and register the app.
5.  You will be given a `firebaseConfig` object. You'll need these values for your environment variables.
6.  Enable **Firestore Database** and **Storage** in the console.

### 4. Configure Environment Variables

Create a file named `.env.local` in the root of your project and add your Firebase configuration. Use `.env.example` as a template.

```ini
# .env.local

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY="YOUR_API_KEY"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="YOUR_SENDER_ID"
NEXT_PUBLIC_FIREBASE_APP_ID="YOUR_APP_ID"
```

### 5. Seed Firestore Database (Optional)

The application can run with mock data out of the box. To use live data from Firestore, you need to populate your database.

1.  In the Firebase Console, go to your **Firestore Database**.
2.  Create collections: `meta`, `skills`, `experience`, `projects`.
3.  The data structures are defined in `src/lib/types.ts`, and sample data is available in `src/lib/data.ts`.
4.  Manually add documents to your collections based on these structures.
    *   For the `meta` collection, create a document with the ID `profile`.
5.  To switch from mock data to live data, modify the functions in `src/lib/portfolio-service.ts` to fetch from Firestore instead of the local data file.

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This app is configured for deployment on Firebase App Hosting.

1. Install the Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Log in to Firebase:
   ```bash
   firebase login
   ```
3. Initialize App Hosting:
    ```bash
    firebase apphosting:backends:create
    ```
    Follow the prompts.

4. Deploy the app:
   ```bash
   firebase deploy --only apphosting
   ```

Alternatively, you can deploy to Vercel or any other Next.js-compatible hosting provider.
