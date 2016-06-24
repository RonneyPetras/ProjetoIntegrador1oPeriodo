$(function(){
    $('.slider').cycle({
    timeout: 3000,
    pager: $('.pager'),
    pagerAnchorBuilder: function(index,DOMelement){
        return '<a></a>';
    },
    activePagerClass: 'sliderAtivado'
  });
});