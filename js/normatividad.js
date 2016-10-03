
          d3.xml("imagenes/Normatividad.svg").mimeType("image/svg+xml").get(function(error, xml) {
              if (error) throw error;
              //document.body.appendChild(xml.documentElement);
              $("#normatividad").html(xml.documentElement.outerHTML);
              $(".prospectiva").mouseover(function() {
                  $(".prospectiva").css("stroke", "rgb(214, 115, 57)");
                  $("#svg_60").css("stroke", "rgb(115, 196, 199)");
                  $("#svg_61").css("stroke", "rgb(115, 196, 199)");
                  $("#svg_63").css("stroke", "rgb(115, 196, 199)");
                  
                  $("#svg_122").css("stroke", "rgb(115, 196, 199)");
                  $("#svg_132").css("stroke", "rgb(115, 196, 199)");
                  $("#svg_139").css("stroke", "rgb(115, 196, 199)");
                  $("#svg_142").css("stroke", "rgb(115, 196, 199)");
                  $("#svg_143").css("stroke", "rgb(115, 196, 199)");
                  $("#svg_145").css("stroke", "rgb(115, 196, 199)");
                  
                  $("#path150").css("stroke", "rgb(115, 196, 199)");
                  
                  $("#path154").css("stroke", "rgb(115, 196, 199)");
                  $("#path158").css("stroke", "rgb(115, 196, 199)");
                  $("#path160").css("stroke", "rgb(115, 196, 199)");
                  
                  $("#path176").css("stroke", "rgb(115, 196, 199)");
                  //alert("here");
              });

              /*$(".prospectiva").mouseout(function() {
                  $(".prospectiva").css("stroke", "rgb(200,197,196)");
                  $("#svg_60").css("stroke", "rgb(200,197,196)");
                  $("#svg_61").css("stroke", "rgb(158,156,155)");
                  $("#svg_63").css("stroke", "rgb(158,156,155)");

                  $("#svg_122").css("stroke", "rgb(255,167,149)");
                  $("#svg_132").css("stroke", "rgb(252,192,180)");
                  $("#svg_139").css("stroke", "rgb(254,208,200)");
                  $("#svg_142").css("stroke", "rgb(254,208,200)");
                  $("#svg_143").css("stroke", "rgb(255,167,149)");
                  $("#svg_145").css("stroke", "rgb(254,208,200)");

                  $("#path150").css("stroke", "rgb(211,235,211)");

                  $("#path154").css("stroke", "rgb(239,143,182)");
                  $("#path158").css("stroke", "rgb(239,143,182)");
                  $("#path160").css("stroke", "rgb(230,109,159)");

                  $("#path176").css("stroke", "rgb(206,184,76)");

              }); */

               $(".evaluacion").mouseover(function() {
                  $(".evaluacion").css("stroke", "rgb(224, 102, 102, 0.31)");
                  $("#svg_62").css("stroke", "rgb(216, 117, 117)");

                  $("#svg_122").css("stroke", "rgb(216, 117, 117)");
                  $("#svg_123").css("stroke", "rgb(216, 117, 117)");

                  $("#svg_155").css("stroke", "rgb(216, 117, 117)");
                  $("#path144").css("stroke", "rgb(216, 117, 117)");

                  $("#path154").css("stroke", "rgb(216, 117, 117)");
                  $("#path156").css("stroke", "rgb(216, 117, 117)");

                  $("#path170").css("stroke", "rgb(216, 117, 117)");
                  $("#path176").css("stroke", "rgb(216, 117, 117)");

              });
              $(".evaluacion").mouseout(function() {
                  $(".evaluacion").css("stroke", "rgb(200,197,196)");
                  $("#svg_62").css("stroke", "rgb(200,197,196)");

                  $("#svg_122").css("stroke", "rgb(255,167,149)");
                  $("#svg_123").css("stroke", "rgb(252,192,180)");

                  $("#svg_155").css("stroke", "rgb(211,235,211)");
                  $("#path144").css("stroke", "rgb(168,216,167)");

                  $("#path154").css("stroke", "rgb(239,143,182)");
                  $("#path156").css("stroke", "rgb(230,109,159)");

                  $("#path170").css("stroke", "rgb(214,196,118)");
                  $("#path176").css("stroke", "rgb(206,184,76)");

              });

              $(".prospera").mouseover(function() {
                  $(".prospera").css("stroke", "rgb(255, 253, 4, 0.30)");
                  $("#svg_51").css("stroke", "rgb(255, 214, 5)");
                  $("#svg_60").css("stroke", "rgb(255, 214, 5)");
                  $("#svg_61").css("stroke", "rgb(255, 214, 5)");
                  $("#path62").css("stroke", "rgb(255, 214, 5)");
                  $("#svg_63").css("stroke", "rgb(255, 214, 5)");

                  $("#svg_110").css("stroke", "rgb(255, 214, 5)");
                  $("#svg_113").css("stroke", "rgb(255, 214, 5)");
                  $("#svg_118").css("stroke", "rgb(255, 214, 5)");
                  $("#svg_122").css("stroke", "rgb(255, 214, 5)");
                  $("#svg_123").css("stroke", "rgb(255, 214, 5)");
                  $("#svg_125").css("stroke", "rgb(255, 214, 5)");
                  $("#svg_126").css("stroke", "rgb(255, 214, 5)");
                  $("#svg_127").css("stroke", "rgb(255, 214, 5)");
                  $("#svg_132").css("stroke", "rgb(255, 214, 5)");

                  $("#svg_155").css("stroke", "rgb(255, 214, 5)");
                  $("#path144").css("stroke", "rgb(255, 214, 5)");
                  $("#svg_157").css("stroke", "rgb(255, 214, 5)");
                  $("#path148").css("stroke", "rgb(255, 214, 5)");

                  $("#path154").css("stroke", "rgb(255, 214, 5)");
                  $("#path158").css("stroke", "rgb(255, 214, 5)");
                  $("#path160").css("stroke", "rgb(255, 214, 5)");
                  $("#path162").css("stroke", "rgb(255, 214, 5)");
                  $("#path166").css("stroke", "rgb(255, 214, 5)");
                  $("#path168").css("stroke", "rgb(255, 214, 5)");

                  $("#path170").css("stroke", "rgb(255, 214, 5)");
                  $("#path176").css("stroke", "rgb(255, 214, 5)");

              });

              $(".prospera").mouseout(function() {
                  $(".prospera").css("stroke", "rgb(200,197,196)");
                  $("#svg_51").css("stroke", "rgb(200,197,196)");
                  $("#svg_60").css("stroke", "rgb(200,197,196)");
                  $("#svg_61").css("stroke", "rgb(158,156,155)");
                  $("#path62").css("stroke", "rgb(200,197,196)");
                  $("#svg_63").css("stroke", "rgb(158,156,155)");

                  $("#svg_110").css("stroke", "rgb(255,167,149)");
                  $("#svg_113").css("stroke", "rgb(255,167,149)");
                  $("#svg_118").css("stroke", "rgb(254,208,200)");
                  $("#svg_122").css("stroke", "rgb(255,167,149)");
                  $("#svg_123").css("stroke", "rgb(252,192,180)");
                  $("#svg_125").css("stroke", "rgb(255,167,149)");
                  $("#svg_126").css("stroke", "rgb(252,192,180)");
                  $("#svg_127").css("stroke", "rgb(254,208,200)");
                  $("#svg_132").css("stroke", "rgb(252,192,180)");

                  $("#svg_155").css("stroke", "rgb(211,235,211)");
                  $("#path144").css("stroke", "rgb(168,216,167)");
                  $("#svg_157").css("stroke", "rgb(211,235,211)");
                  $("#path148").css("stroke", "rgb(168,216,167)");

                  $("#path154").css("stroke", "rgb(239,143,182)");
                  $("#path158").css("stroke", "rgb(239,143,182)");
                  $("#path160").css("stroke", "rgb(230,109,159)");
                  $("#path162").css("stroke", "rgb(239,143,182)");
                  $("#path166").css("stroke", "rgb(230,109,159)");
                  $("#path168").css("stroke", "rgb(239,143,182)");

                  $("#path170").css("stroke", "rgb(214,196,118)");
                  $("#path176").css("stroke", "rgb(206,184,76)");

              });

               $(".gestion").mouseover(function() {
                  $(".gestion").css("stroke", "rgb(142, 124, 195, 0.4)");
                  $("#svg_62").css("stroke", "rgb(143, 125, 196)");
                  $("#svg_64").css("stroke", "rgb(143, 125, 196)");
                  $("#svg_106").css("stroke", "rgb(143, 125, 196)");

                  $("#svg_122").css("stroke", "rgb(143, 125, 196)");
                  $("#svg_123").css("stroke", "rgb(143, 125, 196)");
                  $("#svg_125").css("stroke", "rgb(143, 125, 196)");
                  $("#svg_126").css("stroke", "rgb(143, 125, 196)");
                  $("#svg_127").css("stroke", "rgb(143, 125, 196)");
                  $("#svg_128").css("stroke", "rgb(143, 125, 196)");
                  $("#svg_129").css("stroke", "rgb(143, 125, 196)");
                  $("#svg_132").css("stroke", "rgb(143, 125, 196)");
                  $("#svg_135").css("stroke", "rgb(143, 125, 196)");

                  $("#svg_155").css("stroke", "rgb(143, 125, 196)");
                  $("#path144").css("stroke", "rgb(143, 125, 196)");
                  $("#path148").css("stroke", "rgb(143, 125, 196)");
                  $("#path150").css("stroke", "rgb(143, 125, 196)");
                  $("#path152").css("stroke", "rgb(143, 125, 196)");

                  $("#path156").css("stroke", "rgb(143, 125, 196)");
                  $("#path162").css("stroke", "rgb(143, 125, 196)");
                  $("#path164").css("stroke", "rgb(143, 125, 196)");
                  $("#path166").css("stroke", "rgb(143, 125, 196)");
                  $("#path168").css("stroke", "rgb(143, 125, 196)");

                  $("#path170").css("stroke", "rgb(143, 125, 196)");

              });

              $(".gestion").mouseout(function() {
                  $(".prospera").css("stroke", "rgb(200,197,196)");
                  $("#svg_62").css("stroke", "rgb(200,197,196)");
                  $("#svg_64").css("stroke", "rgb(200,197,196)");
                  $("#svg_106").css("stroke", "rgb(200,197,196)");

                  $("#svg_122").css("stroke", "rgb(255,167,149)");
                  $("#svg_123").css("stroke", "rgb(252,192,180)");
                  $("#svg_125").css("stroke", "rgb(255,167,149)");
                  $("#svg_126").css("stroke", "rgb(252,192,180)");
                  $("#svg_127").css("stroke", "rgb(254,208,200)");
                  $("#svg_128").css("stroke", "rgb(255,167,149)");
                  $("#svg_129").css("stroke", "rgb(252,192,180)");
                  $("#svg_132").css("stroke", "rgb(252,192,180)");
                  $("#svg_135").css("stroke", "rgb(252,192,180)");

                  $("#svg_155").css("stroke", "rgb(211,235,211)");
                  $("#path144").css("stroke", "rgb(168,216,167)");
                  $("#path148").css("stroke", "rgb(168,216,167)");
                  $("#path150").css("stroke", "rgb(211,235,211)");
                  $("#path152").css("stroke", "rgb(168,216,167)");

                  $("#path156").css("stroke", "rgb(230,109,159)");
                  $("#path162").css("stroke", "rgb(239,143,182)");
                  $("#path164").css("stroke", "rgb(230,109,159)");
                  $("#path166").css("stroke", "rgb(239,143,182)");
                  $("#path168").css("stroke", "rgb(230,109,159)");

                  $("#path170").css("stroke", "rgb(214,196,118)");

              });

               $(".financiamiento").mouseover(function() {
                  $(".financiamiento").css("stroke", "rgb(202, 162, 100, 0.5)");
                  $("#svg_62").css("stroke", "rgb(202, 162, 101)");
                  $("#svg_97").css("stroke", "rgb(202, 162, 101)");

                  $("#svg_122").css("stroke", "rgb(202, 162, 101)");
                  $("#svg_134").css("stroke", "rgb(202, 162, 101)");
                  $("#svg_148").css("stroke", "rgb(202, 162, 101)");
                  $("#svg_153").css("stroke", "rgb(202, 162, 101)");

                  $("#path144").css("stroke", "rgb(202, 162, 101)");
                  $("#path150").css("stroke", "rgb(202, 162, 101)");

                  $("#path156").css("stroke", "rgb(202, 162, 101)");
                  $("#path158").css("stroke", "rgb(202, 162, 101)");
                  $("#path160").css("stroke", "rgb(202, 162, 101)");

                  $("#path170").css("stroke", "rgb(202, 162, 101)");
                  $("#path176").css("stroke", "rgb(202, 162, 101)");

              });

              $(".financiamiento").mouseout(function() {
                  $(".financiamiento").css("stroke", "rgb(200,197,196)");
                  $("#svg_62").css("stroke", "rgb(200,197,196)");
                  $("#svg_97").css("stroke", "rgb(158,156,155)");

                  $("#svg_122").css("stroke", "rgb(255,167,149)");
                  $("#svg_134").css("stroke", "rgb(252,192,180)");
                  $("#svg_148").css("stroke", "rgb(255,167,149)");
                  $("#svg_153").css("stroke", "rgb(252,192,180)");

                  $("#path144").css("stroke", "rgb(168,216,167)");
                  $("#path150").css("stroke", "rgb(211,235,211)");

                  $("#path156").css("stroke", "rgb(230,109,159)");
                  $("#path158").css("stroke", "rgb(239,143,182)");
                  $("#path160").css("stroke", "rgb(230,109,159)");

                  $("#path170").css("stroke", "rgb(214,196,118)");
                  $("#path176").css("stroke", "rgb( 206,184,76)");


              });

              $(".afiliacion").mouseover(function() {
                  $(".afiliacion").css("stroke", "rgb(255, 174, 52, 0.41)");
                  $("#svg_60").css("stroke", "rgb(255, 174, 52)");
                  $("#svg_61").css("stroke", "rgb(255, 174, 52)");
                  $("#svg_62").css("stroke", "rgb(255, 174, 52)");
                  $("#svg_63").css("stroke", "rgb(255, 174, 52)");

                  $("#svg_116").css("stroke", "rgb(255, 174, 52)");
                  $("#svg_117").css("stroke", "rgb(255, 174, 52)");
                  $("#svg_119").css("stroke", "rgb(255, 174, 52)");
                  $("#svg_122").css("stroke", "rgb(255, 174, 52)");
                  $("#svg_132").css("stroke", "rgb(255, 174, 52)");

                  $("#svg_155").css("stroke", "rgb(255, 174, 52)");
                  $("#path144").css("stroke", "rgb(255, 174, 52)");
                  $("#path148").css("stroke", "rgb(255, 174, 52)");

                  $("#path156").css("stroke", "rgb(255, 174, 52)");
                  $("#path158").css("stroke", "rgb(255, 174, 52)");

                  $("#path170").css("stroke", "rgb(255, 174, 52)");
                  $("#path172").css("stroke", "rgb(255, 174, 52)");

              });

              $(".afiliacion").mouseout(function() {
                  $(".afiliacion").css("stroke", "rgb(200,197,196)");
                  $("#svg_60").css("stroke", "rgb(200,197,196)");
                  $("#svg_61").css("stroke", "rgb(158,156,155)");
                  $("#svg_62").css("stroke", "rgb(200,197,196)");
                  $("#svg_63").css("stroke", "rgb(158,156,155)");

                  $("#svg_116").css("stroke", "rgb(255,167,149)");
                  $("#svg_117").css("stroke", "rgb(252,192,180)");
                  $("#svg_119").css("stroke", "rgb(255,167,149)");
                  $("#svg_122").css("stroke", "rgb(255,167,149)");
                  $("#svg_132").css("stroke", "rgb(252,192,180)");

                  $("#svg_155").css("stroke", "rgb(211,235,211)");
                  $("#path144").css("stroke", "rgb(168,216,167)");
                  $("#path148").css("stroke", "rgb(168,216,167)");

                  $("#path156").css("stroke", "rgb(230,109,159)");
                  $("#path158").css("stroke", "rgb(239,143,182)");

                  $("#path170").css("stroke", "rgb(214,196,118)");
                  $("#path172").css("stroke", "rgb(206,184,76)");

              });

               $(".admin").mouseover(function() {
                  $(".admin").css("stroke", "rgb(80, 166, 225, 0.53)");
                  $("#svg_60").css("stroke", "rgb(79, 166, 224)");

                  $("#svg_142").css("stroke", "rgb(79, 166, 224)");
                  $("#svg_143").css("stroke", "rgb(79, 166, 224)");
                  $("#svg_146").css("stroke", "rgb(79, 166, 224)");
                  $("#svg_147").css("stroke", "rgb(79, 166, 224)");

                  $("#path150").css("stroke", "rgb(79, 166, 224)");

                  $("#path160").css("stroke", "rgb(79, 166, 224)");

                  $("#path170").css("stroke", "rgb(79, 166, 224)");

              });

              $(".admin").mouseout(function() {
                  $(".admin").css("stroke", "rgb(200,197,196)");
                  $("#svg_60").css("stroke", "rgb(200,197,196)");

                  $("#svg_142").css("stroke", "rgb(254,208,200)");
                  $("#svg_143").css("stroke", "rgb(255,167,149)");
                  $("#svg_146").css("stroke", "rgb(255,167,149)");
                  $("#svg_147").css("stroke", "rgb(252,192,180)");

                  $("#path150").css("stroke", "rgb(211,235,211)");

                  $("#path160").css("stroke", "rgb(230,109,159)");

                  $("#path170").css("stroke", "rgb(214,196,118)");

              });


              // CLICK
              $(".prospectiva").click(function() {
                    alert( "Handler for .click() called." );
                  $(".prospectiva").css("stroke", "rgb(214, 115, 57)");
                  $("#svg_60").css("stroke", "rgb(115, 196, 199)");
                  $("#svg_61").css("stroke", "rgb(115, 196, 199)");
                  $("#svg_63").css("stroke", "rgb(115, 196, 199)");

                  $("#svg_122").css("stroke", "rgb(115, 196, 199)");
                  $("#svg_132").css("stroke", "rgb(115, 196, 199)");
                  $("#svg_139").css("stroke", "rgb(115, 196, 199)");
                  $("#svg_142").css("stroke", "rgb(115, 196, 199)");
                  $("#svg_143").css("stroke", "rgb(115, 196, 199)");
                  $("#svg_145").css("stroke", "rgb(115, 196, 199)");

                  $("#path150").css("stroke", "rgb(115, 196, 199)");

                  $("#path154").css("stroke", "rgb(115, 196, 199)");
                  $("#path158").css("stroke", "rgb(115, 196, 199)");
                  $("#path160").css("stroke", "rgb(115, 196, 199)");

                  $("#path176").css("stroke", "rgb(115, 196, 199)");
                  //alert("here");
              });


          });
