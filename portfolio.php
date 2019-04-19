<?php include("inc/header.php"); ?>

    <main class="SDmain">
        <h2 class="pagetitle">Portfolio</h2>

        <div class="port-table"><!--
            Blank row template

                    <div class="port-row">
                    <a href=""><img src="" class="port-image"></a>
                    <div class="port-text">
                        <h4 class="port-title"></h4>
                        <p class="port-sub"></p><br>
                        <p class="port-desc"></p><br>
                    </div>
                </div>
-->

            <div class="port-row">
                <a href="/orbitals/index.html"><img src="/img/solarFinal.png" class="port-image"></a>
            <div class="port-text">
                <h4 class="port-title">Class Project: Model the Solar System</h4>
                <p class="port-sub">SoftStack Factory Phase 1 Final</p><br>
                <p class="port-desc">This is where I will put a description at some point!</p><br>
            </div>
        </div>

            <div class="port-row">
                <a href="/mines/index.html"><img src="/img/MinesWide.PNG" class="port-image"></a>
                <div class="port-text">
                    <h4 class="port-title">
                        Minesweeper: Recreated in JavaScript</h4>
                    <p class="port-sub">A conversion from Prototype to Class</p><br>
                    <p class="port-desc">I am fortunate enough in my coding adventures to have limited exposure to the old Prototype model of Object Oriented Programming in JS,
                        however when I came across a coding challenge from 2017 to recreate the gameplay of Minesweeper in p5, I couldn&#39;t resist. I learned a lot about the old syntax
                        of JS classes, and the bane of OOP in JS (using 'this.' properly), and ultimately the conversion to modern class syntax was virtually painless.
                        <br><br>In addition to the basic gameplay walked through in the tutorial, I was able to add several pieces of functionality,
                        including Flagging undetonated Mines, checking for a win or loss state and informing the user, and making the UX scale with browser window height (on refresh).
                        <br><br>Click the image to play, using the mouse and shift key.</p><br>
                </div>
            </div>
            <br><br><br><br><br>

            <div class="port-row">
                <a href="/snake/index.html"><img src="/img/SnakeWide.PNG" class="port-image"></a>
                <div class="port-text">
                    <h4 class="port-title">
                        Snake: Recreated in JavaScript</h4>
                    <p class="port-sub">All Aboard The Coding Train</p><br>
                    <p class="port-desc">In perusing the internet for JavaScript related content, I came across a series of videos by The Coding Train that use a JavaScript library called P5,
                    which is used to make graphics and game animations more intuitive and fluid. I followed the original project, but added my own finishing features, including logic to govern
                    deaths by edge-overlap, fixing a bug that caused food to spawn on squares currently occupied by the snake, and preventing the player from turning the snake head directly back
                    on itself, which used to just result in a game loss. <br><br>Click the image to play, using the arrow keys.</p><br>
                </div>
            </div>
            <br><br><br><br><br>

            <div class="port-row">
                <a href="/connect4/index.html"><img src="/img/Connect4Wide.PNG" class="port-image"></a>
                <div class="port-text">
                    <h4 class="port-title">
                        Connect4: Recreated in JavaScript</h4>
                    <p class="port-sub">A Student Project</p><br>
                    <p class="port-desc">As part of my self-education in all things software, one of my learning sources had a learn-by-doing
                        project set before us. With minimal help and the provided HTML and CSS, I wrote the Object Oriented Javascript used
                        to create this <strike>blatant rip-off</strike> well meaning homage to the classic childrens game. <br><br>Click the image to
                        play, using the arrow keys.</p><br>
                </div>
            </div>
            <br><br><br><br><br>

            <div class="port-row">
                <a href="https://github.com/chkltlabs/SiteStats"><img src="/img/siteStats.png" class="port-image"></a>
                <div class="port-text">
                    <h4 class="port-title">Site Stats</h4>
                    <p class="port-sub">An elegant solution to a tedious problem</p><br>
                    <p class="port-desc">So in December of 2018, in my day job, a problem presented itself. We had just gotten access to a new automated email platform,
                    and this platform included basic logic gates and conditional statements to flex the language of our sales emails. We ALSO had an existing
                    database of data scraped from the top 50,000 websites that detailed what tech they were using. I wrote SiteStats to bridge the two. </p><br>
                    <p class="port-desc">Written on the JavaFX platform for Windows, it receives a .CSV full of URLs,
                        and querys the database for its entire dataset, working with it as a ResultSet object. It then collates the known data about the input URLs
                    into a format useable by our new email platform. <br><br>Click the image to view the GitHub repo.</p><br>
                </div>
            </div>
            <br><br><br><br><br>

            <div class="port-row">
                <img class="port-image" href="http://www.google.com" src="/img/dysmorphia.png" />
                <div class="port-text">
                    <h4 class="port-title">Dysmorphia</h4>
                    <p class="port-sub">
                        Principal Web Developer, Key Grip, 2018</p>
                    &nbsp;

                    <p class="port-desc">A passion project produced by Nan Bozeman, a close friend of mine, Dysmorphia is a horror film which explores
                        a character who struggles with eating disorders bordering on mania. On set, I led a team of grips in setting up and tearing down
                        lighting equipment, set dressings, monitors and other equipment the creative team used to produce the film. Off set, I created
                        their standalone website (now defunct), utilizing HTML, CSS and JavaScript.</p>
                </div>
            </div>
            <br><br><br><br><br>

        </div>
    </main>

<?php include("inc/footer.php"); ?>