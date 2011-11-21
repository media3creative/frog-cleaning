var whichPic = 1;
var currentPage = "#page0"
var bg_1_pic = "bg_1.jpg"
var bg_2_pic = "bg_1.jpg"
var agent=navigator.userAgent.toLowerCase();
var is_iphone = ((agent.indexOf('iphone') != -1));
var is_ipad = ((agent.indexOf('ipad') != -1));
var is_safari = ((agent.indexOf('safari') != -1));
jQuery.noConflict();

function menu_appear(menu_item,delay_count,offset){
	var width_1 = 250 + Math.random()*50 + "px"
	var width_2 = 150 + Math.random()*50 + "px"
	
	jQuery(menu_item).delay(delay_count+700).animate(
		{"opacity":"1"},
		{duration: 150
		,ease: "swing"
		,queue: true}
	)
	jQuery(jQuery(menu_item).next()).delay(delay_count).animate(
		{"width":width_1},
		{duration: 250
		,ease: "swing"
		,queue: true}
	).animate(
			{"width":"175px","left":"100px"},
			{duration: 250
			,ease: "swing"
			,queue: true}
	).animate(
			{"background-color":"white","left":"20px"},
			{duration: 150
			,ease: "swing"
			,queue: true}
	).fadeOut("slow",function(){
		//jQuery(menu_item).css("visibility","visible")
	}
	);
}
jQuery(document).ready(function() {
	
	var stageHeight = parseInt(jQuery(window).height()) - 20 + "px";
	//jQuery('.left-side-bar').css("height",stageHeight);
	jQuery('#page1,#page2,#page3,#page4,#page5,#page6').css("display","none")

	//jQuery(".preloader").delay(600).slideToggle(600,"swing");
	jQuery(".bg2").css("display", "none");
	jQuery("body").css("overflow-x", "hidden");
	//=======ANIMATION FOR MAIN MENU===========
	//====FIX SAFARI MARGIN PROBLEM============
	if(is_safari){
	}
	//=====menu-animation=====================
	menu_appear("#main-1-link",1250);
	menu_appear("#main-2-link",1500);
	menu_appear("#main-3-link",1750);
	menu_appear("#main-4-link",2000);
	menu_appear("#main-5-link",2250);
	menu_appear("#main-6-link",2250);
	//==============
	jQuery('#main-1-link').click(function(){
		changePage("#page1","bg_1.jpg");
	});
	jQuery('#main-2-link').click(function(){
		changePage("#page2","bg_2.jpg");
	});
	jQuery('#main-3-link').click(function(){
		changePage("#page3","bg_3.jpg");
	});
	jQuery('#main-4-link').click(function(){
		changePage("#page4","bg_2.jpg");
	});
	jQuery('#main-5-link').click(function(){
		changePage("#page5","bg_1.jpg");
	});
	jQuery('#main-6-link').click(function(){
		changePage("#page6","bg_2.jpg");
	});
		// pageComeOut();
	//=====MOUSE ENTER MENU ITEM==============
	jQuery('#main-1-link,#main-2-link,#main-3-link,#main-4-link,#main-5-link,#main-6-link,#main-7-link,#main-8-link').hover(
	  function () {
			jQuery(this).next().css(
				//alert(jQuery(this).width())
				{"display":"block","background-color":"white","left":"-75px","width":"5px","opacity":"0"}
			);
			jQuery(this).next().animate(
				//alert(jQuery(this).width())
				{"width":"120px","opacity":"1"},
				{duration: 200
				,ease: "swing"
				,queue: false}
			);
			jQuery(this).css("color","white");
			jQuery(this).css("background-color","#13133D");
			jQuery(this).animate(
				//alert(jQuery(this).width())
				{"margin-left":"10px","letter-spacing":"0.3em"},
				{duration: 200
				,ease: "swing"
				,queue: false}
			);
	  }
		,
		 function () {
			jQuery(this).next().animate(
				//alert(jQuery(this).width())
				{"width":"0px","opacity":"0"},
				{duration: 200
				,ease: "swing"
				,queue: false}
			);
			jQuery(this).animate(
				//alert(jQuery(this).width())
				{"margin-left":"0px","letter-spacing":"0.075em"},
				{duration: 200
				,ease: "swing"
				,queue: false}
			);
			jQuery(this).css("color","white");
			jQuery(this).css("background-color","transparent");
		  }
	)
	setInterval(slideShow,6500);
	if(is_ipad){
		//window.location.reload(true);
		//alert(parseInt(jQuery("window").css("height")))
		//alert(window.orientation)
		//jQuery(".content-container").css({"height":"200px","overflow":"auto"});
	  //document.addEventListener('DOMContentLoaded', loaded, false);
		var scroll1, scroll2;
	  function loaded() {
	  scroll1 = new iScroll('homePage', { useTransition:true });
	  }
	  document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	  document.addEventListener('DOMContentLoaded', loaded, false);
		
		jQuery(".content").removeClass("content").addClass("scroller")
		jQuery("#homePage, #venuePage, #galleryPage, #reservationPage, #calendarPage, #happyHourPage, #menuPage-1, #menuPage-2, #menuPage-3,#menuPage-4, #menuPage-5, #menuPage-6, #contactPage-1").css({"height":"400px","overflow":"auto","top":"75px","display":"block","left":"-1400px"});
		jQuery("#reservationPage, #contactPage-1").css({"height":"auto","overflow":"visible","top":"75px","display":"block","left":"-1400px"}).removeClass("scroller")
		scroll1 = new iScroll('homePage');
		scroll2 = new iScroll('menuPage-1');
		scroll3 = new iScroll('menuPage-2');
		scroll4 = new iScroll('menuPage-3');
		scroll5 = new iScroll('menuPage-4');
		scroll6 = new iScroll('menuPage-5');
		scroll7 = new iScroll('menuPage-6');
		scroll8 = new iScroll('venuePage');
		scroll10 = new iScroll('galleryPage');
		//scroll11 = new iScroll('reservationPage', { useTransition:true });
		scroll12 = new iScroll('calendarPage');
		scroll13 = new iScroll('happyHourPage');
	//	scroll14 = new iScroll('contactPage', { useTransition:true });
		
	  document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	}
	//scroll1 = new iScroll('homePage', { useTransition:true });
  //document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
});
function ipadFunc(){
		if((window.orientation == 90 ||  window.orientation == -90)
		){
			jQuery(".bg1").css(
				{"height": parseInt(jQuery(".content-container").css("height"))+ 150 +"px"}
				);
			jQuery(".bg2").css(
				{"height": parseInt(jQuery(".content-container").css("height"))+ 150 +"px"}
				);
		}else{
				jQuery(".bg1").css(
					{"height": "1000px"}
					);
				jQuery(".bg2").css(
					{"height": "1000px"}
					);
		}
}
jQuery(window).resize(function() {
 	//var middlePoint = (parseInt(jQuery("body").css("width"))/2) - (parseInt(jQuery(currentPage).css("width"))/2) + 30 + "px"
	//alert("tutu")
	//jQuery(currentPage).css("left",middlePoint)
	var stageHeight = parseInt(jQuery(window).height()) - 20 + "px";
	//jQuery('.left-side-bar').css("height",stageHeight);
});

//===============

function changePage(targetPage,targetBg){
	//var inPoint = (parseInt(jQuery("body").css("width"))/2) - (parseInt(jQuery(targetPage).css("width"))/2) - 100 + "px"
	var inPoint = "350px"
	var outPoint2 =  (0 - parseInt(jQuery(targetPage).css("width"))) + "px"
	var outPoint =  (parseInt(jQuery("body").css("width")) + parseInt(jQuery(targetPage).css("width"))) + "px"
	//alert(inPoint);
	if(currentPage != targetPage){
		jQuery(targetPage).css("left",outPoint2)
		jQuery(targetPage).fadeIn().animate(
		{'left':inPoint},"slow","swing"	,function(){
				switchBg(targetBg);
			}
		);
		//jQuery(currentPage).fadeOut();
		jQuery(currentPage).animate(
		{'left':"2000px"},"slow","linear"
		).fadeOut("fast",function(){
			//switchBg(targetBg);
		});
		currentPage = targetPage
	};
}
function slideShow(){
	//alert(currentPage)
	if(currentPage == "#page1"
	|| currentPage == "#page0"){
		whichPic += 1;
		if(whichPic == 1){
			switchBg("bg_1.jpg");
		}
		if(whichPic == 2){
			switchBg("bg_1.jpg");
		}
		if(whichPic == 3){
			switchBg("bg_1.jpg");
		}
		if(whichPic == 4){
			switchBg("bg_1.jpg");
			whichPic = 0;
		}

	}
	//jQuery(".bg").delay("300").fadeIn();
}
function switchBg(whichBg){
	if(bg_1_pic != whichBg){
	jQuery(".bg2").css("display","block");
	jQuery(".bg2").css("background-image","url(/images/"+ bg_1_pic + ")");
	jQuery(".bg1").css("display","none");
	jQuery(".bg1").css("background-image","url(/images/"+ whichBg + ")");
	
	jQuery(".bg2").fadeOut(1500);
	jQuery(".bg1").fadeIn(1500);
	bg_2_pic = bg_1_pic;
	bg_1_pic = whichBg;
	}
}
