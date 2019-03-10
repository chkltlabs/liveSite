<!-- DO NOT INCLUDE BOTH SCRIPTS.PHP AND FOOTER.PHP -->
<footer>
            
        </footer>
        
    </body>
    <script>
        $(document).ready(function(){
           $(".button").click(function(){
           $(this).attr("disabled", "disabled");
           $(".about-title").fadeOut(300, function(){
               fadeInAndOut($(".b"), 4000, function(){
                   fadeInAndOut($(".c"), 4000, function(){
                       fadeInAndOut($(".d"), 4000, function(){
                           fadeInAndOut($(".e"), 5000, function(){
                               fadeInAndOut($(".f"), 5000, function(){
                                   fadeInAndOut($(".g"), 5000, function(){
                                       fadeInAndOut($(".h"), 4000, function(){
                                           $(".button").removeAttr("disabled");
                                       });
                                   });
                               });
                           });
                       });
                   });
               });
           });
           });
        });

        function fadeInAndOut(element, secondDelay, callback){
            element.delay(500).fadeIn(300).delay(secondDelay).fadeOut(300, callback);
        }
    </script>
</html>

<!--$(document).ready(function(){-->
<!--$(".button").click(function(){-->
<!--$(this).attr("disabled", "disabled");-->
<!--$(".about-title").fadeOut(300, function() {-->
<!--$(".b").delay(500).fadeIn(300).delay(4000).fadeOut(300, function(){-->
<!--$(".c").delay(500).fadeIn(300).delay(4000).fadeOut(300, function(){-->
<!--$(".d").delay(500).fadeIn(300).delay(4000).fadeOut(300, function(){-->
<!--$(".e").delay(500).fadeIn(300).delay(5000).fadeOut(300, function(){-->
<!--$(".f").delay(500).fadeIn(300).delay(5000).fadeOut(300, function(){-->
<!--$(".g").delay(500).fadeIn(300).delay(5000).fadeOut(300, function(){-->
<!--$(".h").delay(500).fadeIn(300).delay(4000).fadeOut(300, function(){-->
<!--$(".button").removeAttr("disabled");-->
<!--});-->
<!--});-->
<!--});-->
<!--});-->
<!--});-->
<!--});-->
<!--});-->
<!--});-->
<!--});-->
<!--});-->