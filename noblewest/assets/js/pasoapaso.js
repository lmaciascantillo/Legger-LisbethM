// logica aplicada para COMERCIAL PACKAGE
$(document).ready(function () {
  $("#btn_commercial2").click( function() {     
    $.ajax({
      type: 'POST',
      url: '../../../correo/sendliabilitypaso2.php',
      data: $('#register_form').serialize(),
      success: function(respuesta) {
        if(respuesta=='ok'){
          echo('enviado');
        }
        else {
          echo('error');
        }
      }
      });
  }); 

  $("#btn_physical2").click( function() {     
    $.ajax({
      type: 'POST',
      url: '../../../correo/sendphysicalpaso2.php',
      data: $('#register_form').serialize(),
      success: function(respuesta) {
        if(respuesta=='ok'){
        echo('enviado');
        }
        else {
        echo('error');
        }
      }
      });
  }); 

  $("#from-datepicker").datepicker({
    format: "mm/dd/yy",
  });
  $("#from-datepicker").on("change", function () {
    var fromdate = $(this).val();
  });

  var current = 1;
  var steps = $(".tab-pane").length;
  setProgressBar(current);

  // COMMERCIAL
  $("#btn_commercial1").click(function () {
    var error_dot = "";

    if ($.trim($("#dot").val()).length == 0) {
      error_dot = "DOT is required";
      $("#error_dot").text(error_dot);
      $("#dot").addClass("has-error");
    } else {
      error_dot = "";
      $("#error_dot").text(error_dot);
      $("#dot").removeClass("has-error");
    }

    if (error_dot != "") {
      return false;
    } else {
      $("#list_list_commercial1").removeClass("active active_tab1");
      $("#list_list_commercial1").removeAttr("href data-toggle");
      $("#commercial1").removeClass("active");
      $("#list_list_commercial1").addClass("inactive_tab1");
      $("#list_commercial2").removeClass("inactive_tab1");
      $("#list_commercial2").addClass("active_tab1 active");
      $("#list_commercial2").attr("href", "#commercial2");
      $("#list_commercial2").attr("data-toggle", "tab");
      $("#commercial2").addClass("active in");
    }
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    setProgressBar(++current);
  });
  $("#previous_btn_commercial2").click(function () {
    $("#list_commercial2").removeClass("active active_tab1");
    $("#list_commercial2").removeAttr("href data-toggle");
    $("#commercial2").removeClass("active in");
    $("#list_commercial2").addClass("inactive_tab1");
    $("#list_list_commercial1").removeClass("inactive_tab1");
    $("#list_list_commercial1").addClass("active_tab1 active");
    $("#list_list_commercial1").attr("href", "#commercial1");
    $("#list_list_commercial1").attr("data-toggle", "tab");
    $("#commercial1").addClass("active in");
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    setProgressBar(--current);
  });

  $("#btn_commercial2").click(function () {
    var error_company_name = "";
    var error_zipcode = "";
    var error_fullname = "";
    var error_mobile_no = "";
    var mobile_validation = /^\d{10}$/;
    var error_email = "";
    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if ($.trim($("#email").val()).length == 0) {
      error_email = "Email is required";
      $("#error_email").text(error_email);
      $("#email").addClass("has-error");
    } else {
      if (!filter.test($("#email").val())) {
        error_email = "Invalid Email";
        $("#error_email").text(error_email);
        $("#email").addClass("has-error");
      } else {
        error_email = "";
        $("#error_email").text(error_email);
        $("#email").removeClass("has-error");
      }
    }

    if ($.trim($("#company_name").val()).length == 0) {
      error_company_name = "Company Name is required";
      $("#error_company_name").text(error_company_name);
      $("#company_name").addClass("has-error");
    } else {
      error_company_name = "";
      $("#error_company_name").text(error_company_name);
      $("#company_name").removeClass("has-error");
    }

    if ($.trim($("#zipcode").val()).length == 0) {
      error_zipcode = "Zip Code is required";
      $("#error_zipcode").text(error_zipcode);
      $("#zipcode").addClass("has-error");
    } else {
      error_zipcode = "";
      $("#error_zipcode").text(error_zipcode);
      $("#zipcode").removeClass("has-error");
    }

    if ($.trim($("#fullname").val()).length == 0) {
      error_fullname = "Contact Full Name is required";
      $("#error_fullname").text(error_fullname);
      $("#fullname").addClass("has-error");
    } else {
      error_fullname = "";
      $("#error_fullname").text(error_fullname);
      $("#fullname").removeClass("has-error");
    }

    if ($.trim($("#mobile_no").val()).length == 0) {
      error_mobile_no = "Contact Phone Number is required";
      $("#error_mobile_no").text(error_mobile_no);
      $("#mobile_no").addClass("has-error");
    } else {
      if (!mobile_validation.test($("#mobile_no").val())) {
        error_mobile_no = "Invalid Contact Phone Number";
        $("#error_mobile_no").text(error_mobile_no);
        $("#mobile_no").addClass("has-error");
      } else {
        error_mobile_no = "";
        $("#error_mobile_no").text(error_mobile_no);
        $("#mobile_no").removeClass("has-error");
      }
    }

    if (
      error_fullname != "" ||
      error_mobile_no != "" ||
      error_company_name != "" ||
      error_zipcode != "" ||
      error_email != ""
    ) {
      return false;
    } else {
      $("#list_commercial2").removeClass("active active_tab1");
      $("#list_commercial2").removeAttr("href data-toggle");
      $("#commercial2").removeClass("active");
      $("#list_commercial2").addClass("inactive_tab1");
      $("#list_commercial3").removeClass("inactive_tab1");
      $("#list_commercial3").addClass("active_tab1 active");
      $("#list_commercial3").attr("href", "#commercial3");
      $("#list_commercial3").attr("data-toggle", "tab");
      $("#commercial3").addClass("active in");
    }
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );   
    setProgressBar(++current);
  });

  $("#previous_btn_commercial3").click(function () {
    $("#list_commercial3").removeClass("active active_tab1");
    $("#list_commercial3").removeAttr("href data-toggle");
    $("#commercial3").removeClass("active in");
    $("#list_commercial3").addClass("inactive_tab1");
    $("#list_list_commercial2").removeClass("inactive_tab1");
    $("#list_list_commercial2").addClass("active_tab1 active");
    $("#list_list_commercial2").attr("href", "#commercial2");
    $("#list_list_commercial2").attr("data-toggle", "tab");
    $("#commercial2").addClass("active in");
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    setProgressBar(--current);
  });

  $("#btn_commercial3").click(function () {
      $("#list_commercial3").removeClass("active active_tab1");
      $("#list_commercial3").removeAttr("href data-toggle");
      $("#commercial3").removeClass("active");
      $("#list_commercial3").addClass("inactive_tab1");
      $("#list_commercial4").removeClass("inactive_tab1");
      $("#list_commercial4").addClass("active_tab1 active");
      $("#list_commercial4").attr("href", "#commercial4");
      $("#list_commercial4").attr("data-toggle", "tab");
      $("#commercial4").addClass("active in");
    
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    crearJugadorcommercial();
    crearDrivercommercial();
    setProgressBar(++current);
  });

  $("#previous_btn_commercial4").click(function () {
    $("#list_commercial4").removeClass("active active_tab1");
    $("#list_commercial4").removeAttr("href data-toggle");
    $("#commercial4").removeClass("active in");
    $("#list_commercial4").addClass("inactive_tab1");

    $("#list_list_commercial3").removeClass("inactive_tab1");
    $("#list_list_commercial3").addClass("active_tab1 active");
    $("#list_list_commercial3").attr("href", "#commercial3");
    $("#list_list_commercial3").attr("data-toggle", "tab");
    $("#commercial3").addClass("active in");
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    setProgressBar(--current);
  });

  $("#btn_commercial4").click(function () {
    var error_optioncov = "";

    if ($.trim($("#optioncov").val()).length == 0) {
      error_optioncov = "optioncov is required";
      $("#error_optioncov").text(error_optioncov);
      $("#optioncov").addClass("has-error");
    } else {
      error_optioncov = "";
      $("#error_optioncov").text(error_optioncov);
      $("#optioncov").removeClass("has-error");
    }

    if (error_optioncov != "") {
      return false;
    } else {
      $("#list_commercial4").removeClass("active active_tab1");
      $("#list_commercial4").removeAttr("href data-toggle");
      $("#commercial4").removeClass("active");
      $("#list_commercial4").addClass("inactive_tab1");

      $("#list_commercial5").removeClass("inactive_tab1");
      $("#list_commercial5").addClass("active_tab1 active");
      $("#list_commercial5").attr("href", "#commercial5");
      $("#list_commercial5").attr("data-toggle", "tab");
      $("#commercial5").addClass("active in");
    }
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    setProgressBar(++current);
  });

  $("#previous_btn_commercial5").click(function () {
    $("#list_commercial5").removeClass("active active_tab1");
    $("#list_commercial5").removeAttr("href data-toggle");
    $("#commercial5").removeClass("active in");
    $("#list_commercial5").addClass("inactive_tab1");

    $("#list_list_commercial4").removeClass("inactive_tab1");
    $("#list_list_commercial4").addClass("active_tab1 active");
    $("#list_list_commercial4").attr("href", "#commercial4");
    $("#list_list_commercial4").attr("data-toggle", "tab");
    $("#commercial4").addClass("active in");
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    setProgressBar(--current);
  });

  $("#btn_commercial5").click(function () {
    var pulsado = false; //variable de comprobación
    var opciones = document.formulario.claims; //array de elementos
    var elegido = -1; //número del elemento elegido en el array
    for (i = 0; i < opciones.length; i++) {
      //bucle de comprobación
      if (opciones[i].checked == true) {
        pulsado = true;
        elegido = i; //número del elemento elegido en el array
      }
    }
    var error_yesno = "";
    error_yesno = "Button is required";
    if (pulsado == true) {
      miOpcion = opciones[elegido].value;
    } else {
      //mensaje de formulario no válido.
      $("#error_yesno").text(error_yesno);
      $("#claims").addClass("has-error");
      return false; //el formulario no se envía.
    }

    if (pulsado == false) {
      return false;
    } else {
      $("#list_commercial5").removeClass("active active_tab1");
      $("#list_commercial5").removeAttr("href data-toggle");
      $("#commercial5").removeClass("active");
      $("#list_commercial5").addClass("inactive_tab1");

      $("#list_commercial6").removeClass("inactive_tab1");
      $("#list_commercial6").addClass("active_tab1 active");
      $("#list_commercial6").attr("href", "#commercial6");
      $("#list_commercial6").attr("data-toggle", "tab");
      $("#commercial6").addClass("active in");
    }
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    setProgressBar(++current);
  });

  $("#previous_btn_commercial6").click(function () {
    $("#list_commercial6").removeClass("active active_tab1");
    $("#list_commercial6").removeAttr("href data-toggle");
    $("#commercial6").removeClass("active in");
    $("#list_commercial6").addClass("inactive_tab1");

    $("#list_list_commercial5").removeClass("inactive_tab1");
    $("#list_list_commercial5").addClass("active_tab1 active");
    $("#list_list_commercial5").attr("href", "#commercial5");
    $("#list_list_commercial5").attr("data-toggle", "tab");
    $("#commercial5").addClass("active in");
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    setProgressBar(--current);
  });

  $("#btn_commercial6").click(function () {
    var error_date = "";
    if ($.trim($("#from-datepicker").val()).length == 0) {
      error_date = "Date is required";
      $("#error_date").text(error_date);
      $("#from-datepicker").addClass("has-error");
    } else {
      error_date = "";
      $("#error_date").text(error_date);
      $("#from-datepicker").removeClass("has-error");
    }
    if (error_date != "") {
      return false;
    } else {
      $("#btn_commercial6").attr("disabled", "disabled");
      $(document).css("cursor", "prgress");
      $("#register_form").submit();
    }
    //el step final
    //$("#list_commercial6").removeClass("active active_tab1");
    //$("#list_commercial6").removeAttr("href data-toggle");
    //$("#commercial6").removeClass("active");
    //$("#list_commercial6").addClass("inactive_tab1");
    //$("#list_finish").removeClass("inactive_tab1");
    //$("#list_finish").addClass("active_tab1 active");
    //$("#list_finish").attr("href", "#finish");
    //$("#list_finish").attr("data-toggle", "tab");
    //$("#finish").addClass("active in");
    //$("body, html").animate(
    //  {
    //    scrollTop: "0px",
    //  },
    //  300
    //);
    //setProgressBar(++current);
    //setTimeout(function () {
    //  window.location.href = "/quote/";
    //}, 700);
  });



  function setProgressBar(curStep) {
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar").css("width", percent + "%");
  }

  $(window).on("load", function () {
    $("#exampleModal").modal("show");
  });

  $("button.closeexampleModalclose[data-dismiss=modal]").click(function () {
    $("#exampleModal").modal("hide");
  });

  // --------------------- PHYSYCAL -----------------
  // PHYSICAL
  $("#btn_physical1").click(function () {
    var error_dot = "";
    var error_tmc = "";

    if ($.trim($("#tmc").val()).length == 0) {
      error_tmc = "MC or DOT are required";
      $("#error_tmc").text(error_tmc);
      $("#tmc").addClass("has-error");
    } else {
      error_tmc = "";
      $("#error_tmc").text(error_tmc);
      $("#tmc").removeClass("has-error");
    }

    if ($.trim($("#dot").val()).length == 0) {
      error_dot = "Company Name is required";
      $("#error_dot").text(error_dot);
      $("#dot").addClass("has-error");
    } else {
      error_dot = "";
      $("#error_dot").text(error_dot);
      $("#dot").removeClass("has-error");
    }

    if (error_dot != "" || error_tmc != "") {
      return false;
    } else {
      $("#list_list_physical1").removeClass("active active_tab1");
      $("#list_list_physical1").removeAttr("href data-toggle");
      $("#physical1").removeClass("active");
      $("#list_list_physical1").addClass("inactive_tab1");
      $("#list_physical2").removeClass("inactive_tab1");
      $("#list_physical2").addClass("active_tab1 active");
      $("#list_physical2").attr("href", "#physical2");
      $("#list_physical2").attr("data-toggle", "tab");
      $("#physical2").addClass("active in");
    }
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    setProgressBar(++current);
  });

  $("#previous_btn_physical2").click(function () {
    $("#list_physical2").removeClass("active active_tab1");
    $("#list_physical2").removeAttr("href data-toggle");
    $("#physical2").removeClass("active in");
    $("#list_physical2").addClass("inactive_tab1");
    $("#list_list_physical1").removeClass("inactive_tab1");
    $("#list_list_physical1").addClass("active_tab1 active");
    $("#list_list_physical1").attr("href", "#physical1");
    $("#list_list_physical1").attr("data-toggle", "tab");
    $("#physical1").addClass("active in");
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    setProgressBar(--current);
  });

  $("#btn_physical2").click(function () {
    var error_zipcode = "";
    var error_fullname = "";
    var error_mobile_no = "";
    var mobile_validation = /^\d{10}$/;
    var error_email = "";
    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if ($.trim($("#email").val()).length == 0) {
      error_email = "Email is required";
      $("#error_email").text(error_email);
      $("#email").addClass("has-error");
    } else {
      if (!filter.test($("#email").val())) {
        error_email = "Invalid Email";
        $("#error_email").text(error_email);
        $("#email").addClass("has-error");
      } else {
        error_email = "";
        $("#error_email").text(error_email);
        $("#email").removeClass("has-error");
      }
    }

    if ($.trim($("#zipcode").val()).length == 0) {
      error_zipcode = "Zip Code is required";
      $("#error_zipcode").text(error_zipcode);
      $("#zipcode").addClass("has-error");
    } else {
      error_zipcode = "";
      $("#error_zipcode").text(error_zipcode);
      $("#zipcode").removeClass("has-error");
    }

    if ($.trim($("#fullname").val()).length == 0) {
      error_fullname = "Contact Full Name is required";
      $("#error_fullname").text(error_fullname);
      $("#fullname").addClass("has-error");
    } else {
      error_fullname = "";
      $("#error_fullname").text(error_fullname);
      $("#fullname").removeClass("has-error");
    }

    if ($.trim($("#mobile_no").val()).length == 0) {
      error_mobile_no = "Contact Phone Number is required";
      $("#error_mobile_no").text(error_mobile_no);
      $("#mobile_no").addClass("has-error");
    } else {
      if (!mobile_validation.test($("#mobile_no").val())) {
        error_mobile_no = "Invalid Contact Phone Number";
        $("#error_mobile_no").text(error_mobile_no);
        $("#mobile_no").addClass("has-error");
      } else {
        error_mobile_no = "";
        $("#error_mobile_no").text(error_mobile_no);
        $("#mobile_no").removeClass("has-error");
      }
    }

    if (
      error_fullname != "" ||
      error_mobile_no != "" ||
      error_zipcode != "" ||
      error_email != ""
    ) {
      return false;
    } else {
      $("#list_physical2").removeClass("active active_tab1");
      $("#list_physical2").removeAttr("href data-toggle");
      $("#physical2").removeClass("active");
      $("#list_physical2").addClass("inactive_tab1");
      $("#list_physical3").removeClass("inactive_tab1");
      $("#list_physical3").addClass("active_tab1 active");
      $("#list_physical3").attr("href", "#physical3");
      $("#list_physical3").attr("data-toggle", "tab");
      $("#physical3").addClass("active in");
    }
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    setProgressBar(++current);
  });

  $("#previous_btn_physical3").click(function () {
    $("#list_physical3").removeClass("active active_tab1");
    $("#list_physical3").removeAttr("href data-toggle");
    $("#physical3").removeClass("active in");
    $("#list_physical3").addClass("inactive_tab1");
    $("#list_list_physical2").removeClass("inactive_tab1");
    $("#list_list_physical2").addClass("active_tab1 active");
    $("#list_list_physical2").attr("href", "#physical2");
    $("#list_list_physical2").attr("data-toggle", "tab");
    $("#physical2").addClass("active in");
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    setProgressBar(--current);
  });

  $("#btn_physical3").click(function () {
      $("#list_physical3").removeClass("active active_tab1");
      $("#list_physical3").removeAttr("href data-toggle");
      $("#physical3").removeClass("active");
      $("#list_physical3").addClass("inactive_tab1");
      $("#list_physical4").removeClass("inactive_tab1");
      $("#list_physical4").addClass("active_tab1 active");
      $("#list_physical4").attr("href", "#physical4");
      $("#list_physical4").attr("data-toggle", "tab");
      $("#physical4").addClass("active in");

    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    crearJugadorcommercial();
    crearDrivercommercial();
    setProgressBar(++current);
  });

  $("#previous_btn_physical4").click(function () {
    $("#list_physical4").removeClass("active active_tab1");
    $("#list_physical4").removeAttr("href data-toggle");
    $("#physical4").removeClass("active in");
    $("#list_physical4").addClass("inactive_tab1");

    $("#list_list_physical3").removeClass("inactive_tab1");
    $("#list_list_physical3").addClass("active_tab1 active");
    $("#list_list_physical3").attr("href", "#physical3");
    $("#list_list_physical3").attr("data-toggle", "tab");
    $("#physical3").addClass("active in");
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    setProgressBar(--current);
  });

  $("#btn_physical4").click(function () {
    var error_optioncov = "";

    if ($.trim($("#optioncov").val()).length == 0) {
      error_optioncov = "optioncov is required";
      $("#error_optioncov").text(error_optioncov);
      $("#optioncov").addClass("has-error");
    } else {
      error_optioncov = "";
      $("#error_optioncov").text(error_optioncov);
      $("#optioncov").removeClass("has-error");
    }

    if (error_optioncov != "") {
      return false;
    } else {
      $("#list_physical4").removeClass("active active_tab1");
      $("#list_physical4").removeAttr("href data-toggle");
      $("#physical4").removeClass("active");
      $("#list_physical4").addClass("inactive_tab1");

      $("#list_physical5").removeClass("inactive_tab1");
      $("#list_physical5").addClass("active_tab1 active");
      $("#list_physical5").attr("href", "#physical5");
      $("#list_physical5").attr("data-toggle", "tab");
      $("#physical5").addClass("active in");
    }
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    setProgressBar(++current);
  });

  $("#previous_btn_physical5").click(function () {
    $("#list_physical5").removeClass("active active_tab1");
    $("#list_physical5").removeAttr("href data-toggle");
    $("#physical5").removeClass("active in");
    $("#list_physical5").addClass("inactive_tab1");

    $("#list_list_physical4").removeClass("inactive_tab1");
    $("#list_list_physical4").addClass("active_tab1 active");
    $("#list_list_physical4").attr("href", "#physical4");
    $("#list_list_physical4").attr("data-toggle", "tab");
    $("#physical4").addClass("active in");
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    setProgressBar(--current);
  });

  $("#btn_physical5").click(function () {
    var pulsado = false; //variable de comprobación
    var opciones = document.formulario.claims; //array de elementos
    var elegido = -1; //número del elemento elegido en el array
    for (i = 0; i < opciones.length; i++) {
      //bucle de comprobación
      if (opciones[i].checked == true) {
        pulsado = true;
        elegido = i; //número del elemento elegido en el array
      }
    }
    var error_yesno = "";
    error_yesno = "Button is required";
    if (pulsado == true) {
      miOpcion = opciones[elegido].value;
    } else {
      //mensaje de formulario no válido.
      $("#error_yesno").text(error_yesno);
      $("#claims").addClass("has-error");
      return false; //el formulario no se envía.
    }

    if (pulsado == false) {
      return false;
    } else {
      $("#list_physical5").removeClass("active active_tab1");
      $("#list_physical5").removeAttr("href data-toggle");
      $("#physical5").removeClass("active");
      $("#list_physical5").addClass("inactive_tab1");

      $("#list_physical6").removeClass("inactive_tab1");
      $("#list_physical6").addClass("active_tab1 active");
      $("#list_physical6").attr("href", "#physical6");
      $("#list_physical6").attr("data-toggle", "tab");
      $("#physical6").addClass("active in");
    }
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    setProgressBar(++current);
  });

  $("#previous_btn_physical6").click(function () {
    $("#list_physical6").removeClass("active active_tab1");
    $("#list_physical6").removeAttr("href data-toggle");
    $("#physical6").removeClass("active in");
    $("#list_physical6").addClass("inactive_tab1");

    $("#list_list_physical5").removeClass("inactive_tab1");
    $("#list_list_physical5").addClass("active_tab1 active");
    $("#list_list_physical5").attr("href", "#physical5");
    $("#list_list_physical5").attr("data-toggle", "tab");
    $("#physical5").addClass("active in");
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
    setProgressBar(--current);
  });

  $("#btn_physical6").click(function () {
    var error_date = "";
    if ($.trim($("#from-datepicker").val()).length == 0) {
      error_date = "Date is required";
      $("#error_date").text(error_date);
      $("#from-datepicker").addClass("has-error");
    } else {
      error_date = "";
      $("#error_date").text(error_date);
      $("#from-datepicker").removeClass("has-error");
    }
    if (error_date != "") {
      return false;
    } else {
      $("#btn_physical6").attr("disabled", "disabled");
      $(document).css("cursor", "prgress");
      $("#register_form").submit();
    }
    //el step final
    //$("#list_physical6").removeClass("active active_tab1");
    //$("#list_physical6").removeAttr("href data-toggle");
    //$("#physical6").removeClass("active");
    //$("#list_physical6").addClass("inactive_tab1");
    //$("#list_finish").removeClass("inactive_tab1");
    //$("#list_finish").addClass("active_tab1 active");
    //$("#list_finish").attr("href", "#finish");
    //$("#list_finish").attr("data-toggle", "tab");
    //$("#finish").addClass("active in");
    //$("body, html").animate(
    //  {
    //    scrollTop: "0px",
    //  },
    //  300
    //);
    //setProgressBar(++current);
    //setTimeout(function () {
    //  window.location.href = "https://a15.9c0.myftpupload.com/quote/";
    //}, 700);
  });
});

$("#mibtn1").click(function () {
  $("#mibtn2").click(function () {
    $("#exampleModal").modal("hide");
  });
});

$("#mibtn2").click(function () {
  $("#mibtn1").click(function () {
    $("#exampleModal").modal("hide");
  });
});

// logica aplicada para el add More
var misJugadores = [];
var misDrivers = [];

var jugadores = document.getElementById("jugadores");
var drivers = document.getElementById("drivers");

// Creamos una clase llamada jugador con un constructor que reciba 3 párametros
class Jugador {
  constructor(year, make, value) {
    this.year = year;
    this.make = make;
    this.value = value;
  }
}

class Driver {
  constructor(fullnames, licence, bod, yearsexperience) {
    this.fullnames = fullnames;
    this.licence = licence;
    this.bod = bod;
    this.yearsexperience = yearsexperience;
  }
}

// Función para crear nuestro driver
function crearDriver() {
  var error_fullnames = "";
  var error_licence = "";
  var error_bod = "";
  var error_yearsexperience = "";

  if ($.trim($("#fullnames").val()).length == 0) {
    error_fullnames = "Full Names is required";
    $("#error_fullnames").text(error_fullnames);
    $("#fullnames").addClass("has-error");
  } else {
    error_fullnames = "";
    $("#error_fullnames").text(error_fullnames);
    $("#fullnames").removeClass("has-error");
  }

  if ($.trim($("#licence").val()).length == 0) {
    error_licence = "Licence is required";
    $("#error_licence").text(error_licence);
    $("#licence").addClass("has-error");
  } else {
    error_licence = "";
    $("#error_licence").text(error_licence);
    $("#licence").removeClass("has-error");
  }

  if ($.trim($("#bod").val()).length == 0) {
    error_bod = "BOD is required";
    $("#error_bod").text(error_bod);
    $("#bod").addClass("has-error");
  } else {
    error_bod = "";
    $("#error_bod").text(error_bod);
    $("#bod").removeClass("has-error");
  }

  if ($.trim($("#yearsexperience").val()).length == 0) {
    error_yearsexperience = "Years Experience is required";
    $("#error_yearsexperience").text(error_yearsexperience);
    $("#yearsexperience").addClass("has-error");
  } else {
    error_yearsexperience = "";
    $("#error_yearsexperience").text(error_yearsexperience);
    $("#yearsexperience").removeClass("has-error");
  }

  if (
    error_fullnames != "" ||
    error_licence != "" ||
    error_bod != "" ||
    error_yearsexperience != ""
  ) {
    return false;
  } else {
    var fullnames = document.getElementById("fullnames").value;
    var licence = document.getElementById("licence").value;
    var bod = document.getElementById("bod").value;
    var yearsexperience = document.getElementById("yearsexperience").value;
    // Creamos nuestro array
    var driver = new Driver(fullnames, licence, bod, yearsexperience);
    misDrivers.push(driver);
    actualizarDrivers();
    var elemento = document.getElementById("tabledrivers");
    elemento.className += "display-div";
  }
}

function actualizarDrivers() {
  // Limipamos la tabla para no repetir jugadores
  drivers.innerHTML = "";

  // Recorremos nuestros jugadores
  for (var i = 0; i < misDrivers.length; i++) {
    // Añadimos nuestros jugadores a la tabla
    drivers.innerHTML =
      drivers.innerHTML +
      "<tr>" +
      '<td class="col-md-3">' + misDrivers[i].fullnames +'<input type="hidden" name="driverfullnames[]" value="' + misDrivers[i].fullnames + '"/>' + "</td>" +
      '<td class="col-md-3">' + misDrivers[i].licence + '<input type="hidden" name="driverlicence[]" value="' + misDrivers[i].licence + '"/>' + "</td>"+
      '<td class="col-md-6">' + misDrivers[i].bod + '<input type="hidden" name="driverbod[]" value="' + misDrivers[i].bod + '"/>' + "</td>" +
      '<td class="col-md-6">' + misDrivers[i].yearsexperience+ '<input type="hidden" name="driveryearsexperience[]" value="' + misDrivers[i].yearsexperience + '"/>' + "</td>" +
      '<td class="col-md-1">' + '<button type="button" onclick="remove(event)" class="btn-delete">x<button/>';"</td>";+
      "</tr>;"
  }
  document.getElementById("fullnames").value = '';
  document.getElementById("licence").value = '';
  document.getElementById("bod").value = '';
  document.getElementById("yearsexperience").value = '';
}

function remove(e) {
  var tr = $(e.target).closest("tr");
  if ($(tr).index() >= 0) {
    misDrivers.splice($(tr).index(), 1);
  }

  $(tr).remove();
  console.log(JSON.stringify(misDrivers));
}

// Función para crear nuestro jugador
function crearJugador() { 
  var error_year = "";
  var error_make = "";
  var error_value = "";

  if ($.trim($("#year").val()).length == 0) {
    error_year = "Year is required";
    $("#error_year").text(error_year);
    $("#year").addClass("has-error");
  } else {
    error_year = "";
    $("#error_year").text(error_year);
    $("#year").removeClass("has-error");
  }

  if ($.trim($("#make").val()).length == 0) {
    error_make = "Make is required";
    $("#error_make").text(error_make);
    $("#make").addClass("has-error");
  } else {
    error_make = "";
    $("#error_make").text(error_make);
    $("#make").removeClass("has-error");
  }

  if ($.trim($("#value").val()).length == 0) {
    error_value = "Value is required";
    $("#error_value").text(error_value);
    $("#value").addClass("has-error");
  } else {
    error_value = "";
    $("#error_value").text(error_value);
    $("#value").removeClass("has-error");
  }

  if (error_year != "" || error_make != "" || error_value != "") {
    return false;
  } else {
    var year = document.getElementById("year").value;
    var make = document.getElementById("make").value;
    var value = document.getElementById("value").value;
    // Creamos nuestro array
    var jugador = new Jugador(year, make, value);
    misJugadores.push(jugador);
    actualizarJugadores();
    var elemento = document.getElementById("tablearrays");
    elemento.className += "display-div";
  }
}
function actualizarJugadores() { 
  // Limipamos la tabla para no repetir jugadores
  jugadores.innerHTML = "";
  // Recorremos nuestros jugadores
  for (var i = 0; i < misJugadores.length; i++) {
    // Añadimos nuestros jugadores a la tabla
    jugadores.innerHTML =
      jugadores.innerHTML +
      "<tr>" +
      '<td class="col-md-3">' + misJugadores[i].year +'<input type="hidden" name="yearjugadores[]" value="' + misJugadores[i].year + '"/>' + "</td>" +
      '<td class="col-md-3">' + misJugadores[i].make + '<input type="hidden" name="yearmake[]" value="' + misJugadores[i].make + '"/>' + "</td>"+
      '<td class="col-md-6">' + misJugadores[i].value + '<input type="hidden" name="yearvalue[]" value="' + misJugadores[i].value + '"/>' + "</td>" +
      '<td class="col-md-1">' + '<button type="button" onclick="removejugadores(event)" class="btn-delete">x<button/>';"</td>"; +
      "</tr>;"
  }
  document.getElementById("year").value = '';
  document.getElementById("make").value = '';
  document.getElementById("value").value = '';
}

function crearJugadorcommercial() {
    if (($.trim($("#year").val()).length != 0) || ($.trim($("#make").val()).length != 0) || ($.trim($("#value").val()).length != 0)) {
      var year = document.getElementById("year").value;
      var make = document.getElementById("make").value;
      var value = document.getElementById("value").value;
      // Creamos nuestro array
      var jugador = new Jugador(year, make, value);
      misJugadores.push(jugador);
      actualizarJugadores();
      var elemento = document.getElementById("tablearrays");
      elemento.className += "display-div";
      
    } else {
      return false;
    } 
      document.getElementById("year").value = '';
      document.getElementById("make").value = '';
      document.getElementById("value").value = '';
  
} 

function crearDrivercommercial() {
  if (($.trim($("#fullnames").val()).length != 0) || ($.trim($("#licence").val()).length != 0) || ($.trim($("#bod").val()).length != 0) || ($.trim($("#yearsexperience").val()).length != 0)) {
    var fullnames = document.getElementById("fullnames").value;
    var licence = document.getElementById("licence").value;
    var bod = document.getElementById("bod").value;
    var yearsexperience = document.getElementById("yearsexperience").value;
    // Creamos nuestro array
    var driver = new Driver(fullnames, licence, bod, yearsexperience);
    misDrivers.push(driver);
    actualizarDrivers();
    var elemento = document.getElementById("tabledrivers");
    elemento.className += "display-div";
    
  } else {
    return false;
  } 
    document.getElementById("fullnames").value = '';
    document.getElementById("licence").value = '';
    document.getElementById("bod").value = '';
    document.getElementById("yearsexperience").value = '';
} 


function removejugadores(e) {
  var tr = $(e.target).closest("tr");
  if ($(tr).index() >= 0) {
    misJugadores.splice($(tr).index(), 1);
  }

  $(tr).remove();
  console.log(JSON.stringify(misJugadores));
}

// inputs hacia arriba
const inputs = document.querySelectorAll(".fake_placeholder input");

inputs.forEach((input) => {
  //cuando entramos en el input
  input.onfocus = () => {
    //al elemento anterior (el span) le agregamos la clase que la reubica en top
    input.previousElementSibling.classList.add("reubicar");
  };

  //cuando salimos del input
  input.onblur = () => {
    //si no hay texto, le quitamos la clase reubicar,
    //para que se superponga con el input
    if (input.value.trim().length == 0)
      input.previousElementSibling.classList.remove("reubicar");
  };
});

// Nav efecto
/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#mainNav',
          offset: 74,
      });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });

});
