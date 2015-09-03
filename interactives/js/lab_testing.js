/* Define for default load */
var lab_test_data = null

/* Load default */
function start(){
  $.getJSON("data/lab_testing.json",function(lab_tests) {
    lab_test_data = lab_tests;
  })
  .error(function(jqXHR, textStatus, errorThrown) {
    console.log("error " + textStatus);
    console.log(errorThrown);
  })
}

start();

$(document).ready(function() {
  //getFactsByState(state); 
});

function update_charts() {
  getFactsByState();
}

function getFactsByState() {
    var count = 0;
    var tests = '';
    var selected_state = $('#select-state').val();

    $.each(lab_test_data, function() {
        loop_state = lab_test_data[count].state;
        if(selected_state == loop_state) {
          tests = "<div class=\"row\" style=\"padding:5px\">";
          tests += "<div class=\"col-xs-8\">Medical marijuana testing mandated:</div><div class=\"col-xs-4\"> " + lab_test_data[count]["medical_mj_testing_mandated"] + "</div></div>";
          tests += "<div class=\"row\" style=\"padding:5px\">";
          tests += "<div class=\"col-xs-8\">Pesticide testing:</div><div class=\"col-xs-4\"> " + lab_test_data[count]["pesticide"] + "</div></div>";
          tests += "<div class=\"row\" style=\"padding:5px\">";
          tests += "<div class=\"col-xs-8\">Mold testing:</div><div class=\"col-xs-4\"> " + lab_test_data[count]["mycotoxin"] + "</div></div>";
          tests += "<div class=\"row\" style=\"padding:5px\">";
          tests += "<div class=\"col-xs-8\">Heavy metals testing:</div><div class=\"col-xs-4\"> " + lab_test_data[count]["heavy_metals"] + "</div></div>";
          tests += "<div class=\"row\" style=\"padding:5px\">";
          tests += "<div class=\"col-xs-8\">Potency testing:</div><div class=\"col-xs-4\"> " + lab_test_data[count]["potency_testing"] + "</div></div>";
          tests += "<div class=\"row\" style=\"padding:5px\">";
          tests += "<div class=\"col-xs-8\">Residual solvent testing:</div><div class=\"col-xs-4\"> " + lab_test_data[count]["residual_solvent"] + "</div></div>";
          tests += "<div class=\"row\" style=\"padding:5px\">";
          tests += "<div class=\"col-xs-8\">Notes:</div><div class=\"col-xs-4\"> " + lab_test_data[count]["note"] + "</div></div>";
        } 
        count++;
        $('#textbox').html(tests).fadeIn(3000);
    });

}