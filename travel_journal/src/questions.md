1. Empty width/height?
https://files.catbox.moe/pfcde8.png
I noticed that if you see the width of the container, theres a bit of empty space in the bottom
and I cant figure out why the empty space is there

Answer: This is why.
.main--container{
    margin-bottom: 40px;
}

2. Should I learn Tailwind or other react css before continuing?
Before continuing to the meme generator react course, should I take a detour to learn Tailwind? I heard that its a decent React css, or do you have any suggestions?

Answer: No, learning Tailwind is not a requirement to do or learn React. Tailwind is a separate CSS framework that simplifies CSS styling, but it has its own learning curve and system you need to understand first to be able to use it effectively. I recommend you carry on with the React module till the end, focusing on the React concepts you are learning right now. After you complete the React basics module, you could go back and redo some of the CSS sections/modules, and then come back to complete the next React module and the program. I think when you are done with the entire career path, you can invest some time learning Tailwind and then going back to the solo projects and try to restyle some of them using Tailwind. In the career path, we want you to focus on the core technologies: HTML, CSS, JavaScript, React, UI design, Responsive design, APIs, accessibility, and code reviews/git. The rest you can add to your knowledge and experience afterwards.

3. Could you give me some pointers on my css?
I'm a bit weak on paragraph and formatting css, I feel that I'm doing everything too manually? or I'm not using proper techniques and just brute forcing my way through. 

Answer: 
1. Use relative (no units) units for line-hight.
2. No need for setting the width to 100% if the item is already taking up the full width.
3. To check that you are doing more than needed, comment out the thing and if it has no effect, that's an indication that it was not needed. Investigate why. What is the default behavior?
Thank you!