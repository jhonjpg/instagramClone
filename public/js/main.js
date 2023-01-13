$(document).ready(function() {

    $('.b-left').bxSlider({

        speed: 30,
        mode: "fade",
        auto: true,
        autoControls: false,
        stopAutoOnClick: false,
        pager: false,
        slideWidth: 550,

    });

    const habilitar = $("#enable");
    const enable = $("#enabl");


    const expresiones = {

        contrasena: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

    }

    if (habilitar.val() === expresiones.correo) {

        console.log(habilitar)

        let boton = $("#log");


        boton.css('background', 'blue')




    }


    // const expresiones = {

    //     contrasena: /^.{4,12}$/, // 4 a 12 digitos.
    //     correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

    // }

    // const boton = $("#log");

    // console.log(habilitar.val())


    // if (habilitar.val() == expresiones.correo && enable.val() == expresiones.contrasena) {

    //     let boton = $("#log");


    //     boton.css('background', 'blue')

    //     boton.attr({ disable: false })




    // }


});