***Hani Zahra - 2/2/18***

<h1>Ms. Pac-Man Proposal</h1> <br><br>

<h2>What is Ms. Pac-Man?</h2> <br><br>
<p>Ms. Pac-Man is a yellow circle character that eats little white circles in a maze. The goal is to eat all the white circles without being attacked (touched) by any one of the four multi-colored ghosts. Ms. Pac-Man can lose a max of three lives before the game resets. In addition to the white circles, there are larger white circles Ms. Pac-Man can eat that for a brief amount of time allow her to swallow the ghosts( now a blue color), which sends them back to the center box of the maze. After all white dots have been eaten, the user can progress to the next level. Each succesive level will see an increase in ghost speed and aggression. There will also be a point system that accounts for each white dot eaten. The score will be carried over into the successive levels for the ultimate goal of the user attaining a top score, which will be listed on the scoreboard.</p><br><br>

<h2>Wireframe</h2> <br><br>
![Wireframes](https://github.com/hanizahra/Ms-Pacman/blob/master/screenshots/ms-pac-man-wireframes.jpg "Screenshot")
<br><br>

<h2>Initial thoughts on game structure</h2> <br><br>
<p>I want the user to see a basic landing page with character images, brief instruction and game start option.</p>
<p>I think the biggest challenges will entail programming the ghosts' behavior, in terms of speed and agression (whether they chase Ms. Pac-Man or just move around randomly) and keeping all movements within the constructs of the maze.</p><br><br> 

<h2>Phases of Completion</h2> <br><br>
<ol>
<li>Create basic layouts for the three html pages and simple shapes to represent characters using simple CSS</li>
<li>Program logic for actual game play until it works (i.e. Ms. Pac-Man can move through maze, ghosts movement patterns and points of contact between characters, score counter, game start/reset)</li>
<li>Character animations for Ms. Pac-Man (e.g. movement, eating mouth in all directions, dying from ghost) and ghosts (e.g. movement, eaten ghost transformed to eyes)
<li>Make CSS look pretty and add any bells and whistles that make the flow of the game, from page to page, look consistent</li>
</ol><br><br>

<h2>Links and Resources</h2> <br><br>
https://www.youtube.com/watch?v=GOJBoGbRNQA <br>
http://www.masswerk.at/JavaPac/pacman-howto.html <br>
https://codepen.io/hellokatili/pen/xwKRmo


<h1>Ms. Pac-Man Implementation</h1> <br><br>


<p>Used vanilla JavaScript to program the logic of the game and CSS to style.</p>

<p>Several different approaches were implemented. Initially, a table was constructed in HTML to mirror a common pattern used for the maze. A div controlled by keycode targets allowed it to flow freely throughout the map.</p>

<p>That table approach was then abandoned for an array to map out the maze. The characters moved throughout the map through redraws. This proved impractical when more characters were added and the entire map had to be iterated upon constantly.</p>

<p>The next approach was to maintain the map but use the initial approach of keycode targets to move the div. The same rules of movement were maintained as they still referenced the array.</p>

<p>Using classes, pieces of the board were updated based on the character's movement.</p> 

<p>The ghost characters were added last but with time a constraint, the logic to their random movements is fairly restricted.</p>

<p>The last big obstacle that could not be achieved was the collision detection between the Ms. PacMan character and the ghosts. Due to that, web page/device responsiveness wasn't attempted. However, a score count was created and a logic drawn to include high scores to a scoreboard as the final page. The user is able to input their name.</p>

<h2>First Attempt at Game Grid</h2> <br><br>
![Screenshot of First Attempt](https://github.com/hanizahra/Ms-Pacman/blob/master/screenshots/firstattempt.png "Screenshot")

<h2>Ghost Design</h2> <br><br>
![Screenshot of Ghosts](https://github.com/hanizahra/Ms-Pacman/blob/master/screenshots/illustrator.png "Screenshot")


<h2>Preview</h2> <br><br>
![Screenshot of Landing Page](https://github.com/hanizahra/Ms-Pacman/blob/master/screenshots/ms-pacman1.png "Screenshot")![Screenshot of Game Play](https://github.com/hanizahra/Ms-Pacman/blob/master/screenshots/ms-pacman2.png "Screenshot")
![Screenshot of High Score](https://github.com/hanizahra/Ms-Pacman/blob/master/screenshots/ms-pacman3.png "Screenshot")


