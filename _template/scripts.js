// from githubuniverse.com

var ENGAGE = ENGAGE || {};

(
  function($, APP) {
      $(function() {
          APP.Viewport.init();
          APP.Background.init();
          // console.log(Object.getOwnPropertyNames(APP));
      });

      APP.Viewport = {
          init: function() {
              $.fn.isOnScreen = function(){
                  var elementTop = $(this).offset().top,
                    elementBottom = elementTop + $(this).outerHeight(),
                    viewportTop = $(window).scrollTop(),
                    viewportBottom = viewportTop + $(window).height();
                  return elementBottom > viewportTop && elementTop < viewportBottom;
              };

              function detection() {
                  for(var i = 0; i < items.length; i++) {
                      var el = $( items[i] );

                      if( el.isOnScreen() ){
                          el.addClass('in-view');
                      } else {
                          el.removeClass('in-view');
                      }
                  }
              }

              var items = document.querySelectorAll('*[data-animate-in], *[data-detect-viewport]'),
                waiting = false,
                w = $(window);

              w.on("resize scroll", function(){
                  if (waiting) {
                      return;
                  }
                  waiting = true;
                  detection();

                  setTimeout(function () {
                      waiting = false;
                  }, 100);
              });

              $(document).ready(function(){
                  setTimeout(function(){
                      detection();
                  }, 500);

                  for(var i = 0; i < items.length; i++) {
                      var d = 0,
                        el = $( items[i] );
                      if( items[i].getAttribute('data-animate-in-delay') ) {
                          d = items[i].getAttribute('data-animate-in-delay') / 1000 + 's';
                      } else {
                          d = 0;
                      }
                      el.css('transition-delay', d);
                  }
              });
          }
      };

      APP.Background = {
          init: function() {
              // console.log('stars test',$('.gradient, .shooting-star, .stars').length);
              if( $('.gradient, .shooting-star, .stars').length ) {
                  this.stars();
              } else {
                  return;
              }
          },

          stars: function() {
              $('.gradient').append("<span class='bg-orange bg-gradient'></span><span class='bg-purple bg-gradient'></span><span class='bg-blue bg-gradient'></span>" +
                "<span class='bg-orange-pink bg-gradient'></span>" +
                "<span class='bg-pink-purple bg-gradient'></span>" +
                "<span class='bg-purple-blue bg-gradient'></span>" +
                "<span class='bg-teal bg-gradient'></span>" +
                "<span class='bg-green-teal bg-gradient'></span>");

              var gradient = $('.gradient'),
                colors = $('.bg-gradient'),
                active =  Math.round(Math.random() * 2),
                pause = 6000,
                count = colors.length,
                i = 0;

              colors.eq(active).addClass('is-active initial');
              setTimeout(transition,pause);

              function transition(){
                  colors.eq(i).removeClass('is-active initial');
                  if( ++i >= count ){
                      i = 0;
                  }
                  colors.eq(i).addClass('is-active');
                  setTimeout(transition, pause);
              }

              function shootingStar(that, dir) {
                  setInterval(function(){
                      var topPos = Math.floor(Math.random() * 80) + 1,
                        topPos = topPos + '%',
                        leftPos = Math.floor(Math.random() * 40) + 1,
                        leftPos = leftPos + '%',
                        trans = Math.floor(Math.random() * 300) + 1,
                        trans = trans + 'deg';
                      that.css({
                          'top': topPos,
                          dir: leftPos,
                          transform: 'rotate(' + trans + ')'
                      });
                  }, 2000);
              }

              $('.shooting-star').each(function(){
                  var el = $(this);
                  shootingStar(el, 'left');
              });

              $('.shooting-star-right').each(function(){
                  var el = $(this);
                  shootingStar(el, 'right');
              });
          }
      };
  }(jQuery, ENGAGE)
);