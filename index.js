$(".profile img").on("mouseover", function () {
  $(".profile img").css("height", "500px");
});

$(".profile img").on("mouseout", function () {
  $(".profile img").css("height", "300px");
});

$(".rotate").on("mouseover", function () {
  $(this).addClass("rotated");
});

$(".rotate").on("mouseout", function () {
  $(this).removeClass("rotated");
});
