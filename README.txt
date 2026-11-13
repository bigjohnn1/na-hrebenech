Na hřebenech – semestrální projekt KIP/7REWB
============================================

Online: https://bigjohnn1.github.io/na-hrebenech/ (adresa je i v url.txt)

Spuštění: otevřít index.html v prohlížeči (Bootstrap, ikony, DataTables a písma
se načítají z CDN, je potřeba připojení k internetu).

Wireframe mobilní homepage a popis jejích prvků: wireframe/wireframe.html
(samotný obrázek: wireframe/wireframe.svg)

Kde najít požadované komponenty
-------------------------------
Logo a menu (6 položek s ikonami)   všechny stránky, hlavička
Carousel                            index.html, pod logem a menu
Breadcrumb                          všechny podstránky
Formulář (16 polí, input groups)    akce.html
DataTable (69 záznamů)              denik.html
Tlačítka a odkazy různých stylů     index.html, akce.html, vybava.html
Modální okna                        index.html (Co s sebou), denik.html (detail túry), galerie.html (fotka)
Taby (5 záložek)                    pohori.html
Další komponenty                    accordion, cards, list group, badge, progress, alert, toast, validace formuláře

Struktura
---------
index.html, denik.html, pohori.html, vybava.html, galerie.html, akce.html
css/style.css     vlastní styly nad Bootstrapem
js/main.js        DataTables, plnění modálních oken, validace formuláře
img/              fotografie (Wikimedia Commons, autoři a licence v galerie.html)
img/thumbs/       zmenšeniny pro galerii
wireframe/        wireframe a popis
