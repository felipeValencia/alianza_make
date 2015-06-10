(function( $ ){

        /*
        * Lazy Line Painter
        * SVG Stroke animation.
        *
        * https://github.com/camoconnell/lazy-line-painter
        *
        * Copyright 2014
        * Cam O'Connell - http://www.camoconnell.com  http://www.behance.net/camoconnell
        * Released under the MIT license
        *
        */

        // goto http://lazylinepainter.info to convert your svg into a svgData object.
        var svgData = {
          "demo" :
          {
            "strokepath" :
            [
              {   "path": "M7.603,5.5 c0,0,10.298,24.07,33.517,24.07c23.221,0,33.519-24.07,33.519-24.07s9.142,24.07,33.513,24.07c24.372,0,33.515-24.07,33.515-24.07 s10.858,24.07,33.518,24.07S208.703,5.5,208.703,5.5s9.717,24.07,33.521,24.07c23.801,0,33.518-24.07,33.518-24.07 s13.828,24.07,33.524,24.07c19.698,0,33.524-24.07,33.524-24.07",
                "duration": 1500,
                "strokeColor": '#ffffff',
                "strokeWidth": 8
                },
              {   "path": "M120,139.129 c0,0-8.708-34.233-42.483-34.236c-28.724-0.001-42.493,34.23-42.493,34.23",
                "duration":300
                },
              {   "path": "M313.5,137.138 c0,0-12.209-32.137-39.746-32.138C246.216,104.999,234,137.132,234,137.132",
                "duration":300
                },
              {   "path": "M80.246,193.604 c0,0,21.399,74.387,93.074,74.387c76.026,0,93.095-74.387,93.095-74.387",
                "duration":500
                }
            ],
            "dimensions" : { "width": 349, "height":277 }
          }
        }

        $(document).ready(function(){

          // Setup your Lazy Line element.
          // see README file for more settings
          $('#demo').lazylinepainter({
              'svgData' : svgData,
              'strokeWidth':7,
              'strokeColor':'#ffffff',
              'onComplete' : function(){
                console.log('>> onComplete');
              },
              'onStart' : function(){
                console.log('>> onStart');
              }
            }
          )
          var state = 'paint';
           $('#demo').lazylinepainter(state);

          // Paint your Lazy Line, that easy!
          /*var state = 'paint';
          $('#demo').lazylinepainter(state);

          $(window).on('click', function(){
            state = (state === 'erase') ? 'paint':'erase' ;
            $('#demo').lazylinepainter(state);

            console.log('>> ' + state);
          });*/
        })




      })( jQuery );