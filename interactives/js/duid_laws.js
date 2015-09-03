/* Define for default load */
var duid_laws_data = null

/* Load default */
function start(){
  $.getJSON("data/duid_laws.json",function(duid_laws) {
    duid_laws_data = duid_laws;
  })
  .error(function(jqXHR, textStatus, errorThrown) {
    console.log("error " + textStatus);
    console.log(errorThrown);
  })
}

start();

$(document).ready(function() {
  //getDataByState(state); 
});

function update_charts() {
  getFactsByState();
}

function getFactsByState() {
    var count = 0;
    var laws = '';
    var selected_state = $('#select-state').val();

    $.each(duid_laws_data, function() {
        loop_state = duid_laws_data[count].state;
        if(selected_state == loop_state) {
          // laws = "<div class=\"row\" style=\"padding:5px\">";
          // laws += "<div class=\"col-xs-8\">Section of the Criminal Code:</div><div class=\"col-xs-4\"> " + duid_laws_data[count]["criminal_code"] + "</div></div>";
          // laws += "<div class=\"row\" style=\"padding:5px\">";
          // laws += "<div class=\"col-xs-8\">Under the Influence Law:</div><div class=\"col-xs-4\"> " + duid_laws_data[count]["DUID_law"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">";
          laws += "<div class=\"col-xs-8\">Sentencing for first offense:</div><div class=\"col-xs-4\"> " + duid_laws_data[count]["sentencing"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">";
          laws += "<div class=\"col-xs-8\">Fine for first offense:</div><div class=\"col-xs-4\"> " + duid_laws_data[count]["fine"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">";
          laws += "<div class=\"col-xs-8\">Driver's license suspension for first offense:</div><div class=\"col-xs-4\"> " + duid_laws_data[count]["dl_suspension"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">";
          laws += "<div class=\"col-xs-8\">Specimens tested:</div><div class=\"col-xs-4\"> " + duid_laws_data[count]["testing"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">";
          laws += "<div class=\"col-xs-8\">Notes:</div><div class=\"col-xs-4\"> " + duid_laws_data[count]["odd_things"] + "</div></div>";
        } 
        count++;
        $('#textbox').html(laws).fadeIn(3000);
    });

}