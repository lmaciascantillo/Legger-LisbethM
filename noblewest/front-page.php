<?php
get_header();

// Section banner homepage
$form = get_field('form');
?>
<div class="section-form">
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-auto img-col d-flex justify-content-center align-items-start">
                <img alt="logotipo sitio web" src="<?php echo get_template_directory_uri(); ?>/assets/img/kv.png" class="img-fluid float-right">
            </div>
            <div class="col-md-4 form-col justify-content-start align-items-center">
                <div id="form-container">
                    <h1><span>1.</span> Inscripción punto de venta</h1>
                    <form id="registro-form">
                        <?php echo $form; ?>
                </div>
                <div id="thank-you" class="thank-you-message text-center">
                    <h3>¡Gracias por registrarte!</h3>
                    <p>Tu registro ha sido exitoso.</p>
                </div>
            </div>
        </div>
        <!--
        <hr>
        <div class="text-center">
            <button id="download-btn" class="btn btn-secondary" onclick="downloadLead()">Descargar Leads</button>
        </div> -->
    </div>
</div>




<?php
get_footer();

?>