function toggleOverlay(){
	$("#overlay").css("display", "none");
	$("#specialBox").css("display", "none");
	$("#wrapper").foggy({blurRadius: 0});
}

function checkCode(codeCheck){
	if (codeCheck == "Ruckfie"){
		toggleOverlay();
	}else{
		$("#error-message").show();
		$("#get-code").val(''); 
		$("#specialBox").css({"height":"150px"});
	}
}

$(document).ready(function(){
	$("#wrapper").foggy({
		blurRadius: 10
	});
    $("#submit-form").submit(function(){
    	var codeCheck = $("#get-code").val();
    	checkCode(codeCheck);
    	return false;
    });
});