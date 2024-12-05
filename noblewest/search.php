<?php 
get_header(); 
//Header Variables
$site_logo = get_field('site_logo','option');
?>
<section id="main-block" class="general-section">
    <div class="cms-content-container full-width">
        <?php if ( have_posts() ) : ?>
            <div class="search-results">
                <div class="search-results-stripe">
                    <div class="search-results-container max-width pad-hit">
                        <h1 class="entry-title">search results</h1>
                        <span><?php printf( esc_html__( '%s', 'total' ), get_search_query() ); ?></span>
                    </div>
                </div>
                <?php if (have_posts()):?>
            <?php
                global $query_string;
                $query_args = explode("&", $query_string);
                $search_query = array();

                foreach($query_args as $key => $string) {
                $query_split = explode("=", $string);
                $search_query[$query_split[0]] = urldecode($query_split[1]);
                } // foreach

                $the_query = new WP_Query($search_query);
                if ( $the_query->have_posts() ) : 
            ?>
   
                    <ul class="general-list max-width pad-hit">    
                        <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                            <li>
                                <a class="header-3" href="<?php the_permalink(); ?>"><span><?php the_title(); ?></span></a>
                            </li>   
                        <?php endwhile; ?>
                    </ul>

                <?php wp_reset_postdata(); ?>

             <?php else : ?>
                    <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
            <?php endif; ?>
        <?php endif;?>


            </div>
        <?php endif; ?>
    </div>
</section>
<?php get_footer(); ?>