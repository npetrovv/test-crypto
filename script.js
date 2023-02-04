$(function() {
  $("#slick").ddslick({
    width:"100px",
    imagePosition: "left",
    onSelected: function(data) {
      $("selected").html(data.selectedData.value);
    }
  });

  $("#slick2").ddslick({
    width:"100px",
    imagePosition: "left",
    onSelected: function(data) {
      $("selected").html(data.selectedData.value);
    }
  });
});