<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 * Template Name: Idea Feed Page
 * @package BB Mobile Application
 */

get_header(); ?>

<?php 
while ( have_posts() ) : the_post(); ?>
    <div class="title-box">
    	<div class="container">
    	</div>
    </div>

    <div id="content-ts" class="container">
        <div class="middle-align">       
    		<div class="col-md-12">
                <?php the_content();
                wp_link_pages( array(
                    'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'bb-mobile-application' ) . '</span>',
                    'after'       => '</div>',
                    'link_before' => '<span>',
                    'link_after'  => '</span>',
                    'pagelink'    => '<span class="screen-reader-text">' . __( 'Page', 'bb-mobile-application' ) . ' </span>%',
                    'separator'   => '<span class="screen-reader-text">, </span>',
                ) ); ?>               
            </div>        
            <div class="clear"></div>    
        </div>
    <?php
        // If comments are open or we have at least one comment, load up the comment template.
        if ( comments_open() || get_comments_number() ) {
            comments_template();
        }
    ?>
    </div><!-- container -->
	
	<script src="https://www.gstatic.com/firebasejs/4.4.0/firebase.js"></script>
	<script>
	  // Initialize Firebase
	  var config = {
		apiKey: "AIzaSyAfK2QPDKl6e8g22POpZscymOk-C5yRbW0",
		authDomain: "project1-18846.firebaseapp.com",
		databaseURL: "https://project1-18846.firebaseio.com",
		projectId: "project1-18846",
		storageBucket: "project1-18846.appspot.com",
		messagingSenderId: "126903202870"
	  };
	  firebase.initializeApp(config);
	
	var name, email;

	firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		console.log('user found');
		console.log(user);
		name = user.displayName;
		email = user.email;
		console.log(name);
		console.log(email);
		
		 } else {
		  console.log('user was null');
		 }
	});
	</script>

<?php endwhile; // end of the loop. ?>    
<?php get_footer(); ?>