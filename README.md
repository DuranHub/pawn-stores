# Pawn Store Ecommerce

## Requirements

- Node.js LTS
- npm
- Currently it has a SQLite database, so no need to install any database software.
- Git

## Tech Stack

- Prisma ORM [https://www.prisma.io/]
- Remix [https://remix.run/]
  - React
- Tailwind CSS [https://tailwindcss.com/]
- SQLite
- TypeScript

## Installation

1. Clone the repository

```bash
git clone
```

2. Install dependencies

```bash
npm install
```

3. Create the database

```bash
npx prisma db push
```

4. Generate Prisma Client

```bash
npx prisma generate
```

5. Start the development server

```bash
npm run dev
```

6. Open the browser and navigate to `http://localhost:3000`

## How To

### Update Database Schema

1. Update the schema in `prisma/schema.prisma`
2. Run the following command to push the changes to the database
   This can wipe out the data in the database, but it's okay for development and early stages of the project. Further we can use migrations.

```bash
npx prisma db push
```

3. Generate Prisma Client

```bash
npx prisma generate
```

After pushing the changes to the database, you can check the database using a SQLite client. The database file is located at `prisma/dev.db`.

## How to Contribute

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Push the changes to your fork
5. Create a pull request
6. Write a detailed description of the changes you made
   Where possible, provide screenshots or gifs to demonstrate the changes you made, especially for UI changes.
7. Wait for the review
8. Once the changes are approved, they will be merged into the main branch
9. That's it!
