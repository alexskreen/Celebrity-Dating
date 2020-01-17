// $(document).ready(function(){
//     $("form#celebrityForm").submit(function(event) {
//         var days = $("#days").val();
//         var person = $("#person").val();
//         var brand = $("#brand").val();

//         if (days === "1" && person === "1" && brand === "3") {
//             $("#two, #three").hide();
//             $("#four, #five").hide();
//             $("#one").show();
//           } else if (days === "4" && person === "2" && brand === "2") {
//             $("#one, #three").hide();
//             $("#four, #five").hide();
//             $("#two").show();
//           } else if (days === "3" && person === "1" && brand === "4") {
//             $("#one, #two").hide();
//             $("#four, #five").hide();
//             $("#three").show();
//           } else if (days === "5" && person === "2" && brand === "5") {
//             $("#one, #two").hide();
//             $("#three, #five").hide();
//             $("#four").show();
//           } else if (days === "1" && person === "1" && brand === "2") {
//             $("#one, #two").hide();
//             $("#four, #three").hide();
//             $("#five").show();
//           }
//           event.preventDefault();
      
//         });
// });

$(document).ready(function(){
  $("form#celebrityForm").submit(function(event) {
    var days = $("input:radio[name=days]:checked").val();
    var person = $("input:radio[name=person]:checked").val();
    var brand = $("input:radio[name=brand]:checked").val();
    console.log(days);
    console.log(person);
    console.log(brand);

    if (days === "1" && person === "1" && brand === "3") {
      $("#two, #three").hide();
      $("#four, #five").hide();
      $("#one").show();
    } else if (days === "4" && person === "2" && brand === "2") {
      $("#one, #three").hide();
      $("#four, #five").hide();
      $("#two").show();
    } else if (days === "3" && person === "1" && brand === "4") {
      $("#one, #two").hide();
      $("#four, #five").hide();
      $("#three").show();
    } else if (days === "5" && person === "2" && brand === "5") {
      $("#one, #two").hide();
      $("#three, #five").hide();
      $("#four").show();
    } else if (days === "1" && person === "1" && brand === "2") {
      $("#one, #two").hide();
      $("#four, #three").hide();
      $("#five").show();
    }

    event.preventDefault();
  });
  
});