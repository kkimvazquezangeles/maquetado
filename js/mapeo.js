
          d3.xml("imagenes/mapeo.svg").mimeType("image/svg+xml").get(function(error, xml) {
              if (error) throw error;
              //document.body.appendChild(xml.documentElement);
              $("#mapeo").html(xml.documentElement.outerHTML);
              //PROSPERA
              $("#svg_59").click(function() {
                  $("#svg_268").css({'fill':'#F6E82B','stroke':'#e0c556'});
                  $("#svg_310").css({'fill':'#F6E82B','stroke':'#e0c556'});
                  $("#svg_564").css({'fill':'#F6E82B','stroke':'#e0c556'});
                  $("#svg_1189").css({'fill':'#F6E82B','stroke':'#e0c556'});
                  $("#svg_606").css({'fill':'#F6E82B','stroke':'#e0c556'});
                  $("#svg_903").css({'fill':'#F6E82B','stroke':'#e0c556'});
                  $("#svg_1068").css({'fill':'#F6E82B','stroke':'#e0c556'});
                  $("#svg_528").css({'fill':'#F6E82B','stroke':'#e0c556'});
                  $("#svg_1542").css({'fill':'#F6E82B','stroke':'#e0c556'});
                  $("#svg_1446").css({'fill':'#F6E82B','stroke':'#e0c556'});
                  $("#svg_685").css({'fill':'#F6E82B','stroke':'#e0c556'});
                  $("#svg_936").css({'fill':'#F6E82B','stroke':'#e0c556'});
                  $("#svg_380").css({'fill':'#F6E82B','stroke':'#e0c556'});
                  $("#svg_428").css({'fill':'#F6E82B','stroke':'#e0c556'});

                  $("#svg_345").css({'fill':'#FFFFFF','stroke':'#f6e82b'});
                  $("#svg_460").css({'fill':'#FFFFFF','stroke':'#f6e82b'});
                  $("#svg_1611").css("stroke","#f6e82b");
                  $("#svg_1621").css("stroke","#f6e82b");
                  $("#svg_1604").css("stroke","#f6e82b");
                  $("#svg_1616").css("stroke","#f6e82b");
                  $("#svg_1606").css("stroke","#f6e82b");
                  $("#svg_1638").css("stroke","#f6e82b");
                  $("#svg_1626").css("stroke","#f6e82b");
                  $("#svg_1631").css("stroke","#f6e82b");
                  $("#svg_1643").css("stroke","#f6e82b");
                  $("#svg_1648").css("stroke","#f6e82b");
                  $("#svg_1658").css("stroke","#f6e82b");
                  $("#svg_1653").css("stroke","#f6e82b");
                  $("#svg_3").css("stroke","#f6e82b");
                  $("#svg_8").css("stroke","#f6e82b");
                  $("#svg_13").css("stroke","#f6e82b");
                  $("#svg_1673").css("stroke","#f6e82b");
                  $("#svg_1668").css("stroke","#f6e82b");
                  $("#svg_1663").css("stroke","#f6e82b");

                  $("#svg_1623").css("fill","#f6e82b");
                  $("#svg_1618").css("fill","#f6e82b");
                  $("#svg_1608").css("fill","#f6e82b");
                  $("#svg_1613").css("fill","#f6e82b");
                  $("#svg_1635").css("fill","#f6e82b");
                  $("#svg_1640").css("fill","#f6e82b");
                  $("#svg_1628").css("fill","#f6e82b");
                  $("#svg_1633").css("fill","#f6e82b");
                  $("#svg_1650").css("fill","#f6e82b");
                  $("#svg_1665").css("fill","#f6e82b");
                  $("#svg_1670").css("fill","#f6e82b");
                  $("#svg_1675").css("fill","#f6e82b");
                  $("#svg_1660").css("fill","#f6e82b");
                  $("#svg_1655").css("fill","#f6e82b");
                  $("#svg_5").css("fill","#f6e82b");
                  $("#svg_10").css("fill","#f6e82b");
                  $("#svg_15").css("fill","#f6e82b");
                  $("#svg_1645").css("fill","#f6e82b");

                  //alert("here"); fill:#009FE3;
              });



              /*$("#svg_59").mouseout(function() {
                  $("#svg_268").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_310").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_380").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_428").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_345").css("stroke","#E2E2E1");
                  $("#svg_460").css("stroke","#E2E2E1");

                  $("#svg_1673").css("stroke","#E2E2E1");
                  $("#svg_13").css("stroke","#E2E2E1");
                  $("#svg_15").css("fill","#E2E2E1");
                  $("#svg_8").css("stroke","#E2E2E1");
                  $("#svg_10").css("fill","#E2E2E1");
                  $("#svg_3").css("stroke","#E2E2E1");
                  $("#svg_5").css("fill","#E2E2E1");
                  $("#svg_1648").css("stroke","#E2E2E1");
                  $("#svg_1650").css("fill","#E2E2E1");
                  $("#svg_1626").css("stroke","#E2E2E1");
                  $("#svg_1628").css("fill","#E2E2E1");
                  $("#svg_1606").css("stroke","#E2E2E1");
                  $("#svg_1608").css("fill","#E2E2E1");
                  $("#svg_1616").css("stroke","#E2E2E1");
                  $("#svg_1618").css("fill","#E2E2E1");
                  $("#svg_1621").css("stroke","#E2E2E1");
                  $("#svg_1623").css("fill","#E2E2E1");
                  $("#svg_1611").css("stroke","#E2E2E1");
                  $("#svg_1613").css("fill","#E2E2E1");
                  $("#svg_1638").css("stroke","#E2E2E1");
                  $("#svg_1635").css("fill","#E2E2E1");
                  $("#svg_1643").css("stroke","#E2E2E1");
                  $("#svg_1645").css("fill","#E2E2E1");
                  $("#svg_1658").css("stroke","#E2E2E1");
                  $("#svg_1660").css("fill","#E2E2E1");
                  $("#svg_1653").css("stroke","#E2E2E1");
                  $("#svg_1655").css("fill","#E2E2E1");
                  $("#svg_1663").css("stroke","#E2E2E1");
                  $("#svg_1665").css("fill","#E2E2E1");
                  $("#svg_1668").css("stroke","#E2E2E1");
                  $("#svg_1670").css("fill","#E2E2E1");
                  $("#svg_1640").css("fill","#E2E2E1");
                  $("#svg_1631").css("stroke","#E2E2E1");
                  $("#svg_1633").css("fill","#E2E2E1");
                  $("#svg_1675").css("fill","#E2E2E1");
                  $("#svg_1608").css("stroke","#E2E2E1");

                  $("#svg_528").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_564").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_606").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_685").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_903").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_936").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1068").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_1189").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_1542").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_1446").css({'fill':'#E2E2E1','stroke':'#A09F9F'});


              });*/

              //AFILIACION
              $("#svg_70").click(function() {
                  $("#svg_480").css({'fill':'#f8ac37','stroke':'#ef7819'});
                  $("#svg_528").css({'fill':'#f8ac37','stroke':'#ef7819'});
                  $("#svg_564").css({'fill':'#f8ac37','stroke':'#ef7819'});
                  $("#svg_1189").css({'fill':'#f8ac37','stroke':'#ef7819'});
                  $("#svg_1446").css({'fill':'#f8ac37','stroke':'#ef7819'});
                  $("#svg_903").css({'fill':'#f8ac37','stroke':'#ef7819'});
                  $("#svg_685").css({'fill':'#f8ac37','stroke':'#ef7819'});
                  $("#svg_766").css({'fill':'#f8ac37','stroke':'#ef7819'});
                  $("#svg_1683").css({'stroke':'#ef7819'});
                  $("#svg_1685").css({'fill':'#ef7819','stroke':'#ef7819'});
                  $("#svg_1688").css({'stroke':'#ef7819'});
                  $("#svg_1690").css({'fill':'#ef7819','stroke':'#ef7819'});
                  $("#svg_1698").css({'stroke':'#ef7819'});
                  $("#svg_1700").css({'fill':'#ef7819'});
                  $("#svg_1693").css({'stroke':'#ef7819'});
                  $("#svg_1695").css({'fill':'#ef7819'});
                  $("#svg_1718").css({'stroke':'#ef7819'});
                  $("#svg_1720").css({'fill':'#ef7819'});
                  $("#svg_1703").css({'stroke':'#ef7819'});
                  $("#svg_1705").css({'fill':'#ef7819'});
                  $("#svg_1708").css({'stroke':'#ef7819'});
                  $("#svg_1710").css({'fill':'#ef7819'});
              });

              /*$("#svg_70").mouseout(function() {
                  $("#svg_480").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_528").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_564").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_1189").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_1446").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_903").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_685").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_766").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_1683").css({'stroke':'#E2E2E1'});
                  $("#svg_1685").css({'fill':'#E2E2E1','stroke':'#E2E2E1'});
                  $("#svg_1688").css({'stroke':'#E2E2E1'});
                  $("#svg_1690").css({'fill':'#E2E2E1','stroke':'#E2E2E1'});
                  $("#svg_1698").css({'stroke':'#E2E2E1'});
                  $("#svg_1700").css({'fill':'#E2E2E1'});
                  $("#svg_1693").css({'stroke':'#E2E2E1'});
                  $("#svg_1695").css({'fill':'#E2E2E1'});
                  $("#svg_1718").css({'stroke':'#E2E2E1'});
                  $("#svg_1720").css({'fill':'#E2E2E1'});
                  $("#svg_1703").css({'stroke':'#E2E2E1'});
                  $("#svg_1705").css({'fill':'#E2E2E1'});
                  $("#svg_1708").css({'stroke':'#E2E2E1'});
                  $("#svg_1710").css({'fill':'#E2E2E1'});

              });*/

              //GESTION
              $("#svg_71").click(function() {
                  $("#svg_606").css({'fill':'#8C7BB8','stroke':'#65509C'});
                  $("#svg_648").css({'fill':'#FFFFFF','stroke':'#65509C'});
                  $("#svg_685").css({'fill':'#8C7BB8','stroke':'#65509C'});
                  $("#svg_723").css({'fill':'#FFFFFF','stroke':'#65509C'});
                  $("#svg_766").css({'fill':'#8C7BB8','stroke':'#65509C'});
                  $("#svg_808").css({'fill':'#FFFFFF','stroke':'#65509C'});
                  $("#svg_857").css({'fill':'#FFFFFF','stroke':'#65509C'});
                  $("#svg_892").css({'fill':'#FFFFFF','stroke':'#65509C'});

                  $("#svg_1743").css({'stroke':'#65509C'});
                  $("#svg_1745").css({'fill':'#65509C'});
                  $("#svg_1748").css({'stroke':'#65509C'});
                  $("#svg_1750").css({'fill':'#65509C'});
                  $("#svg_1753").css({'stroke':'#65509C'});
                  $("#svg_1754").css({'fill':'#65509C'});
                  $("#svg_1755").css({'fill':'#65509C'});
                  $("#svg_1758").css({'stroke':'#65509C'});
                  $("#svg_1760").css({'fill':'#65509C'});
                  $("#svg_1763").css({'stroke':'#65509C'});
                  $("#svg_1765").css({'fill':'#65509C'});
                  $("#svg_1768").css({'stroke':'#65509C'});
                  $("#svg_1770").css({'fill':'#65509C'});
                  $("#svg_1773").css({'stroke':'#65509C'});
                  $("#svg_1775").css({'fill':'#65509C'});

                  $("#svg_380").css({'fill':'#8C7BB8','stroke':'#65509C'});
                  $("#svg_936").css({'fill':'#8C7BB8','stroke':'#65509C'});
                  $("#svg_1446").css({'fill':'#8C7BB8','stroke':'#65509C'});
                  $("#svg_1493").css({'fill':'#8C7BB8','stroke':'#65509C'});
                  $("#svg_1542").css({'fill':'#8C7BB8','stroke':'#65509C'});
                  $("#svg_976").css({'fill':'#8C7BB8','stroke':'#65509C'});

                  $("#svg_1728").css({'stroke':'#65509C'});
                  $("#svg_1730").css({'fill':'#8C7BB8'});
                  $("#svg_1723").css({'stroke':'#65509C'});
                  $("#svg_1725").css({'fill':'#8C7BB8'});
                  $("#svg_1803").css({'stroke':'#65509C'});
                  $("#svg_1805").css({'fill':'#8C7BB8'});
                  $("#svg_1738").css({'stroke':'#65509C'});
                  $("#svg_1740").css({'fill':'#8C7BB8'});
                  $("#svg_1778").css({'stroke':'#65509C'});
                  $("#svg_1780").css({'fill':'#8C7BB8'});
                  $("#svg_1788").css({'stroke':'#65509C'});
                  $("#svg_1790").css({'fill':'#8C7BB8'});
                  $("#svg_1793").css({'stroke':'#65509C'});
                  $("#svg_1795").css({'fill':'#8C7BB8'});


              });

              /*$("#svg_71").mouseout(function() {
                  $("#svg_606").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_648").css({'stroke':'#E2E2E1'});
                  $("#svg_685").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_723").css({'stroke':'#E2E2E1'});
                  $("#svg_766").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_648").css({'stroke':'#E2E2E1'});
                  $("#svg_808").css({'stroke':'#E2E2E1'});
                  $("#svg_857").css({'stroke':'#E2E2E1'});
                  $("#svg_892").css({'stroke':'#E2E2E1'});

                  $("#svg_1743").css({'stroke':'#E2E2E1'});
                  $("#svg_1745").css({'fill':'#E2E2E1'});
                  $("#svg_1748").css({'stroke':'#E2E2E1'});
                  $("#svg_1750").css({'fill':'#E2E2E1'});
                  $("#svg_1753").css({'stroke':'#E2E2E1'});
                  $("#svg_1754").css({'fill':'#E2E2E1'});
                  $("#svg_1755").css({'fill':'#E2E2E1'});
                  $("#svg_1758").css({'stroke':'#E2E2E1'});
                  $("#svg_1760").css({'fill':'#E2E2E1'});
                  $("#svg_1763").css({'stroke':'#E2E2E1'});
                  $("#svg_1765").css({'fill':'#E2E2E1'});
                  $("#svg_1768").css({'stroke':'#E2E2E1'});
                  $("#svg_1770").css({'fill':'#E2E2E1'});
                  $("#svg_1773").css({'stroke':'#E2E2E1'});
                  $("#svg_1775").css({'fill':'#E2E2E1'});

                  $("#svg_380").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_936").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1446").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_1493").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_1542").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_976").css({'fill':'none','stroke':'#E2E2E1'});

                  $("#svg_1728").css({'stroke':'#E2E2E1'});
                  $("#svg_1730").css({'fill':'#E2E2E1'});
                  $("#svg_1723").css({'stroke':'#E2E2E1'});
                  $("#svg_1725").css({'fill':'#E2E2E1'});
                  $("#svg_1803").css({'stroke':'#E2E2E1'});
                  $("#svg_1805").css({'fill':'#E2E2E1'});
                  $("#svg_1738").css({'stroke':'#E2E2E1'});
                  $("#svg_1740").css({'fill':'#E2E2E1'});
                  $("#svg_1778").css({'stroke':'#E2E2E1'});
                  $("#svg_1780").css({'fill':'#E2E2E1'});
                  $("#svg_1788").css({'stroke':'#E2E2E1'});
                  $("#svg_1790").css({'fill':'#E2E2E1'});
                  $("#svg_1793").css({'stroke':'#E2E2E1'});
                  $("#svg_1795").css({'fill':'#E2E2E1'});
              });*/

              //FINANCIAMIENTO
              $("#svg_132").click(function() {
                  $("#svg_903").css({'fill':'#ca9e67','stroke':'#7d4e24'});
                  $("#svg_936").css({'fill':'ffffff','stroke':'#7d4e24'});
                  $("#svg_957").css({'fill':'ffffff','stroke':'#7d4e24'});
                  $("#svg_976").css({'fill':'ffffff','stroke':'#7d4e24'});
                  $("#svg_1012").css({'fill':'ffffff','stroke':'#7d4e24'});
                  $("#svg_1031").css({'fill':'ffffff','stroke':'#7d4e24'});

                  $("#svg_1824").css({'fill':'none','stroke':'#7d4e24'});
                  $("#svg_1826").css({'fill':'#7d4e24','stroke':'#none'});
                  $("#svg_1834").css({'fill':'none','stroke':'#7d4e24'});
                  $("#svg_1836").css({'fill':'#7d4e24','stroke':'#none'});
                  $("#svg_1839").css({'fill':'none','stroke':'#7d4e24'});
                  $("#svg_1841").css({'fill':'#7d4e24','stroke':'#none'});
                  $("#svg_1844").css({'fill':'none','stroke':'#7d4e24'});
                  $("#svg_1846").css({'fill':'#7d4e24','stroke':'#none'});
                  $("#svg_1854").css({'fill':'none','stroke':'#7d4e24'});
                  $("#svg_1856").css({'fill':'#7d4e24','stroke':'#none'});

                  $("#svg_1114").css({'fill':'#ca9e67','stroke':'#7d4e24'});
                  $("#svg_606").css({'fill':'#ca9e67','stroke':'#7d4e24'});
                  $("#svg_480").css({'fill':'#ca9e67','stroke':'#7d4e24'});
                  $("#svg_1302").css({'fill':'#ca9e67','stroke':'#7d4e24'});
                  $("#svg_1350").css({'fill':'#ca9e67','stroke':'#7d4e24'});

                  $("#svg_1813").css({'fill':'none','stroke':'#7d4e24'});
                  $("#svg_1815").css({'fill':'#7d4e24','stroke':'none'});
                  $("#svg_1829").css({'fill':'none','stroke':'#7d4e24'});
                  $("#svg_1831").css({'fill':'#7d4e24','stroke':'none'});
                  $("#svg_1849").css({'fill':'none','stroke':'#7d4e24'});
                  $("#svg_1851").css({'fill':'#7d4e24','stroke':'none'});
                  $("#svg_1859").css({'fill':'none','stroke':'#7d4e24'});
                  $("#svg_1861").css({'fill':'#7d4e24','stroke':'none'});
                  $("#svg_1819").css({'fill':'none','stroke':'#7d4e24'});
                  $("#svg_1821").css({'fill':'#7d4e24','stroke':'none'});
              });

              /*$("#svg_132").mouseout(function() {
                  $("#svg_903").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_936").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_957").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_976").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1012").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1031").css({'fill':'none','stroke':'#E2E2E1'});

                  $("#svg_1824").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1826").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1834").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1836").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1839").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1841").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1844").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1846").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1854").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1856").css({'fill':'#E2E2E1','stroke':'none'});

                  $("#svg_1114").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_606").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_480").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_1302").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1350").css({'fill':'none','stroke':'#E2E2E1'});

                  $("#svg_1813").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1815").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1829").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1831").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1849").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1851").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1859").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1861").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1819").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1821").css({'fill':'#E2E2E1','stroke':'none'});
              });*/

              //ADMINISTRACIÓN
              $("#svg_156").click(function() {
                  $("#svg_1068").css({'fill':'#009fe3','stroke':'#1d71b8'});
                  $("#svg_1114").css({'fill':'none','stroke':'#1d71b8'});
                  $("#svg_1138").css({'fill':'ffffff','stroke':'#1d71b8'});
                  $("#svg_1164").css({'fill':'ffffff','stroke':'#1d71b8'});
                  $("#svg_903").css({'fill':'#009fe3','stroke':'#1d71b8'});
                  $("#svg_936").css({'fill':'#009fe3','stroke':'#1d71b8'});
                  $("#svg_976").css({'fill':'#009fe3','stroke':'#1d71b8'});
                  $("#svg_1414").css({'fill':'#009fe3','stroke':'#1d71b8'});

                  $("#svg_1865").css({'fill':'none','stroke':'#1d71b8'});
                  $("#svg_1867").css({'fill':'#1d71b8','stroke':'none'});
                  $("#svg_1870").css({'fill':'none','stroke':'#1d71b8'});
                  $("#svg_1872").css({'fill':'#1d71b8','stroke':'none'});
                  $("#svg_1902").css({'fill':'none','stroke':'#1d71b8'});
                  $("#svg_1904").css({'fill':'#1d71b8','stroke':'none'});
                  $("#svg_1891").css({'fill':'none','stroke':'#1d71b8'});
                  $("#svg_1893").css({'fill':'#1d71b8','stroke':'none'});
                  $("#svg_1896").css({'fill':'none','stroke':'#1d71b8'});
                  $("#svg_1898").css({'fill':'#1d71b8','stroke':'none'});

                  $("#svg_1875").css({'fill':'none','stroke':'#1d71b8'});
                  $("#svg_1877").css({'fill':'#1d71b8','stroke':'none'});
                  $("#svg_1880").css({'fill':'none','stroke':'#1d71b8'});
                  $("#svg_1882").css({'fill':'#1d71b8','stroke':'none'});
                  $("#svg_1885").css({'fill':'none','stroke':'#1d71b8'});
                  $("#svg_1887").css({'fill':'#1d71b8','stroke':'none'});
              });

              /*$("#svg_156").mouseout(function() {
                  $("#svg_1068").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_1114").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1138").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1164").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_903").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_936").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_976").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1446").css({'fill':'#E2E2E1','stroke':'#E2E2E1'});
                  $("#svg_1414").css({'fill':'none','stroke':'#E2E2E1'});

                  $("#svg_1865").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1867").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1870").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1872").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1902").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1904").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1891").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1893").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1896").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1898").css({'fill':'#E2E2E1','stroke':'none'});

                  $("#svg_1875").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1877").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1880").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1882").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1885").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1887").css({'fill':'#E2E2E1','stroke':'none'});
              });*/


              //PROSPECTIVA
              $("#svg_174").click(function() {
                  $("#svg_1189").css({'fill':'#72c5c7','stroke':'#184f5d'});
                  $("#svg_1248").css({'fill':'none','stroke':'#184f5d'});
                  $("#svg_1302").css({'fill':'ffffff','stroke':'#184f5d'});
                  $("#svg_1350").css({'fill':'ffffff','stroke':'#184f5d'});
                  $("#svg_480").css({'fill':'#72c5c7','stroke':'#184f5d'});
                  $("#svg_1493").css({'fill':'#72c5c7','stroke':'#184f5d'});
                  $("#svg_1542").css({'fill':'#72c5c7','stroke':'#184f5d'});

                  $("#svg_1907").css({'fill':'none','stroke':'#184f5d'});
                  $("#svg_1909").css({'fill':'#184f5d','stroke':'none'});
                  $("#svg_1927").css({'fill':'none','stroke':'#184f5d'});
                  $("#svg_1929").css({'fill':'#184f5d','stroke':'none'});
                  $("#svg_1932").css({'fill':'none','stroke':'#184f5d'});
                  $("#svg_1934").css({'fill':'#184f5d','stroke':'none'});
                  $("#svg_1912").css({'fill':'none','stroke':'#184f5d'});
                  $("#svg_1914").css({'fill':'#184f5d','stroke':'none'});
                  $("#svg_1917").css({'fill':'none','stroke':'#184f5d'});
                  $("#svg_1919").css({'fill':'#184f5d','stroke':'none'});
                  $("#svg_1922").css({'fill':'none','stroke':'#184f5d'});
                  $("#svg_1924").css({'fill':'#184f5d','stroke':'none'});

              });

              /*$("#svg_174").mouseout(function() {
                  $("#svg_1189").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_1248").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1302").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1350").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_480").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_1493").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_1542").css({'fill':'#E2E2E1','stroke':'#A09F9F'});

                  $("#svg_1907").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1909").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1927").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1929").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1932").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1934").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1912").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1914").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1917").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1919").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1922").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1924").css({'fill':'#E2E2E1','stroke':'none'});
              });*/


              //EVALUACIÓN
              $("#svg_203").click(function() {
                  $("#svg_1414").css({'fill':'ffffff','stroke':'#c91517'});
                  $("#svg_1446").css({'fill':'#ea5360','stroke':'#c91517'});
                  $("#svg_1493").css({'fill':'#ea5360','stroke':'#c91517'});
                  $("#svg_1542").css({'fill':'#ea5360','stroke':'#c91517'});
                  $("#svg_1248").css({'fill':'ffffff','stroke':'#c91517'});
                  $("#svg_428").css({'fill':'#ea5360','stroke':'#c91517'});
                  $("#svg_606").css({'fill':'#ea5360','stroke':'#c91517'});

                  $("#svg_1947").css({'fill':'none','stroke':'#c91517'});
                  $("#svg_1949").css({'fill':'#ea5360','stroke':'none'});
                  $("#svg_1942").css({'fill':'none','stroke':'#c91517'});
                  $("#svg_1944").css({'fill':'#ea5360','stroke':'none'});
                  $("#svg_1937").css({'fill':'none','stroke':'#c91517'});
                  $("#svg_1939").css({'fill':'#ea5360','stroke':'none'});
                  $("#svg_1952").css({'fill':'none','stroke':'#c91517'});
                  $("#svg_1954").css({'fill':'#ea5360','stroke':'none'});
                  $("#svg_1957").css({'fill':'none','stroke':'#c91517'});
                  $("#svg_1959").css({'fill':'#ea5360','stroke':'none'});
                  $("#svg_1967").css({'fill':'none','stroke':'#c91517'});
                  $("#svg_1969").css({'fill':'#ea5360','stroke':'none'});
                  $("#svg_1962").css({'fill':'none','stroke':'#c91517'});
                  $("#svg_1964").css({'fill':'#ea5360','stroke':'none'});
              });

              /*$("#svg_203").mouseout(function() {
                  $("#svg_1414").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1446").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_1493").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_1542").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_1248").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_428").css({'fill':'#E2E2E1','stroke':'#A09F9F'});
                  $("#svg_606").css({'fill':'#E2E2E1','stroke':'#A09F9F'});

                  $("#svg_1947").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1949").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1942").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1944").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1937").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1939").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1952").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1954").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1957").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1959").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1967").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1969").css({'fill':'#E2E2E1','stroke':'none'});
                  $("#svg_1962").css({'fill':'none','stroke':'#E2E2E1'});
                  $("#svg_1964").css({'fill':'#E2E2E1','stroke':'none'});
              });*/



 });
