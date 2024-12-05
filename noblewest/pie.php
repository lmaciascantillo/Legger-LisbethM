
<!-- Footer-->
<footer class="footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 text-lg-start">
                <img src="<?php echo get_template_directory_uri();?>/assets/img/logo_header.svg" alt="logo"
                style="width: 170px;height: 70px!important;margin-bottom: 19px;display: block;" />
                <span class="pt-1 text-footer">Support <a href="tel:8003911313">800.391.1313</a></span>
                <span class="pt-1 text-footer">License #0B10706</span>
                <span class="pt-1 text-footer">© 2022 Noble West.</span>
                <span class="text-footer">All Rights Reserved.</span>
            </div>
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-lg-4 col-md-4">
                        <?php
                            wp_nav_menu( array('menu' => 'Services') );
                        ?>
                    </div>
                    <div class="col-lg-3 col-md-3">
                        <?php
                            wp_nav_menu( array('menu' => 'Coverage') );
                        ?>
                    </div>
                    <div class="col-lg-3 col-md-3">
                        <?php
                            wp_nav_menu( array('menu' => 'Partners') );
                        ?>
                    </div>
                    <div class="col-lg-2 col-md-2">
                        <?php
                            wp_nav_menu( array('menu' => 'About Us') );
                        ?>
                    </div>
                </div>

            </div>
        </div>

        <div class="row justify-content-end">
            <div class="col-lg-8">
                <div class="row menu-footer">
                    <div class="col-lg-4 col-md-4">
                        <?php
                                wp_nav_menu( array('menu' => 'Enroll') );
                            ?>
                    </div>
                    <div class="col-lg-3 col-md-3">
                        <?php
                                wp_nav_menu( array('menu' => 'Contact Us') );
                            ?>
                    </div>
                    <div class="col-lg-3 col-md-3">
                        <?php
                                wp_nav_menu( array('menu' => 'Legal') );
                            ?>
                    </div>
                </div>
            </div>
        </div>


    </div>
</footer>

