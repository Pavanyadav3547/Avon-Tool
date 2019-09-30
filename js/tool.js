
jQuery( ".box" ).click(function() {
    jQuery( this ).addClass( "selected" ).siblings(".selected").removeClass("selected");
});

// jQuery(".submit").click(function() {
//
//     var n1 = jQuery(".a.selected").length;
//
//     var n2 = jQuery(".b.selected").length;
//
//     var n3 = jQuery(".c.selected").length;
//
//     var n4 = jQuery(".d.selected").length;
//
//
//
//     if ((n1 >= n2)&&(n1 >= n3)&&(n1 >= n4)) {
//         jQuery( ".result" ).html("                        <div class=\"row\">\n" +
//             "                            <div class=\"col-md-12\">\n" +
//             "                                <h2 class=\"title\">You have oily skin</h2>\n" +
//             "                                <!--<div class=\"result\"></div>-->\n" +
//             "\n" +
//             "                            </div>\n" +
//             "\n" +
//             "                            <div class=\"row\">\n" +
//             "                                <div class=\"col-md-12\">\n" +
//             "                                    <p>\n" +
//             "                                        Your oily skin is caused by over-active sebaceous glands that produce excessive amounts of skin oil, called “sebum.” This happens when the balance of is not right and your skin starts thinking it is getting dry and over compensates with excessive oil production. This happens when your skin is exposed to too many products that upset its own natural balance and trigger the over-production of oil. In order to regain the balance – using the right product which is specially formulated to target oily skin in very important. Use the regimen of cleanser, toner, day cream and night cream daily once in the morning and once in the night before going to sleep\n" +
//             "                                    </p>\n" +
//             "                                </div>\n" +
//             "                            </div>\n" +
//             "\n" +
//             "                            <div class=\"row\">\n" +
//             "                                <div class=\"col-md-12\">\n" +
//             "                                    <h2 class=\"title\">What we recommend</h2>\n" +
//             "                                </div>\n" +
//             "                            </div>\n" +
//             "\n" +
//             "                            <div class=\"row\">\n" +
//             "                                <div class=\"col-md-12\">\n" +
//             "                                    <div class=\"col-md-4\">\n" +
//             "                                        <figure class=\"re-product\">\n" +
//             "                                            <img src=\"images/product-1.jpg\" alt=\"\" class=\"img-fluid\">\n" +
//             "\n" +
//             "                                            <figcaption>\n" +
//             "                                                Avon nutraeffects Balance Day Cream <br>\n" +
//             "                                                broad Spectrum\n" +
//             "                                            </figcaption>\n" +
//             "\n" +
//             "                                        </figure>\n" +
//             "                                    </div>\n" +
//             "                                    <div class=\"col-md-4\">\n" +
//             "                                        <figure class=\"re-product\">\n" +
//             "                                            <img src=\"images/product-1.jpg\" alt=\"\" class=\"img-fluid\">\n" +
//             "\n" +
//             "                                            <figcaption>\n" +
//             "                                                Avon nutraeffects Balance Day Cream <br>\n" +
//             "                                                broad Spectrum\n" +
//             "                                            </figcaption>\n" +
//             "\n" +
//             "                                        </figure>\n" +
//             "                                    </div>\n" +
//             "\n" +
//             "                                    <div class=\"col-md-4\">\n" +
//             "                                        <figure class=\"re-product\">\n" +
//             "                                            <img src=\"images/product-1.jpg\" alt=\"\" class=\"img-fluid\">\n" +
//             "\n" +
//             "                                            <figcaption>\n" +
//             "                                                Avon nutraeffects Balance Day Cream <br>\n" +
//             "                                                broad Spectrum\n" +
//             "                                            </figcaption>\n" +
//             "\n" +
//             "                                        </figure>\n" +
//             "                                    </div>\n" +
//             "\n" +
//             "                                </div>\n" +
//             "                            </div>\n" +
//             "\n" +
//             "                        </div>\n");
//     }
//     if ((n2 > n1)&&(n2 >= n3)&&(n2 >= n4)) {
//         jQuery( ".result" ).html("                        <div class=\"row\">\n" +
//             "                            <div class=\"col-md-12\">\n" +
//             "                                <h2 class=\"title\">You have Dry Skin</h2>\n" +
//             "                                <!--<div class=\"result\"></div>-->\n" +
//             "\n" +
//             "                            </div>\n" +
//             "\n" +
//             "                            <div class=\"row\">\n" +
//             "                                <div class=\"col-md-12\">\n" +
//             "                                    <p>\n" +
//             "                                        Your skin can crack, peel, or become itchy, irritated, or inflamed. If it’s dry to very dry skin. Dry skin may be caused or made worse by weather, aging, indoor heating and other environmental stress like UV radiations. Products like soaps, cosmetics and cleanser also has a bad impact which are meant to remove excess oil i.e. not meant for dry to normal skin. Using the right formulated product which to restore and increases the ability to retain the lost moisture of the skin. Use the regimen of cleanser, toner, day cream and night cream daily once in the morning and once in the night before going to sleep\n" +
//             "                                    </p>\n" +
//             "                                </div>\n" +
//             "                            </div>\n" +
//             "\n" +
//             "                            <div class=\"row\">\n" +
//             "                                <div class=\"col-md-12\">\n" +
//             "                                    <h2 class=\"title\">What we recommend</h2>\n" +
//             "                                </div>\n" +
//             "                            </div>\n" +
//             "\n" +
//             "                            <div class=\"row\">\n" +
//             "                                <div class=\"col-md-12\">\n" +
//             "                                    <div class=\"col-md-4\">\n" +
//             "                                        <figure class=\"re-product\">\n" +
//             "                                            <img src=\"images/product-1.jpg\" alt=\"\" class=\"img-fluid\">\n" +
//             "\n" +
//             "                                            <figcaption>\n" +
//             "                                                Avon nutraeffects Balance Day Cream <br>\n" +
//             "                                                broad Spectrum\n" +
//             "                                            </figcaption>\n" +
//             "\n" +
//             "                                        </figure>\n" +
//             "                                    </div>\n" +
//             "                                    <div class=\"col-md-4\">\n" +
//             "                                        <figure class=\"re-product\">\n" +
//             "                                            <img src=\"images/product-1.jpg\" alt=\"\" class=\"img-fluid\">\n" +
//             "\n" +
//             "                                            <figcaption>\n" +
//             "                                                Avon nutraeffects Balance Day Cream <br>\n" +
//             "                                                broad Spectrum\n" +
//             "                                            </figcaption>\n" +
//             "\n" +
//             "                                        </figure>\n" +
//             "                                    </div>\n" +
//             "\n" +
//             "                                    <div class=\"col-md-4\">\n" +
//             "                                        <figure class=\"re-product\">\n" +
//             "                                            <img src=\"images/product-1.jpg\" alt=\"\" class=\"img-fluid\">\n" +
//             "\n" +
//             "                                            <figcaption>\n" +
//             "                                                Avon nutraeffects Balance Day Cream <br>\n" +
//             "                                                broad Spectrum\n" +
//             "                                            </figcaption>\n" +
//             "\n" +
//             "                                        </figure>\n" +
//             "                                    </div>\n" +
//             "\n" +
//             "                                </div>\n" +
//             "                            </div>\n" +
//             "\n" +
//             "                        </div>\n") ;
//     }
//
//     if ((n3 > n1)&&(n3 > n2)&&(n3 >= n4)) {
//         jQuery( ".result" ).html("                        <div class=\"row\">\n" +
//             "                            <div class=\"col-md-12\">\n" +
//             "                                <h2 class=\"title\">You have Combination of Oily and Dry</h2>\n" +
//             "                                <!--<div class=\"result\"></div>-->\n" +
//             "\n" +
//             "                            </div>\n" +
//             "\n" +
//             "                            <div class=\"row\">\n" +
//             "                                <div class=\"col-md-12\">\n" +
//             "                                    <p>\n" +
//             "                                        You have the most common skin type. About 70% of people have this skin type. Combination skin is dry in some parts and oily in other location. T-zone (nose, forehead, chin area of your face) are typically will be oily and other parts of your face will be dry-normal. Taking care of combination skin can be very tricky. Using the right formulated product which is able to target oily skin zones without disturbing the balance of other areas become important. Use the regimen of cleanser, toner, day cream and night cream daily once in the morning and once in the night before going to sleep”\n" +
//             "                                    </p>\n" +
//             "                                </div>\n" +
//             "                            </div>\n" +
//             "\n" +
//             "                            <div class=\"row\">\n" +
//             "                                <div class=\"col-md-12\">\n" +
//             "                                    <h2 class=\"title\">What we recommend</h2>\n" +
//             "                                </div>\n" +
//             "                            </div>\n" +
//             "\n" +
//             "                            <div class=\"row\">\n" +
//             "                                <div class=\"col-md-12\">\n" +
//             "                                    <div class=\"col-md-4\">\n" +
//             "                                        <figure class=\"re-product\">\n" +
//             "                                            <img src=\"images/product-1.jpg\" alt=\"\" class=\"img-fluid\">\n" +
//             "\n" +
//             "                                            <figcaption>\n" +
//             "                                                Avon nutraeffects Balance Day Cream <br>\n" +
//             "                                                broad Spectrum\n" +
//             "                                            </figcaption>\n" +
//             "\n" +
//             "                                        </figure>\n" +
//             "                                    </div>\n" +
//             "                                    <div class=\"col-md-4\">\n" +
//             "                                        <figure class=\"re-product\">\n" +
//             "                                            <img src=\"images/product-1.jpg\" alt=\"\" class=\"img-fluid\">\n" +
//             "\n" +
//             "                                            <figcaption>\n" +
//             "                                                Avon nutraeffects Balance Day Cream <br>\n" +
//             "                                                broad Spectrum\n" +
//             "                                            </figcaption>\n" +
//             "\n" +
//             "                                        </figure>\n" +
//             "                                    </div>\n" +
//             "\n" +
//             "                                    <div class=\"col-md-4\">\n" +
//             "                                        <figure class=\"re-product\">\n" +
//             "                                            <img src=\"images/product-1.jpg\" alt=\"\" class=\"img-fluid\">\n" +
//             "\n" +
//             "                                            <figcaption>\n" +
//             "                                                Avon nutraeffects Balance Day Cream <br>\n" +
//             "                                                broad Spectrum\n" +
//             "                                            </figcaption>\n" +
//             "\n" +
//             "                                        </figure>\n" +
//             "                                    </div>\n" +
//             "\n" +
//             "                                </div>\n" +
//             "                            </div>\n" +
//             "\n" +
//             "                        </div>\n");
//     }
//
//     if ((n4 > n1)&&(n4 > n2)&&(n4 > n3)) {
//         jQuery( ".result" ).html("                        <div class=\"row\">\n" +
//             "                            <div class=\"col-md-12\">\n" +
//             "                                <h2 class=\"title\">You have Normal Skin</h2>\n" +
//             "                                <!--<div class=\"result\"></div>-->\n" +
//             "\n" +
//             "                            </div>\n" +
//             "\n" +
//             "                            <div class=\"row\">\n" +
//             "                                <div class=\"col-md-12\">\n" +
//             "                                    <p>\n" +
//             "                                        Use the regimen of cleanser, toner, day cream and night cream daily once in the morning and once in the night before going to sleep to best maintain your skin the way\n" +
//             "                                    </p>\n" +
//             "                                </div>\n" +
//             "                            </div>\n" +
//             "\n" +
//             "                            <div class=\"row\">\n" +
//             "                                <div class=\"col-md-12\">\n" +
//             "                                    <h2 class=\"title\">What we recommend</h2>\n" +
//             "                                </div>\n" +
//             "                            </div>\n" +
//             "\n" +
//             "                            <div class=\"row\">\n" +
//             "                                <div class=\"col-md-12\">\n" +
//             "                                    <div class=\"col-md-4\">\n" +
//             "                                        <figure class=\"re-product\">\n" +
//             "                                            <img src=\"images/product-1.jpg\" alt=\"\" class=\"img-fluid\">\n" +
//             "\n" +
//             "                                            <figcaption>\n" +
//             "                                                Avon nutraeffects Balance Day Cream <br>\n" +
//             "                                                broad Spectrum\n" +
//             "                                            </figcaption>\n" +
//             "\n" +
//             "                                        </figure>\n" +
//             "                                    </div>\n" +
//             "                                    <div class=\"col-md-4\">\n" +
//             "                                        <figure class=\"re-product\">\n" +
//             "                                            <img src=\"images/product-1.jpg\" alt=\"\" class=\"img-fluid\">\n" +
//             "\n" +
//             "                                            <figcaption>\n" +
//             "                                                Avon nutraeffects Balance Day Cream <br>\n" +
//             "                                                broad Spectrum\n" +
//             "                                            </figcaption>\n" +
//             "\n" +
//             "                                        </figure>\n" +
//             "                                    </div>\n" +
//             "\n" +
//             "                                    <div class=\"col-md-4\">\n" +
//             "                                        <figure class=\"re-product\">\n" +
//             "                                            <img src=\"images/product-1.jpg\" alt=\"\" class=\"img-fluid\">\n" +
//             "\n" +
//             "                                            <figcaption>\n" +
//             "                                                Avon nutraeffects Balance Day Cream <br>\n" +
//             "                                                broad Spectrum\n" +
//             "                                            </figcaption>\n" +
//             "\n" +
//             "                                        </figure>\n" +
//             "                                    </div>\n" +
//             "\n" +
//             "                                </div>\n" +
//             "                            </div>\n" +
//             "\n" +
//             "                        </div>\n");
//     }
//
//
// });

// jQuery(window).load(function() {
//     jQuery("html, body").animate({ scrollTop: jQuery(document).height() }, 1000);
// });

//

// Listen to owl events:

jQuery(function() {
    var owl = jQuery('.owl-carousel');
    owl.on('changed.owl.carousel', function (event) {
        var currentItem = event.item.index;
        // window.location.hash = currentItem + 1;
        console.log(currentItem);

        if (currentItem === 6) {
                jQuery("html, body").animate({ scrollTop: jQuery('#result').offset().top
            }, 1000);
            // jQuery(".submit").click(function() {

                var n1 = jQuery(".a.selected").length;

                var n2 = jQuery(".b.selected").length;

                var n3 = jQuery(".c.selected").length;

                var n4 = jQuery(".d.selected").length;



                if ((n1 >= n2)&&(n1 >= n3)&&(n1 >= n4)) {
                    jQuery( ".result" ).html("                        <div class=\"row\">\n" +
                        "                            <div class=\"col-md-12\">\n" +
                        "                                <h2 class=\"title\">You have oily skin</h2>\n" +
                        "                                <!--<div class=\"result\"></div>-->\n" +
                        "\n" +
                        "                            </div>\n" +
                        "\n" +
                        "                            <div class=\"row\">\n" +
                        "                                <div class=\"col-md-12\">\n" +
                        "                                    <p>\n" +
                        "                                        Oily skin is characterized by the presence of excess oils on your skin. Your Oily skin is caused by over-active sebaceous glands that produce excessive amounts of skin oil, called “sebum.” This happens when the balance of is not right and your skin starts thinking it is getting dry and over compensates with excessive oil production. This happens when your skin is exposed to too many products that upset its own natural balance and trigger the over-production of oil. In order to regain the balance – using the right product which is specially formulated to target oily skin in very important.  Use the regimen of cleanser, toner, day cream and night cream daily once in the morning and once in the night before going to sleep.\n" +
                        "                                    </p>\n" +
                        "                                </div>\n" +
                        "                            </div>\n" +
                        "\n" +
                        "                            <div class=\"row\">\n" +
                        "                                <div class=\"col-md-12\">\n" +
                        "                                    <h2 class=\"title\">What we recommend</h2>\n" +
                        "                                </div>\n" +
                        "                            </div>\n" +
                        "\n" +
                        "                            <div class=\"row\">\n" +
                        "                                <div class=\"col-md-12\">\n" +
                        "                                    <div class=\"col-md-4\">\n" +
                        "                                        <figure class=\"re-product\">\n" +
                        "                                            <img src=\"images/combination/Avon-True-Nutra_Effects-Mattifying-Toner.png\" alt=\"\" class=\"img-fluid\">\n" +
                        "\n" +
                        "                                            <figcaption>\n" +
                        "                                                Avon Nutra Effects Mattifying Toner\n" +
                        "                                            </figcaption>\n" +
                        "\n" +
                        "                                        </figure>\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"col-md-4\">\n" +
                        "                                        <figure class=\"re-product\">\n" +
                        "                                            <img src=\"images/combination/PSCEU_001_SP_1195657FEB2717.png\" alt=\"\" class=\"img-fluid\">\n" +
                        "\n" +
                        "                                            <figcaption>\n" +
                        "                                                Avon Nutra Effects Mattifying Day cream SPF 15\n" +
                        "                                            </figcaption>\n" +
                        "\n" +
                        "                                        </figure>\n" +
                        "                                    </div>\n" +
                        "\n" +
                        "                                    <div class=\"col-md-4\">\n" +
                        "                                        <figure class=\"re-product\">\n" +
                        "                                            <img src=\"images/combination/PSCEU_001_SP_1195659FEB2717.png\" alt=\"\" class=\"img-fluid\">\n" +
                        "\n" +
                        "                                            <figcaption>\n" +
                        "                                                Avon Nutra Effects Mattifying GEL CREAM\n" +
                        "                                            </figcaption>\n" +
                        "\n" +
                        "                                        </figure>\n" +
                        "                                    </div>\n" +
                        "\n" +
                        "                                </div>\n" +
                        "                            </div>\n" +
                        "\n" +
                        "                        </div>\n");
                }

                if ((n2 > n1)&&(n2 >= n3)&&(n2 >= n4)) {
                    jQuery( ".result" ).html("                        <div class=\"row\">\n" +
                        "                            <div class=\"col-md-12\">\n" +
                        "                                <h2 class=\"title\">You have Dry Skin</h2>\n" +
                        "                                <!--<div class=\"result\"></div>-->\n" +
                        "\n" +
                        "                            </div>\n" +
                        "\n" +
                        "                            <div class=\"row\">\n" +
                        "                                <div class=\"col-md-12\">\n" +
                        "                                    <p>\n" +
                        "                                        Dry skin is characterised by a lack of moisture in its corneous layer, resulting in tightness and even flaking.  Your skin can crack, peel, or become itchy, irritated, or inflamed if it’s dry. Dry skin may be caused or made worse by weather, aging, indoor heating and other environmental stress like UV radiations. Products like soaps, cosmetics and cleanser also have a bad impact. Using the right formulated product which helps to restore and increase the ability to retain the lost moisture of the skin is very important. Use the regimen of cleanser, toner, day cream and night cream daily once in the morning and once in the night before going to sleep\n" +
                        "                                    </p>\n" +
                        "                                </div>\n" +
                        "                            </div>\n" +
                        "\n" +
                        "                            <div class=\"row\">\n" +
                        "                                <div class=\"col-md-12\">\n" +
                        "                                    <h2 class=\"title\">What we recommend</h2>\n" +
                        "                                </div>\n" +
                        "                            </div>\n" +
                        "\n" +
                        "                            <div class=\"row\">\n" +
                        "                                <div class=\"col-md-12\">\n" +
                        "                                    <div class=\"col-md-4\">\n" +
                        "                                        <figure class=\"re-product\">\n" +
                        "                                            <img src=\"images/dry-skin/Avon-True-Nutra_Effects-Hydra-Boost-Day-Toner.png\" alt=\"\" class=\"img-fluid\">\n" +
                        "\n" +
                        "                                            <figcaption>\n" +
                        "                                                Avon Nutra Effects HYDRA BOAST DAY TONER\n" +
                        "                                            </figcaption>\n" +
                        "\n" +
                        "                                        </figure>\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"col-md-4\">\n" +
                        "                                        <figure class=\"re-product\">\n" +
                        "                                            <img src=\"images/dry-skin/PSCEU_001_SP_1195653FEB2717.png\" alt=\"\" class=\"img-fluid\">\n" +
                        "\n" +
                        "                                            <figcaption>\n" +
                        "                                                Avon Nutra Effects HYDRA BOOST DAY Cream SPF 15 \n" +
                        "                                            </figcaption>\n" +
                        "\n" +
                        "                                        </figure>\n" +
                        "                                    </div>\n" +
                        "\n" +
                        "                                    <div class=\"col-md-4\">\n" +
                        "                                        <figure class=\"re-product\">\n" +
                        "                                            <img src=\"images/dry-skin/PSCEU_001_SP_1195655FEB2717.png\" alt=\"\" class=\"img-fluid\">\n" +
                        "\n" +
                        "                                            <figcaption>\n" +
                        "                                                Avon Nutra Effects HYDRA BOOST GEL CREAM\n" +
                        "                                            </figcaption>\n" +
                        "\n" +
                        "                                        </figure>\n" +
                        "                                    </div>\n" +
                        "\n" +
                        "                                </div>\n" +
                        "                            </div>\n" +
                        "\n" +
                        "                        </div>\n") ;
                }

                if ((n3 > n1)&&(n3 > n2)&&(n3 >= n4)) {
                    jQuery( ".result" ).html("                        <div class=\"row\">\n" +
                        "                            <div class=\"col-md-12\">\n" +
                        "                                <h2 class=\"title\">You have Combination of Oily and Dry</h2>\n" +
                        "                                <!--<div class=\"result\"></div>-->\n" +
                        "\n" +
                        "                            </div>\n" +
                        "\n" +
                        "                            <div class=\"row\">\n" +
                        "                                <div class=\"col-md-12\">\n" +
                        "                                    <p>\n" +
                        "                                        You have the most common skin type. Combination skin is rather dry in some parts of the body and oily in other localisations. About 70% of people have this skin type. Combination skin is dry in some parts and oily in others. T-zone (nose, forehead, chin area of your face) will be typically oily and other parts of your face will be dry-normal. Taking care of combination skin can be very tricky. Using the right formulated product, which is able to target oily skin zones without disturbing the balance of other areas becomes important. Use the regimen of cleanser, toner, day cream and night cream daily once in the morning and once in the night before going to sleep\n" +
                        "                                    </p>\n" +
                        "                                </div>\n" +
                        "                            </div>\n" +
                        "\n" +
                        "                            <div class=\"row\">\n" +
                        "                                <div class=\"col-md-12\">\n" +
                        "                                    <h2 class=\"title\">What we recommend</h2>\n" +
                        "                                </div>\n" +
                        "                            </div>\n" +
                        "\n" +
                        "                            <div class=\"row\">\n" +
                        "                                <div class=\"col-md-12\">\n" +
                        "                                    <div class=\"col-md-4\">\n" +
                        "                                        <figure class=\"re-product\">\n" +
                        "                                            <img src=\"images/combination/Avon-True-Nutra_Effects-Mattifying-Toner.png\" alt=\"\" class=\"img-fluid\">\n" +
                        "\n" +
                        "                                            <figcaption>\n" +
                        "                                                 Avon Nutra Effects Mattifying Toner\n" +
                        "                                            </figcaption>\n" +
                        "\n" +
                        "                                        </figure>\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"col-md-4\">\n" +
                        "                                        <figure class=\"re-product\">\n" +
                        "                                            <img src=\"images/combination/PSCEU_001_SP_1195657FEB2717.png\" alt=\"\" class=\"img-fluid\">\n" +
                        "\n" +
                        "                                            <figcaption>\n" +
                        "                                                Avon Nutra Effects Mattifying Day cream SPF 15" +
                        "                                            </figcaption>\n" +
                        "\n" +
                        "                                        </figure>\n" +
                        "                                    </div>\n" +
                        "\n" +
                        "                                    <div class=\"col-md-4\">\n" +
                        "                                        <figure class=\"re-product\">\n" +
                        "                                            <img src=\"images/combination/PSCEU_001_SP_1195659FEB2717.png\" alt=\"\" class=\"img-fluid\">\n" +
                        "\n" +
                        "                                            <figcaption>\n" +
                        "                                                Avon Nutra Effects Mattifying GEL CREAM\n" +
                        "                                            </figcaption>\n" +
                        "\n" +
                        "                                        </figure>\n" +
                        "                                    </div>\n" +
                        "\n" +
                        "                                </div>\n" +
                        "                            </div>\n" +
                        "\n" +
                        "                        </div>\n");
                }

                if ((n4 > n1)&&(n4 > n2)&&(n4 > n3)) {
                    jQuery( ".result" ).html("                        <div class=\"row\">\n" +
                        "                            <div class=\"col-md-12\">\n" +
                        "                                <h2 class=\"title\">You have Normal Skin</h2>\n" +
                        "                                <!--<div class=\"result\"></div>-->\n" +
                        "\n" +
                        "                            </div>\n" +
                        "\n" +
                        "                            <div class=\"row\">\n" +
                        "                                <div class=\"col-md-12\">\n" +
                        "                                    <p>\n" +
                        "                                        Normal skin displays a smooth texture and a rosy, clear surface, with fine pores. There are no visible blemishes, greasy patches or flaky areas. In order to keep your skin free from these, you should keep a constant check on your skin & use products which are skin friendly. You should also not miss out on the monthly exfoliation of your skin. Use the regimen of cleanser, toner, day cream and night cream daily once in the morning and once in the night before going to sleep to maintain your skin in the best way.\n" +
                        "                                    </p>\n" +
                        "                                </div>\n" +
                        "                            </div>\n" +
                        "\n" +
                        "                            <div class=\"row\">\n" +
                        "                                <div class=\"col-md-12\">\n" +
                        "                                    <h2 class=\"title\">What we recommend</h2>\n" +
                        "                                </div>\n" +
                        "                            </div>\n" +
                        "\n" +
                        "                            <div class=\"row\">\n" +
                        "                                <div class=\"col-md-12\">\n" +
                        "                                    <div class=\"col-md-4\">\n" +
                        "                                        <figure class=\"re-product\">\n" +
                        "                                            <img src=\"images/normal-skin/brightening-toner.png\" alt=\"\" class=\"img-fluid\">\n" +
                        "\n" +
                        "                                            <figcaption>\n" +
                        "                                                Avon Nutra Effects Brightening Toner\n" +
                        "                                            </figcaption>\n" +
                        "\n" +
                        "                                        </figure>\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"col-md-4\">\n" +
                        "                                        <figure class=\"re-product\">\n" +
                        "                                            <img src=\"images/normal-skin/day-cream_ageless.png\" alt=\"\" class=\"img-fluid\">\n" +
                        "\n" +
                        "                                            <figcaption>\n" +
                        "                                                Avon Nutra Effects Day Cream Ageless\n" +
                        "                                            </figcaption>\n" +
                        "\n" +
                        "                                        </figure>\n" +
                        "                                    </div>\n" +
                        "\n" +
                        "                                    <div class=\"col-md-4\">\n" +
                        "                                        <figure class=\"re-product\">\n" +
                        "                                            <img src=\"images/normal-skin/nutra-brightening.png\" alt=\"\" class=\"img-fluid\">\n" +
                        "\n" +
                        "                                            <figcaption>\n" +
                        "                                                Avon Nutra Effects Nutra Brightening\n" +
                        "                                            </figcaption>\n" +
                        "\n" +
                        "                                        </figure>\n" +
                        "                                    </div>\n" +
                        "\n" +
                        "                                </div>\n" +
                        "                            </div>\n" +
                        "\n" +
                        "                        </div>\n");
                }


            // });
            jQuery('.owl-nav').hide();
            // console.log('works');

        }
    });

});

jQuery(function(){

    var btnDisabled = jQuery('.owl-next').addClass('my-disabled');
    var box = jQuery('.box');
      box.each(function () {

          box.click(function() {
              // jQuery( this ).addClass( "selected" ).siblings(".selected").removeClass("selected");
              if(jQuery(this).hasClass('selected')){
                  btnDisabled.removeClass('my-disabled');
                  console.log(this);
              }
              else{
                  return false;
              }
          });
      });




});
