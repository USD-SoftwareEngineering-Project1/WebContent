    var fm_currentDate = new Date();
    var FormCurrency_2 = '';
    var FormPaypalTax_2 = '0';
    var check_submit2 = 0;
    var check_before_submit2 = {};
    var required_fields2 = ["1","2","4","5","6","7"];
    var labels_and_ids2 = {"1":"type_name","2":"type_submitter_mail","4":"type_radio","5":"type_own_select","6":"type_own_select","7":"type_textarea","8":"type_submit_reset"};
    var check_regExp_all2 = [];
    var check_paypal_price_min_max2 = [];
    var file_upload_check2 = [];
    var spinner_check2 = [];
    var scrollbox_trigger_point2 = '20';
    var header_image_animation2 = 'flash';
    var scrollbox_loading_delay2 = '0';
    var scrollbox_auto_hide2 = '1';
         function before_load2() {	
}	
 function before_submit2() {
	 }	
 function before_reset2() {	
}
    function onload_js2() {
    }
    function condition_js2() {
  if( jQuery("input[name^='wdform_4_element2']:checked").val()=="Joomla!" ) {
    jQuery("#form2 div[wdid=5]").removeAttr("style");
  }
  else {
    jQuery("#form2 div[wdid=5]").css("display", "none");
  }
  jQuery("div[wdid=4] input[type='radio']").click(function() {
    if( jQuery("input[name^='wdform_4_element2']:checked").val()=="Joomla!" ) {
      jQuery("#form2 div[wdid=5]").removeAttr("style");
    }
    else {
      jQuery("#form2 div[wdid=5]").css("display", "none");
    }
  });
  if( jQuery("input[name^='wdform_4_element2']:checked").val()=="Wordpress" ) {
    jQuery("#form2 div[wdid=6]").removeAttr("style");
  }
  else {
    jQuery("#form2 div[wdid=6]").css("display", "none");
  }
  jQuery("div[wdid=4] input[type='radio']").click(function() {
    if( jQuery("input[name^='wdform_4_element2']:checked").val()=="Wordpress" ) {
      jQuery("#form2 div[wdid=6]").removeAttr("style");
    }
    else {
      jQuery("#form2 div[wdid=6]").css("display", "none");
    }
  });
    }
    function check_js2(id, form_id) {
    if (id != 0) {
    x = jQuery("#" + form_id + "form_view"+id);
    }
    else {
    x = jQuery("#form"+form_id);
    }    }
    function onsubmit_js2() {
    
  jQuery("<input type=\"hidden\" name=\"wdform_4_allow_other2\" value=\"no\" />").appendTo("#form2");
  jQuery("<input type=\"hidden\" name=\"wdform_4_allow_other_num2\" value=\"0\" />").appendTo("#form2");
  var disabled_fields = "";	
  jQuery("div[wdid]").each(function() {
    if(jQuery(this).css("display") == "none") {
      disabled_fields += jQuery(this).attr("wdid");
      disabled_fields += ",";
    }
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields2\" value =\""+disabled_fields+"\" />").appendTo("#form2");
    }
  });    }
    jQuery(window).load(function () {
    formOnload(2);
    });
    form_view_count2 = 0;
    jQuery(document).ready(function () {
    fm_document_ready(2);
    });
    