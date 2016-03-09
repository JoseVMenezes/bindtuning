# bind-tuning
BindTuning - Frontend Challenge


Challenge 1 - javascript:
  Connect to HackerNews webpage through an API, get the data and build a webpage with all those items. Finally, add infinite scroll.
  
  - I connected to HackerNews through an API, import.io, and got the data from HN in a JSON file. However, the data wasn't clearly organized. So I decided to use Google dev tools, and get the entire html, css and javascript -aswell as images- just as it was presented there.
  - As usual, when I don't know how to exactly write a function, I search for possible answers on the internet (usually in stackoverflow.com). For the infinite scroll function I mostly found suggestions to use a jQuery plugin. Again, as usual, some of those plugins were already outdated, so I avoided using one.
  - The infinite scroll function is actually quite simple in javascript/jQuery. It's only needed a mathematical calculation between the heights of the document and the screen to trigger this function.
  - There was a problem: if I scrolled down more than what was needed to get to the bottom of the page, the infinite scroll function would be triggered more than one time in a row. In order to not accumulate scroll down movements while the function was being triggered, I used the setTimeOut function.
  - When the user reaches the bottom of the page, he activates the infinite scroll function and more 10 articles are loaded. For that, I used jQuery's .append() method. I was first aiming to load data from the JSON file I mentioned above, but I wasn't able to do it. So, the .append() method here works as an alternative, just to show that the infinite scroll works fine.


Challenge 2 - HTML/CSS:
  Redesign HackerNews responsive webpage using HTML/CSS.
  - Design: I based my design in the original HackerNews page, due to its simple and direct navigation. The HackerNews' logo with the white border was the basis for the menu's 'card-like' design.
  - UX & UI design: Although I appreciate the HackerNews page's simplicity, the user could experience a more pleasant and visually exciting visit on the website. So, the content and navigation remain the same, but the UI is enhanced (ex.: small icons instead of words).
  - Login: In the original HackerNews page, when the user clicks on 'login', it opens a new page. In my version I included the login forms in the same page.
  - Development: For this challenge, I had a mobile-first approach.
  - Frameworks: no frameworks were used.
