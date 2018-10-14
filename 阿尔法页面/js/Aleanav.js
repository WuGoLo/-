// 获取所有的li元素.row并且给他们注册上鼠标滑动事件
// 获取li的父元素注册事件委托
$(".rowlist").on("mouseover", ".row", function() {
  // 鼠标滑上，给a标签添加active类名
  $(this)
   .children('a')
   .addClass('active')
   .end()
   .siblings('.row')
   .children('a')
   .removeClass('active');

  $('.row_content').show();

  var index = $(this).index('.row');
  $('.row_box')
   .eq(index)
   .show()
   .siblings()
   .hide();
});

  // $("#nav").on('mouseleave' ,function() {
  //   // 鼠标滑出，给a标签移除active类名
  //   $('.row')
  //    .children('a')
  //    .removeClass('active');
  //   $('.row_content').hide();
  // });

$(".collist").on("mouseover", ".col", function() {
  // 鼠标滑上，给a标签添加active类名
  $(this)
   .children('a')
   .addClass('active')
   .end()
   .siblings('.col')
   .children('a')
   .removeClass('active');

  $('.col_content').show();

  var index = $(this).index('.col');
  $('.nav_content') 
   .eq(index)
   .show()
   .siblings()
   .hide();

});
