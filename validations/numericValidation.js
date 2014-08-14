//<input type="number" pattern= "\d*"/>
//important fix both Android and iOS
MACYS = {}; MACYS.userprofile = {};
MACYS.userprofile.orderStatusMEW = (function(){
    "use strict";

    var 
    	KEY_DOWN_EVENT = 'contextmenu paste keydown',
    	KEY_UP_EVENT = 'contextmenu paste keyup',
    	ZIP_CODE = "#zipCode",
    	validationInit,
    	allowOnlyNumbers,
    	limitLength,

    validationInit = function() {
        if( MACYS.userprofile.orderStatus.giftReturnsEnabled ) {
            $(ZIP_CODE).on(KEY_DOWN_EVENT, allowOnlyNumbers);
            $(ZIP_CODE).on(KEY_UP_EVENT, limitLength);
        }
    };
    
    allowOnlyNumbers = function isNumberKey(evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (evt.shiftKey || (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105 )) {
        	if(charCode == 8) {
            	return true;
            }
            return false;
        }
        return true;  
    };
    
    limitLength = function() {
    	if($(this).val().length >= 5) {
			$(this).val($(this).val().substr(0,5));
		}
    };
    
    return {
            validationInit: validationInit,
            allowOnlyNumbers: allowOnlyNumbers,
            limitLength: limitLength
    };
}());

$(document).ready(function() {
    "use strict";
    MACYS.userprofile.orderStatusMEW.validationInit();
});
