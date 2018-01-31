function loading(action, id){
	if(action=='in'){
		$('#'+id).html('<div style="" align="center"><img src="./images/cargando.gif" alt="Cargando" ></div>')	
	}else{
		//$('#'+id).html('<div style="" align="center"><img src="images/cargando.gif" alt="Cargando" ></div>')	
	}	
}
function returnArray(step){
	if(step=='details'){
		var array1 = new Array('fname', 'sname', 'email', 'id_type');	
	}
	return array1;
}
function saveFast(action, step) 
{	
	var file= $('#file').val();
	var div= $('#div').val();
		
	if(action=='save'){
		var myA = returnArray(step);//'user', 'pass');
		for(i=0; i<myA.length; i++){
			if ($('#'+myA[i]).val() == "") 
			{
				$('#'+myA[i]).css({ backgroundColor:"#FFC6C6"});
				$('#'+myA[i]).focus();
				return false;
			}else{
				$('#'+myA[i]).css({ backgroundColor:""});
			}
		}
		var myUrl='';
		for(i=0; i<myA.length; i++){
			if(myUrl==''){
				myUrl = '&' + myA[i] + '=' + $('#'+myA[i]).val();
			}else{
				myUrl = myUrl + '&' + myA[i] + '=' + $('#'+myA[i]).val();
			}
		}
	}else{
		var myUrl='';
	}
	$.ajax({
			type:"POST",
			url:"include/"+file,
			data:"action=" +action +"&id_user=" +$('#id_user').val() +"&step=" + step + myUrl,
			success: function(msg) {
					$("#"+div).html(msg);
			}		
		});
}



function buildUrl(array, step){
	var my='';
		for(s=0; s<array.length; s++){
			if(my==''){
				my = '&' + step + array[s] + '=' + $('#'+ step + array[s]).val();
			}else{
				my = my + '&' + step + array[s] + '=' + $('#'+ step + array[s]).val();
			}
		}
	return my;
}

function checkUniversal(myA){
	for(i=0; i<myA.length; i++){
			if ($('#'+myA[i]).val() == "") 
			{
				$('#'+myA[i]).css({ backgroundColor:"#FFC6C6"});
				$('#'+myA[i]).focus();
				loading('out');
				return true;
			}else{
				$('#'+myA[i]).css({ backgroundColor:""});
			}
		}
}