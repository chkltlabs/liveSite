<?php
include ("inc/functions.php");


if($_SERVER["REQUEST_METHOD"] == "POST"){
    $author     = $_POST["author"];
    $title      = $_POST["title"];
    $blogPost   = $_POST["blogpost"];

    //include("inc/connection.php");

    $sql = "INSERT";

    $rtn = fixBodyText($blogPost);

}

include("inc/header.php");
 ?>

<main class="SDmain">
    <h2 class="pagetitle">New Blog Post</h2>
    <form class="contactinfo-2" method="post" action="newpost.php">
            <table class="new-post-table">
            <tr class="row">
                <th><label for="author">Author</label></th>
                <td><input class="inpu" type="text" id="new-post-author" name=""/></td>
            </tr>
            <tr class="row">
                <th><label for="title">Title</label></th>
                <td><input class="inpu" type="text" id="new-post-title" name=""/></td>
            </tr>
            <tr class="row">
                <th><label for="blogpost">Post</label></th>
                <td><textarea class="input" name="blogpost" id="new-post-body"></textarea></td>
            </tr>
            <tr>
                <th>
                    <input type="submit" value="Submit New Post"  id="new-post-submit"/>
                </th>
            </tr>
            </table>
        </form>

    <div>
        <?php echo $rtn; ?>
    </div>
</main>

<?php include("inc/footer.php"); ?>