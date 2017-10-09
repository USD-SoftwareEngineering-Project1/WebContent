    var fm_currentDate = new Date();
    var FormCurrency_5 = '$';
    var FormPaypalTax_5 = '0';
    var check_submit5 = 0;
    var check_before_submit5 = {};
    var required_fields5 = [];
    var labels_and_ids5 = {"2":"type_matrix","3":"type_scale_rating","4":"type_range","5":"type_star_rating","6":"type_submit_reset"};
    var check_regExp_all5 = [];
    var check_paypal_price_min_max5 = [];
    var file_upload_check5 = [];
    var spinner_check5 = [];
    var scrollbox_trigger_point5 = '20';
    var header_image_animation5 = 'none';
    var scrollbox_loading_delay5 = '0';
    var scrollbox_auto_hide5 = '1';
         function before_load5()
{

}

 function before_submit5()
{
 }

 function before_reset5()
{

}
    function onload_js5() {
  jQuery("#form5 #wdform_4_element50")[0].spin = null;
  jQuery("#form5 #wdform_4_element51")[0].spin = null;
  spinner0 = jQuery("#form5 #wdform_4_element50").spinner();
  
  jQuery("#form5 #wdform_4_element5").spinner({ step: 1});
  spinner1 = jQuery("#form5 #wdform_4_element51").spinner();
  
  jQuery("#form5 #wdform_4_element5").spinner({ step: 1});
  jQuery("#wdform_5_star_0_5").mouseover(function() {change_src(0,"wdform_5", 5, "yellow");});
  jQuery("#wdform_5_star_0_5").mouseout(function() {reset_src(0,"wdform_5", 5);});
  jQuery("#wdform_5_star_0_5").click(function() {select_star_rating(0,"wdform_5", 5,"yellow", "10");});
  jQuery("#wdform_5_star_1_5").mouseover(function() {change_src(1,"wdform_5", 5, "yellow");});
  jQuery("#wdform_5_star_1_5").mouseout(function() {reset_src(1,"wdform_5", 5);});
  jQuery("#wdform_5_star_1_5").click(function() {select_star_rating(1,"wdform_5", 5,"yellow", "10");});
  jQuery("#wdform_5_star_2_5").mouseover(function() {change_src(2,"wdform_5", 5, "yellow");});
  jQuery("#wdform_5_star_2_5").mouseout(function() {reset_src(2,"wdform_5", 5);});
  jQuery("#wdform_5_star_2_5").click(function() {select_star_rating(2,"wdform_5", 5,"yellow", "10");});
  jQuery("#wdform_5_star_3_5").mouseover(function() {change_src(3,"wdform_5", 5, "yellow");});
  jQuery("#wdform_5_star_3_5").mouseout(function() {reset_src(3,"wdform_5", 5);});
  jQuery("#wdform_5_star_3_5").click(function() {select_star_rating(3,"wdform_5", 5,"yellow", "10");});
  jQuery("#wdform_5_star_4_5").mouseover(function() {change_src(4,"wdform_5", 5, "yellow");});
  jQuery("#wdform_5_star_4_5").mouseout(function() {reset_src(4,"wdform_5", 5);});
  jQuery("#wdform_5_star_4_5").click(function() {select_star_rating(4,"wdform_5", 5,"yellow", "10");});
  jQuery("#wdform_5_star_5_5").mouseover(function() {change_src(5,"wdform_5", 5, "yellow");});
  jQuery("#wdform_5_star_5_5").mouseout(function() {reset_src(5,"wdform_5", 5);});
  jQuery("#wdform_5_star_5_5").click(function() {select_star_rating(5,"wdform_5", 5,"yellow", "10");});
  jQuery("#wdform_5_star_6_5").mouseover(function() {change_src(6,"wdform_5", 5, "yellow");});
  jQuery("#wdform_5_star_6_5").mouseout(function() {reset_src(6,"wdform_5", 5);});
  jQuery("#wdform_5_star_6_5").click(function() {select_star_rating(6,"wdform_5", 5,"yellow", "10");});
  jQuery("#wdform_5_star_7_5").mouseover(function() {change_src(7,"wdform_5", 5, "yellow");});
  jQuery("#wdform_5_star_7_5").mouseout(function() {reset_src(7,"wdform_5", 5);});
  jQuery("#wdform_5_star_7_5").click(function() {select_star_rating(7,"wdform_5", 5,"yellow", "10");});
  jQuery("#wdform_5_star_8_5").mouseover(function() {change_src(8,"wdform_5", 5, "yellow");});
  jQuery("#wdform_5_star_8_5").mouseout(function() {reset_src(8,"wdform_5", 5);});
  jQuery("#wdform_5_star_8_5").click(function() {select_star_rating(8,"wdform_5", 5,"yellow", "10");});
  jQuery("#wdform_5_star_9_5").mouseover(function() {change_src(9,"wdform_5", 5, "yellow");});
  jQuery("#wdform_5_star_9_5").mouseout(function() {reset_src(9,"wdform_5", 5);});
  jQuery("#wdform_5_star_9_5").click(function() {select_star_rating(9,"wdform_5", 5,"yellow", "10");});
    }
    function condition_js5() {
    }
    function check_js5(id, form_id) {
    if (id != 0) {
    x = jQuery("#" + form_id + "form_view"+id);
    }
    else {
    x = jQuery("#form"+form_id);
    }    }
    function onsubmit_js5() {
    jQuery("<input type=\"hidden\" name=\"wdform_2_input_type5\" value=\"radio\" /><input type=\"hidden\" name=\"wdform_2_hidden_row5\" value=\"***Product is affordable***Product is valuable***Product is better&lt;br&gt; than other products on&lt;br&gt; the market***Product is easy to use\" /><input type=\"hidden\" name=\"wdform_2_hidden_column5\" value=\"***Strongly Disagree***Disagree***Neutral***Agree***Strongly Agree\" />").appendTo("#form5");
  jQuery("<input type=\"hidden\" name=\"wdform_3_scale_amount5\" value=\"5\" />").appendTo("#form5");
  jQuery("<input type=\"hidden\" name=\"wdform_5_star_amount5\" value=\"10\" />").appendTo("#form5");
  var disabled_fields = "";	
  jQuery("div[wdid]").each(function() {
    if(jQuery(this).css("display") == "none") {
      disabled_fields += jQuery(this).attr("wdid");
      disabled_fields += ",";
    }
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields5\" value =\""+disabled_fields+"\" />").appendTo("#form5");
    }
  });    }
    jQuery(window).load(function () {
    formOnload(5);
    });
    form_view_count5 = 0;
    jQuery(document).ready(function () {
    fm_document_ready(5);
    });
    