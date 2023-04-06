This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This apps purpose is to fix spotify's lack of social connection ability. With spotifind you can find new music, find users with similar
music interests, share location with users, chat with users and more.

Built with [Kai](https://github.com/Likai-L) and [Justin](https://github.com/CorgiOnNeptune) for our final project at [Lighthouselabs](https://www.lighthouselabs.ca/en/web-development)

Built with NextJS, TailindCSS, and Prisma

API's used: Spotify API,
            ChatEngine,
            Leaflet,
            Musixmatch API
            
            
# Screenshots

## Landing Page
![Spotifind landing page](https://github.com/larsyaeger/spotifind/blob/main/public/images/Screenshots/Screenshot%202023-04-06%20at%2008.38.09.png "Landing page")

## Now Playing
Volume slider for song previews, shows a now playing song if your linked spotify account is currently playing music. Shows lyrics, your account picture and name, and recent likes. Buttons to view comments made on that song and to view people currently listening to that track.

![Spotifind now playing page](https://github.com/larsyaeger/spotifind/blob/main/public/images/Screenshots/Screenshot%202023-04-06%20at%2008.39.11.png "Now playing page")

### Comments page
![Spotifind comments page](https://github.com/larsyaeger/spotifind/blob/main/public/images/Screenshots/Screenshot%202023-04-06%20at%2008.40.18.png "Comments page")

### Search for a song
![Spotifind search function](https://github.com/larsyaeger/spotifind/blob/main/public/images/Screenshots/Screenshot%202023-04-06%20at%2008.42.25.png "Search for a song")

## Find users by song
If any Spotifind user is currently listening to this track they'll appear here with their location (if they've accepted to share) and a button to message them.

![Spotifind people function](https://github.com/larsyaeger/spotifind/blob/main/public/images/Screenshots/Screenshot%202023-04-06%20at%2008.42.25.png "Search for a song")

## Chat page
Powered by chat engine, able to start a chat by searching for users directly or if you find them based on a song you searched for/are listening to.
Able to send media, start groupchats, and there's realtime typing ...'s

![Spotifind chat page](https://github.com/larsyaeger/spotifind/blob/main/public/images/Screenshots/Screenshot%202023-04-06%20at%2008.42.33.png "People page")
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
