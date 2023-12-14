# fix tool

This tool tries to help you or a group of people solve problems.

It's like a Bug Tracker, which programmers have found helpful for decades, but adapted to solve "real world" problems.

## Core Functionality:

1. **Add problems you want to see solved**
   1. For each problem, add proposed solutions
      1. For each proposed solution, identify reasons it might work, fatal flaws, open questions
   2. Specify which group of people is affected by the problem.

### I want help thinking through:

1. What are the highest priority problems I can solve?
2. Which of these problems actually have actionable solutions & paths forward?
3. Which solutions are the most promising? What are actionable next steps?
4. What are the flaws in solutions commonly proposed?
5. Which problems are blocked by other problems? And the reverse: by solving which problems, which other problems does that unblock?
6. Can I quickly get other people up to speed on my understanding of the problem?
7. If I have a proposed solution to a big problem, how can I effectively reach many of the people who care about it?
8. When do I think this will be solved?
9. How much would it cost to solve (various proposals)? [help me fundraise, collect kickstarter-style pledges]
10. How much $ would I be willing to pay if I could press a button and have this solved?

I would expect a fully formed version of this tool to answer all the above questions.

## Local Development: Clone and run locally

1. You'll first need a Supabase project which can be made [via the Supabase dashboard](https://database.new)

2. Create a Next.js app using the Supabase Starter template npx command

   ```bash
   npx create-next-app -e with-supabase
   ```

3. Use `cd` to change into the app's directory

   ```bash
   cd name-of-new-app
   ```

4. Rename `.env.local.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

5. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   The starter kit should now be running on [localhost:3000](http://localhost:3000/).

> Check out [the docs for Local Development](https://supabase.com/docs/guides/getting-started/local-development) to also run Supabase locally.
