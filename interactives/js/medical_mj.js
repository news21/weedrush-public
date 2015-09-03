/* Define for default load */
var mm_data = null

/* Load default */
function start(){
  $.getJSON("data/medical_mj.json",function(mm_laws) {
    mm_data = mm_laws;
  })
  .error(function(jqXHR, textStatus, errorThrown) {
    console.log("error " + textStatus);
    console.log(errorThrown);
  })
}

start();

$(document).ready(function() {

});

function update_charts() {
  getFactsByState();
}

function getFactsByState() {
    var count = 0;
    var laws = '';
    var selected_state = $('#select-state').val();

    $.each(mm_data, function() {
        loop_state = mm_data[count].state;
        if(selected_state == loop_state) {
          laws = "<div class=\"row\" style=\"padding:5px\">";
          laws += "<div class=\"col-xs-8\">Date adopted:</div><div class=\"col-xs-4\"> " + mm_data[count]["date_adopted"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">";
          laws += "<div class=\"col-xs-8\">Method:</div><div class=\"col-xs-4\"> " + mm_data[count]["method"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">"; 
          laws += "<div class=\"col-xs-8\">Caregivers:</div><div class=\"col-xs-4\"> " + mm_data[count]["caregivers"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">";
          laws += "<div class=\"col-xs-8\">Dispensaries:</div><div class=\"col-xs-4\"> " + mm_data[count]["dispensaries"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">"; 
          laws += "<div class=\"col-xs-8\">Cultivation:</div><div class=\"col-xs-4\"> " + mm_data[count]["cultivation"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">"; 
          laws += "<div class=\"col-xs-8\">Number of patients:</div><div class=\"col-xs-4\"> " + mm_data[count]["number_of_patients"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">"; 
          laws += "<div class=\"col-xs-8\">Number of dispensaries:</div><div class=\"col-xs-4\"> " + mm_data[count]["number_of_dispensaries"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">"; 
          laws += "<div class=\"col-xs-8\">State tax rate:</div><div class=\"col-xs-4\"> " + mm_data[count]["tax_rate"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">"; 
          laws += "<div class=\"col-xs-8\">Fee to get card:</div><div class=\"col-xs-4\"> " + mm_data[count]["fee_to_get_card"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">"; 
          laws += "<div class=\"col-xs-8\">Regulatory agency:</div><div class=\"col-xs-4\"> " + mm_data[count]["regulatory_agency"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">"; 
          laws += "<div class=\"col-xs-8\">Possession limits:</div><div class=\"col-xs-4\"> " + mm_data[count]["possession_limits"] + "</div></div>";
        } 
        count++;
        $('#textbox').html(laws).fadeIn(3000);
    });

}