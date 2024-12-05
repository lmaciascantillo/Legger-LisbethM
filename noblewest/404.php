<?php
get_header();
//Header Variables
$site_logo = get_field('site_logo', 'option');
?>
<section id="main-block" class="general-section">
    <div class="cms-content-container full-width">
        <div class="error-404-block-container full-width">
            <div class="container section-work pb-110 pt-110">
                <h2>404</h2>
                <h2>Page Not Found</h2>
                <p class="pb-2 text-center pt-3">The page you were looking for could not be found.</p>
                <p class="pb-2 text-center">It might have been removed, renamed, or did not exist in the first place.</p>
                </br>
                <a href="<?php echo get_home_url(); ?>"><button type="button" class="btn btn-danger btn btn-lg w-50 btn-center">Go To Homepage</button></a>
            </div>
        </div>

    </div>
</section>
<?php get_footer(); ?>