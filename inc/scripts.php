<!-- DO NOT INCLUDE BOTH SCRIPTS.PHP AND FOOTER.PHP -->
<footer>
            
        </footer>
        
    </body>
    <script>
        $(document).ready(function(){
           $("button.button").click(function(){
           $(this).attr("disabled", "disabled");
               $("h1.about-title").fadeOut(300, function() {
            $("div.b").delay(500).fadeIn(300).delay(4000).fadeOut(300, function(){
            $("div.c").delay(500).fadeIn(300).delay(4000).fadeOut(300, function(){
             $("div.d").delay(500).fadeIn(300).delay(4000).fadeOut(300, function(){
            $("div.e").delay(500).fadeIn(300).delay(5000).fadeOut(300, function(){
            $("div.f").delay(500).fadeIn(300).delay(5000).fadeOut(300, function(){
            $("div.g").delay(500).fadeIn(300).delay(5000).fadeOut(300, function(){
             $("div.h").delay(500).fadeIn(300).delay(4000).fadeOut(300, function(){
             $("button.button").removeAttr("disabled"); 
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
    </script>
</html>