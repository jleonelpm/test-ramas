/* action_global.js yoss3d */
//ocultar mostarr
function standBy_show(n_tipo1, id_s, t)
{
$('#'+n_tipo1+id_s).fadeIn('normal');
	mostrarDiv(n_tipo1, id_s, 1, t);
}
function standBy_hide(n_tipo1, id_h, t, id_s, t2)
{
	$('#'+n_tipo1+id_h).fadeOut('normal');
	ocultarDiv(n_tipo1, id_h, t, t, id_s, t2);
}

var hideDiv = false;
var showDiv = true;
var inIt = true;
var total_s = 3;
var standBy = 220; ///tiempor de espera
var recursiva = 5000;
	
function animChange(div)
{
	var activo = $("#activo_"+div).val();//tap que esta activo
	var total =$("#total_"+div).val();//total de los tap
	var show = 'ok';
	//var total_X_tap=$("#total_X_tap").val();//total de los div de cada tap
	//alert('pase: activo '+act_tap);
	if(hideDiv){//si hay para ocultar
		//alert('1');
		var div_hide = activo;
		//alert('activo a hide '+div_hide);
		activo = parseInt(activo) +1;
	}
	///repartimos A B C	
	a= activo;
	b= parseInt(activo) +1;
	c= parseInt(activo) +2;
	if(a>total){
		show = 'reiniciado';
		a=1; b=2; c=3;
	}else if(b>total){
		show = 'none';
		//b=1; c=2;
	}else if(c>total){
		show = 'none';
		//c=1;
	}
	
	$("#act_"+div+"_1").val(a);
	$("#act_"+div+"_2").val(b);
	$("#act_"+div+"_3").val(c);
	if(!hideDiv){//solo en el welcome;
		mostrarDivWelcome(div, 3, 1);
	}else{
		ocultarDiv(div, div_hide, show);
	}
	//alert('OK');
	$("#activo_"+div).val(a);//guardoactivo
	//setTimeout("animChange('"+n_tipo1+"')",recursiva);
}
function ocultarDiv(div, i, show)
{
	$('#'+div+'_'+i).slideUp('normal');
	if(show=='ok'){
		setTimeout('mostrarDiv("'+div+'")',0);
	}else if(show == 'reiniciado'){ hideDiv = false;
		setTimeout('animChange("'+div+'")',500);
	}else{
		setTimeout('animChange("'+div+'")',3000);
	}
}
function mostrarDiv(div)
{
	var show = $("#act_"+div+"_3").val();
	$('#'+div+'_'+show).fadeIn('normal');
	setTimeout('animChange("'+div+'")',3000);
}
function mostrarDivWelcome(div, total, i)
{
	//alert('aqui' +i);
	var show = $("#act_"+div+"_"+i).val();
	$('#'+div+'_'+show).fadeIn('normal');
	i++;
	if(i<=total){
			setTimeout('mostrarDivWelcome("'+div+'",'+total+','+ i +')',1000);
	}else{
		hideDiv = true;
		setTimeout('animChange("'+div+'")',2000);
	}
}
//otro
function animChange2(div)
{
	var activo = $("#activo_"+div).val();//tap que esta activo
	var total =$("#total_"+div).val();//total de los tap
	var show = 'ok';
	//var total_X_tap=$("#total_X_tap").val();//total de los div de cada tap
	a= activo;
	b= parseInt(activo) +1;
	if(a>total){
		show = 'reiniciado';
		a=1; b=2;
	}else if(b>total){
		show = 'none';
		b=1; c=2;
	}
	//$("#act_"+div+"_1").val(a);
	$('#'+div+'_'+a).fadeOut('normal');
	//$('#devu').html('hide:'+a +' show:'+b + ' total '+total);
	$("#activo_"+div).val(b);//guardoactivo
	setTimeout('MostrarDiv("'+div+'","'+b+'")',150);
	//setTimeout("animChange('"+n_tipo1+"')",recursiva);
}
function MostrarDiv(div, b){
	$('#'+div+'_'+b).fadeIn('normal');
	setTimeout('animChange2("'+div+'")',3000);
}

function animChange3(div)
{
	var activo = $("#activo_"+div).val();//tap que esta activo
	var total =$("#total_"+div).val();//total de los tap
	var show = 'ok';
	//var total_X_tap=$("#total_X_tap").val();//total de los div de cada tap
	a= activo;
	b= parseInt(activo) +1;
	if(a>total){
		show = 'reiniciado';
		a=1; b=2;
	}else if(b>total){
		show = 'none';
		b=1; c=2;
	}
	//$("#act_"+div+"_1").val(a);
	$('#'+div+'_'+a).fadeOut('normal');
	//$('#devu').html('hide:'+a +' show:'+b + ' total '+total);
	$("#activo_"+div).val(b);//guardoactivo
	setTimeout('MostrarDiv3("'+div+'","'+b+'")',150);
	//setTimeout("animChange('"+n_tipo1+"')",recursiva);
}
function MostrarDiv3(div, b){
	$('#'+div+'_'+b).fadeIn('normal');
	setTimeout('callAnim()',3000);
}
function mycarousel_initCallback(carousel)
{
    // Disable autoscrolling if the user clicks the prev or next button.
    carousel.buttonNext.bind('click', function() {
        carousel.startAuto(0);
    });

    carousel.buttonPrev.bind('click', function() {
        carousel.startAuto(0);
    });

    // Pause autoscrolling if the user moves with the cursor over the clip.
    carousel.clip.hover(function() {
        carousel.stopAuto();
    }, function() {
        carousel.startAuto();
    });
};
function showDiv(id_show, i, t)
{
	for(a=1; a<=6; a++){
			$('#tap_'+id_show+'_'+a).fadeIn('normal');
		}
	$('#tap_'+id_show).fadeIn('normal');
}
function hideDiv(id, i, t)
{
	for(a=0; a<=t; a++){
	$('#tap_'+id+'_'+i).fadeOut('normal');
	}
}
function esperar(id_show)
{
$('#tap_'+id_show).fadeIn('normal');
	showDiv(id_show, 1, 6);
}


function Mycarrusel()
{
	var id_hide;
	var id_show;
	var act_tap;
	var next;

	var act_tap=$("#activo_tap").val();//tap que esta activo
	var total_tap=$("#total_tap").val();//total de los tap
	//var total_X_tap=$("#total_X_tap").val();//total de los div de cada tap
	
	if((act_tap>=total_tap) || (act_tap=='0'))
	{
		next=0;
	}
	else
	{
		next=act_tap;
	}
	
	id_show= parseInt(next) +1;
	id_hide = act_tap;
	////HIDEEE
	if(id_hide!=0){
		for(a=0; a<=6; a++){
			$('#tap_'+id_hide+'_'+a).fadeOut('normal');
		}
		$('#tap_'+id_hide).fadeOut('normal');
		setTimeout("showDiv("+id_show+", 1, 6)",500);
	}else{
		showDiv(id_show, 1, 6);
	}
	
	$("#activo_tap").val(id_show);//guardoactivo
	setTimeout("Mycarrusel()",8000);
}