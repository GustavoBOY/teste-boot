var $floater = $('.floater');

$floater.on('click', function(e) {
  $floater.toggleClass('is-active');
  e.stopPropagation();
});

$('.container').on('click', function() {
  $floater.removeClass('is-active');
});