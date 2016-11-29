(function($) {    
	$.fn.jsonTree=function(data){
		var SearchJSON=function(A,isopen){
		  var L=A.length;
		  var html="<ul style='display:block'>";
		  if(isopen==false){
			html="<ul style='display:none'>";
		  };
		  for(var i=0;i<=L-1;i++){
			var flag=A[i].child;
			if(flag){
			  var str=SearchJSON(A[i].child,A[i].open);
			  html=html+"<li class='farList'><span data-status='down'><span class='incon1 clickThere'></span>"+A[i].name+str+"</span></li>"
			}
			else{
			  html=html+"<li class='sonList'><span>"+A[i].name+"</span></li>"
			}
		  }
		  html=html+"</ul>";
		  return html;
		};
		var html=SearchJSON(data);
		$(this).append(html);
		$(this).on('click','.farList span.clickThere',function(evt){
		  	var target=evt.target;
		  	if(!target.matches(".farList span.clickThere")){ return };
			var flag=$(target).parent().attr('data-status');
			if(flag=="down"){
			  $(target).next().toggle();
			  $(target).removeClass("incon1").addClass('incon2').css({"display":"inline-block"});
			  evt.stopPropagation();
			  $(target).parent().attr('data-status','up');
			}
			else{
			  $(target).next().toggle();
			  $(target).removeClass("incon2").addClass('incon1').css({"display":"inline-block"});
			  evt.stopPropagation();
			  $(target).parent().attr('data-status','down');
			}
		});
	}
})(jQuery);    
