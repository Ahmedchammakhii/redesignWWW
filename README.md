# WWW- Skip Selection Page Redesign

This is my redesign and recode of the "Choose Your Skip Size" page from the original website .I basically changed everything !!
here's why and how:

---

## Why I Redesigned It Completely

The original page was a single page application with too many **next** buttons and steps that made the UX a bit confusing. at some point, as a user, you kinda **loose** track of what you're doing or where you're at.
That's not great UX, especially for customers just trying to book a skip!

So I decided to make the skip selection experience:

- More **visuals**
- More **focused**
- More **premium-feeling**
- And easier to follow (i guess)

---

## What I Changed (and Why)

### 3D Skip Model
I added a 3D model of a skip right at the top. It’s animated and sits inside a marquee banner. 
it instantly tells the user: "Hey, this step is all about picking your skip." that way they don’t get lost or confused about what’s happening.

### Product Description Section
Right after the 3D model, there's a short and clean section to give a **brief** description of what the skips are for, and what they include.

### Stacked Skip Layout
Instead of a grid or pagination, I went with a **stacked scrolling layout** !! 
You just scroll down and see more skip sizes — it's fluid and super intuitive.

Each Container has:
- A subtle 3D feel
- Clean pricing
- Hire period
- Visual tag for road allowance or not

when you select one, the **colors invert** for clear feedback, and it gets pinned in the **navbar**, which shows your selection in a **minimalistic and clean** way !

### UI/UX Choices
- Color Palette: I used **light green** (commonly associated with recycling and eco stuff), **grey**, and **black**.
- Background: Dark grey with soft light-grey **dotted texture**, to make it feel more "recycle-tech" without being boring.

- The overall vibe is smooth, premium, modern.

---

## 🛠️ Tech Stack

- **React** (with Vite)
{ ## How to run it ?
    - **npm i** to install all the dependencies 
    - **npm run dev** to start the dev server

}
- No global state managers like Redux or zustand
  - I used **lifting state up** instead — since I had only one state to manage (the selected skip), there was no need to overengineer it.

---

## Other Notes

- Didn’t want to overcomplicate things or make it feel bloated.
- Just focused on clean UI/UX, fast performance, and guiding the user clearly through the skip selection step.
- Everything is self-contained and easy to expand if needed.

---

##  Final Verdict

This was fun to build and I really wanted to push it a bit beyond what was given. Hope you enjoy this smooth little experience! I'm open to feedbacks and improvments wherever needed 

---
greetings
Ahmad Chammakhi ! 
