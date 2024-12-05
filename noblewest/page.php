<?php 
get_header(); 
//Header Variables
$site_logo = get_field('site_logo','option');
//Single Page Variables
$page_banner_title = get_field( 'page_banner_title' );
$page_banner_background = get_field( 'page_banner_background' );
$page_banner_image = get_field( 'page_banner_image' );
$has_floating_layer = get_field( 'has_floating_layer' );
$messaging_layout = get_field( 'messaging_layout' );
?>
<section id="main-block" class="general-section p-0">
    <div class="cms-content-container full-width">
        <?php if(is_page('about-us')):?>
            <?php include('inc/about.php');?>
        <?php endif;?>

        <?php if(is_page('partners')):?>
            <?php include('inc/partners.php');?>
        <?php endif;?>

        <?php if(is_page('services')):?>
            <?php include('inc/services.php');?>
        <?php endif;?>

        <?php if(is_page('contact')):?>
            <?php include('inc/contact.php');?>
        <?php endif;?>

        <?php if(is_page('coverage')):?>
            <?php include('inc/coverage.php');?>
        <?php endif;?>

        <?php if(is_page('physical-damage')):?>
            <?php include('inc/physical-damage.php');?>
        <?php endif;?>

        <?php if(is_page('workers-compensation')):?>
            <?php include('inc/workers-compensation.php');?>
        <?php endif;?>

        <?php if(is_page('general-liability')):?>
            <?php include('inc/general-liability.php');?>
        <?php endif;?>

        <?php if(is_page('excess-umbrella')):?>
            <?php include('inc/excess-umbrella.php');?>
        <?php endif;?>

        <?php if(is_page('cargo')):?>
            <?php include('inc/cargo.php');?>
        <?php endif;?>

        <?php if(is_page('bonds')):?>
            <?php include('inc/bonds.php');?>
        <?php endif;?>

        <?php if(is_page('other-coverages')):?>
            <?php include('inc/other-coverages.php');?>
        <?php endif;?>
        
        <?php if(is_page('terms-conditions')):?>
            <?php include('inc/terms.php');?>
        <?php endif;?>

        <?php if(is_page('quote')):?>
            <?php include('inc/quote.php');?>
        <?php endif;?>
        <?php if(is_page('product-liability')):?>
            <?php include('inc/product/product-liability.php');?>
        <?php endif;?>
        <?php if(is_page('physical')):?>
            <?php include('inc/product/product-Physical.php');?>
        <?php endif;?>
        <?php if(is_page('pcoverage')):?>
            <?php include('inc/product/product-Coverage.php');?>
        <?php endif;?>

        <?php if(is_page('exit-coverage')):?>
            <?php include('inc/product/exit-coverage.php');?>
        <?php endif;?>

        <?php if(is_page('exit-liability')):?>
            <?php include('inc/product/exit-liability.php');?>
        <?php endif;?>

        <?php if(is_page('exit-physical')):?>
            <?php include('inc/product/exit-physical.php');?>
        <?php endif;?>
    </div>
</section>
<?php get_footer(); ?>