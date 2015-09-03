/* Define for default load */
var rec_laws_by_state_data = null

/* Load default */
function start(){
  $.getJSON("data/rec_laws.json",function(rec_laws) {
    rec_laws_by_state_data = rec_laws;
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
    var rec_facts = '';
    var selected_state = $('#select-state').val();

    $.each(rec_laws_by_state_data, function() {
        loop_state = rec_laws_by_state_data[count].state;
        if(selected_state == loop_state) {
          rec_facts = "<div class=\"row\" style=\"padding:5px;\">";
          rec_facts += "<div class=\"col-xs-8\">Who can posess:</div><div class=\"col-xs-4\"> " + rec_laws_by_state_data[count]["who_can_posess"] + "</div></div>";
          rec_facts += "<div class=\"row\" style=\"padding:5px\">";
          rec_facts += "<div class=\"col-xs-8\">Public possession amount limit:</div><div class=\"col-xs-4\"> " + rec_laws_by_state_data[count]["possession_limit"] + "</div></div>";
          rec_facts += "<div class=\"row\" style=\"padding:5px\">";
          rec_facts += "<div class=\"col-xs-8\">Retail purchase:</div><div class=\"col-xs-4\"> " + rec_laws_by_state_data[count]["retail_sale"] + "</div></div>";
          rec_facts += "<div class=\"row\" style=\"padding:5px\">";
          rec_facts += "<div class=\"col-xs-8\">Home growing:</div><div class=\"col-xs-4\"> " + rec_laws_by_state_data[count]["home_grow"] + "</div></div>";
          rec_facts += "<div class=\"row\" style=\"padding:5px\">";
          rec_facts += "<div class=\"col-xs-8\">Use in public:</div><div class=\"col-xs-4\"> " + rec_laws_by_state_data[count]["public_use"] + "</div></div>";
        } 
        count++;
        $('#textbox').html(rec_facts).fadeIn(3000);
    });

}