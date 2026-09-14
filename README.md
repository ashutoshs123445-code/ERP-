# DJPS School ERP — Firebase Edition

## Firebase project
This version is configured for the Firebase Web project supplied by the user:
`djps-school`

## Enable before first use
1. Firebase Console → Authentication → Sign-in method → enable **Email/Password**.
2. Firebase Console → Firestore Database → create a database.
3. Publish `firestore.rules`.
4. The first admin profile must be created once in Firestore under `profiles/{AUTH_UID}` with fields:
   - `fullName`
   - `email`
   - `role: "admin"`
   - `schoolCode: "DJPS"`
5. Create classes from the admin dashboard. Then create students/teachers; the admin dashboard creates their Firebase Auth account and profile.

## Important
The Firebase Web API key is intended for client-side Firebase configuration. Do not add a Firebase Admin SDK/service-account private key to these HTML files.

## Testing
The HTML files are plain module-based Firebase web pages. Serve the folder through a local/static web server (not `file://`) so ES modules and Firebase Auth work correctly.
