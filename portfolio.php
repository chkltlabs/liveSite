<?php include("inc/header.php"); ?>

    <main class="SDmain">
        <h2 class="pagetitle">Portfolio</h2>

        <div class="port-table"><!--
            Blank row template

                    <div class="port-row">
                    <img src="" href="" class="port-image">
                    <div class="port-text">
                        <h4 class="port-title"></h4>
                        <p class="port-sub"></p><br>
                        <p class="port-desc"></p><br>
                    </div>
                </div>
-->
            <div class="port-row">
                <a href="/connect4/index.html"><img src="/img/Connect4Wide.PNG" href="/connect4/index.html" class="port-image"></a>
                <div class="port-text">
                    <h4 class="port-title">
                        Connect4: Recreated in JavaScript</h4>
                    <p class="port-sub">A Student Project</p><br>
                    <p class="port-desc">As part of my self-education in all things software, one of my learning sources had a learn-by-doing
                        project set before us. With minimal help and the provided HTML and CSS, I wrote the Object Oriented Javascript used
                        to create this <strike>blatant rip-off</strike> well meaning homage to the classic childrens game. Click the image to
                        play, using the arrow keys.</p><br>
                </div>
            </div>
            <br><br><br><br><br>

            <div class="port-row">
                <img src="/img/siteStats.png" href="https://github.com/chkltlabs/SiteStats" class="port-image">
                <div class="port-text">
                    <h4 class="port-title">Site Stats</h4>
                    <p class="port-sub">An elegant solution to a tedious problem</p><br>
                    <p class="port-desc">So in December of 2018, in my day job, a problem presented itself. We had just gotten access to a new automated email platform,
                    and this platform included basic logic gates and conditional statements to flex the language of our sales emails. We ALSO had an existing
                    database of data scraped from the top 50,000 websites that detailed what tech they were using. I wrote SiteStats to bridge the two. </p><br>
                    <p class="port-desc">Written on the JavaFX platform for Windows, it receives a .CSV full of URLs,
                        and querys the database for its entire dataset, working with it as a ResultSet object. It then collates the known data about the input URLs
                    into a format useable by our new email platform. Click the image to view the GitHub repo.</p><br>
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
                        their standalone website (now defunct), utilizing a mix of HTML, CSS and JavaScript.</p>
                </div>
            </div>
            <br><br><br><br><br>

        </div>
    </main>

<?php include("inc/footer.php"); ?>