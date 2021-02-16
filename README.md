# 🌍 Get Going Gone 🌏
---
#### Table of Contents
- [Introduction](#Introduction)
- [Features](#Features)
- [Technologies](#Techologies)
- [Reflections](#Reflections)
- [Contributions](#Contributions)
- [Authors](#Authors)
---
## Introduction

Designed with mobile viewing in mind, this is a variation of the project set forth by Turing School of Software and Design. [See rubric here](https://frontend.turing.io/projects/travel-tracker.html).

Significant attempts were made to keep user preferences in mind while still maintaining DRY and empathetic code.

Updated: 2021/02/16

## Features

To view please:
- clone down the api: `git@github.com:turingschool-examples/travel-tracker-api.git`
- in your terminal, cd into the api and run `npm start`
- then please visit [here](https://gaj23.github.io/get-going-gone/dist/index.html) to interact and view
- for best experience, please view via mobile device or through the dev tools viewing options

### Categories:
- [View trips according to their time of occurance](#time-of-trip)

- [Filter through booking possibilities](#view-possibilities)

- [Book a new trip](#booking)

- [Login](#login)

- [Dark mode option](#dark-mode)

#### Login
A traveler can login and see their specific travels.
- login by using the keyword `traveler` with any number 1 - 50 at the end; no spaces
 - (ie: `traveler44` )
- please use `travel2020` as the catchall password

<details>
<summary>Example of Experience</summary>
<br>
<img src="https://media.giphy.com/media/aR2LuAgaPYQ8hovwEm/giphy.gif">
</details>

#### Time of Trip
View your trip depending on if it's current/on going, a future trip, or a past trip. Pending trips are accounted for by a number.
<details>
<summary>Example of Experience</summary>
<br>
<img src="https://media.giphy.com/media/RSPISJWYkDvE30jZKA/giphy.gif">
</details>

#### View Possibilities
Select date, number of travelers, number of days on the trip, and a location to see the estimate of the cost.
<details>
<summary>Example of Experience</summary>
<br>
 <img src="https://media.giphy.com/media/EH4QM8QmRdrhGUKDKW/giphy.gif">
</details>

#### Booking
Once a traveler has decided, they can then submit a request for booking and that booking will now appear under pending on the main page.
<details>
<summary>Example of Experience</summary>
<br>
<img src="https://media.giphy.com/media/3t385cXt16E6QZgCJ9/giphy.gif">
</details>

#### Dark Mode
A traveler can choose between light and dark mode.
<details>
<summary>Example of Experience</summary>
<br>
<img src="https://media.giphy.com/media/iForwVQs74fqtUH8rj/giphy.gif">
</details>

## Technologies
- HTML
- CSS
- JS
- ESlint
- Node for testing
- [Flat Icon](https://www.flaticon.com/) for icons
- WAVE for accessibility auditing
- Lighthouse for accessibility auditing
- Webpack
- [Luxon](https://moment.github.io/luxon/); an npm package to manage dates

## Reflections

### Wins & Challenges

#### Wins
_Finishing up to Iteration 3_
_Having a Dark Mode_
_Finding different solutions for strange problems_

#### Challenges
There was a point I struggled with myself constantly because I felt as if because I wasn't on scheduled as planned and because of the constant snags and asking for help and getting stuck-- as if it didn't matter how much effort and detail I put into my projecy. That I wouldn't finish. My hardwork would remain unsung and only my failures would be acknowledged. Most of this is the result of already existing self-doubt that became heightened when in a high stress and high stakes venture.

For next time, though, when I find myself experiencing these feelings again, I hope to remember to look back on this project and remember my dedication, my hardwork, and my passion is what this showcased overall.

### Future Iterations

More specifics about future work or refactoring can be found in this projects [GH issues](https://github.com/gaj23/get-going-gone/issues).

Generally, though, I think the Traveler class needs a buffing to DRY it up. There is a method included that I never used (Issue #26) and some additional consideration could be put into if the object instantiation of Traveler should contain its own list of trips (Issue #26).

Although created and tested, the Destination class is never used. (Issue #27)

The site is responsive, but best viewed on a mobile device. I would like to apply media queries (Issue #28) to make the viewing more pleasing on a desktop or tablet. Priorities were given to functionality, general usability, and dark mode enablization.

## Contributions

Thank you <a href="https://github.com/cbdallavalle">Casey Dallavalle</a>, <a href="https://github.com/jantonso">Josh Antoson</a>, and <a href="https://github.com/srslie"> Alice Ruppert</a> for your guidance and advice.

#### To Contribute
If you'd like to contribute to the code, please complete the following steps:
- clone this repo locally: `git@github.com:gaj23/get-going-gone.git`
- also clone the associated API: `git@github.com:turingschool-examples/travel-tracker-api.git`
- cd into *both* the local copy and the API copy and run `npm install`
- in the local copy, please also download the (Luxon)[https://moment.github.io/luxon/docs/manual/install.html] dependency
 - `npm install --save luxon`
- from there please create a new branch following this pattern: `git checkout -b initials/feature-fix/focus-of-branch`
- contribute as you'd like and push up your work for review
Thank you.

## Author
<table>
    <tr>
        <td> Gabrielle Joyce <a href="https://github.com/gaj23">GH</td>
    </tr>
 <td><img src="https://avatars1.githubusercontent.com/u/68332132?s=460&u=a54dd9d3eede7c5ae0704846c510001c89dc88f7&v=4" alt="Ms. Joyce"
 width="150" height="auto" /></td>
</table>
