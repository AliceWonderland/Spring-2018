var ENGAGE = ENGAGE || {};

(
  function($, APP) {
      $(function() {
          APP.Background.init();
      });

      APP.Background = {
          init: function() {
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