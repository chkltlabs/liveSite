<?php
class Erik
{
    var $skills = [];
    var $hasDevJob = false;

    function __construct(){
        $this->skills[] = 'JavaScript';
        $this->skills[] = 'PHP';
        $this->skills[] = 'CSS';
        $this->skills[] = 'HTML';
        $this->skills[] = 'Java';
    }

    function getResume(){
        return 'contact.php';
    }

    function getPortfolio(){
        return 'portfolio.php';
    }

    function getBlog(){
        return 'blog.php';
    }

    function getFavoriteBeer(){
        if(hefeweizen){
            return 'Hefeweizen';
        } else if(craftWheatBeers){
            return 'Craft Wheat Beers';
        } else {
            return 'Blue Moon, I guess...';
        }
    }
}
?>