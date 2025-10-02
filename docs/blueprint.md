# **App Name**: Saurabh Tiwari Portfolio

## Core Features:

- Profile Data Management: Allows admin to update profile information (name, title, location, about, contact info, resume link) stored in Firestore.
- Project Showcase: Displays a filterable grid of projects fetched from Firestore, each with title, summary, technologies used, and links. Includes detail modals/routes with more in-depth information.
- Experience Timeline: Generates a timeline of Saurabh Tiwari's professional experience, pulling data (company, role, dates, bullets, links) from Firestore.
- Contact Form with Submission: Enables visitors to send messages. Submissions are stored in a 'messages' collection in Firestore, triggering a tool for future processing (e.g., sending a notification email via Cloud Functions).
- Admin Panel: Provides a password-protected admin interface for CRUD operations on projects, experience, skills, and blog content stored in Firestore.
- Resume Download: Enables visitors to download Saurabh Tiwari's resume, pulling the resume URL from Firestore/Storage.
- Dynamic SEO Management: Updates website metadata, including the site title, using Firestore. This allows easy modification of the information used to improve search engine optimization.

## Style Guidelines:

- Primary color: Indigo (#6366F1) for a professional and modern look, reflecting Saurabh's expertise.
- Background color: Light gray (#F4F4F5), almost white, to provide a clean backdrop that highlights the indigo elements.
- Accent color: Slate (#475569) is used to highlight the most important parts of the portfolio, such as names, and calls to action.
- Body and headline font: 'Inter' (sans-serif) for a clean, readable, and modern aesthetic.
- Use Font Awesome icons for a consistent and scalable vector-based icons. Icons will be a lighter shade of the primary color.
- Emphasize whitespace and maintain a consistent structure across all pages. Use a grid system (Tailwind's grid) to ensure responsiveness and a balanced design.
- Incorporate subtle micro-interactions on hover and click events. Use animations sparingly to enhance user experience without being distracting.