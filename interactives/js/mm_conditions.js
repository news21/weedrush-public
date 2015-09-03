/* Define for default load */
var mm_cond_data = null

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

function update_charts() {
  getFactsByState();
}

function getFactsByState() {
    var count = 0;
    var conditions = '';
    var yes_conditions = '';
    var no_conditions = '';
    var attrib_names = [];
    var yes_a = [];
    var no_a = [];
    var selected_state = $('#select-state').val();
    var find = ["AIDS","ALS","Alzheimers","Anorexia","Arthritis","Cancer","Cachexia","Cervical_Dystonia","Chronic_Severe_Pain","Cirrhosis","Crohns","Chronic_Renal_Failure","Doctor_Recommendation","Epilepsy","Fibromyalgia","Glaucoma","Hepatitis_C","HIV","Hospice_Admittance","Huntingtons","Inflammatory_Bowel_Disease","Mayor_Approves","Migraine","MS","Muscular_Distrophy","Muscle_Spasm","Nail_Patella","Nausea","Pancreatitis","Parkinsons","Perpheral_Neuropathy","PTSD","Seizures","Spacity","Chemo","Vomiting","Tourettes","Brain_Injury"];
    var replace = ["AIDS","ALS","Alzheimer's","Anorexia","Arthritis","Cancer","Cachexia","Cervical Dystonia","Chronic Severe Pain","Cirrhosis","Crohn's","Chronic Renal Failure","Doctor Recommendation","Epilepsy","Fibromyalgia","Glaucoma","Hepatitis C","HIV","Hospice Admittance","Huntington's","Inflammatory Bowel Disease","Mayor Approves","Migraine","MS","Muscular Distrophy","Muscle Spasm","Nail Patella","Nausea","Pancreatitis","Parkinson's","Perpheral Neuropathy","PTSD","Seizures","Spacity/Spinal Cord Damage","AZT/Chemo/Radiation","Intractable Vomiting","Tourette's Syndrome","Traumatic Brain Injury"];

    $.each(mm_cond_data, function() {
        loop_state = mm_cond_data[count].state;
        if(selected_state == loop_state) {
          for (var key in mm_cond_data[count]) {
            attrib_names.push(key);
          }
          for (var i=1; i < attrib_names.length; i++) {
            if (mm_cond_data[count][attrib_names[i]] == "yes") {
              yes_a.push(attrib_names[i]);
            }
            else {
              no_a.push(attrib_names[i]);
            }
          }
          var yes_tests = yes_a.join(', ');
          var no_tests = no_a.join(', ');
          yes_tests = yes_tests.replaceArray(find, replace);
          no_tests = no_tests.replaceArray(find, replace);
          conditions = "<div class=\"panel panel-default\"><div class=\"panel-body\">";
          // conditions += "<div class=\"col-xs-2\"><span class=\"glyphicon glyphicon-ok-sign\" arida-hidden=\"true\"></span></div>";
          conditions += "<div class=\"row\"><div class=\"col-xs-12\">" + yes_tests + "</div></div></div></div></div>";
          // conditions += "<div class=\"panel panel-default\"><div class=\"panel-heading\"><h3 class=\"panel-title\">NO</h3></div><div class=\"panel-body\">";
          // conditions += "<div class=\"col-xs-2\"><span class=\"glyphicon glyphicon-remove-sign\" aria-hidden=\"true\"></span></div>";
          // conditions += "<div class=\"row\"><div class=\"col-xs-10\">" + no_tests + "</div></div></div></div></div>";
        } 
        count++;
        $('#textbox').html(conditions).fadeIn(3000);
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