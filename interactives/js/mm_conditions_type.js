/* Define for default load */
var mm_cond_data = null
var find = ["AK","AZ","CA","CO","CT","DE","DC","HI","IL","MA","ME","MD","MI","MN","MT","NH","NY","NV","NJ","NM","OR","RI","VT","WA"];
var replace = ["Alaska","Arizona","California","Colorado","Connecticut","Delaware","District of Columbia","Hawaii","Illinois","Massachusetts","Maine","Maryland","Michigan","Minnesota","Montana","New Hampshire","New York","Nevada","New Jersey","New Mexico","Oregon","Rhode Island","Vermont","Washington"];

/* Load default */
function start(){
  $.getJSON("data/mm_conditions.json",function(mm_cond) {
    mm_cond_data = mm_cond;
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

function update_type_states() {
  getTypeFactsByState();
}

function getTypeFactsByState() {
  var count = 0;
  var conditions = '';
  var yes_conditions = '';
  var no_conditions = '';
  var attrib_names = [];
  var yes_a = [];
  var no_a = [];
  var selected_condition = $('#select-condition').val();

  $.each(mm_cond_data, function() {
    if(mm_cond_data[count][selected_condition] == "yes") {
      yes_a.push(mm_cond_data[count].state);
    }
    else if(mm_cond_data[count][selected_condition] == "no") {
      no_a.push(mm_cond_data[count].state);
    }
    var yes_states = yes_a.join(', ');
    var no_states = no_a.join(', ');
    yes_states = yes_states.replaceArray(find, replace);
    no_states = no_states.replaceArray(find, replace);
    conditions = "<div class=\"panel panel-default\"><div class=\"panel-body\">";
    conditions += "<div class=\"row\"><div class=\"col-xs-12\">" + yes_states + "</div></div></div></div></div>";
    // conditions += "<div class=\"panel panel-default\"><div class=\"panel-heading\"><h3 class=\"panel-title\">NO</h3></div><div class=\"panel-body\">";
    // conditions += "<div class=\"row\"><div class=\"col-xs-10\">" + no_states + "</div></div></div></div></div>";
    count++;
    $('#typetextbox').html(conditions).fadeIn(3000);
  });
}

String.prototype.replaceArray = function(find, replace) {
  var replaceString = this;
  var regex;
  for (var j = 0; j < find.length; j++) {
    regex = new RegExp(find[j], "g");
    replaceString = replaceString.replace(regex, replace[j]);
  }
  return replaceString;
};