$(document).ready(function(){
	
		/*************search area*****************/
		$('.search-button .search').on('click',function(){
			$('.sub-search').slideToggle();
			return false;
		});
		
		/************responsive nav icon*************/
		$('.menu-icon i').on('click',function(){
			$('.mobile-menubar-area').toggleClass('canvas-menu');
			return false;
		});
		
		/************responsive cross icon**************/
		$('.crossbar').on('click',function(){
			$('.mobile-menubar-area').removeClass('canvas-menu');
			$('.mobile-menubar-area').addClass('canvas-menu');
			return false;
		});
		
		/************tabs click function*************/
		$('.tabs-item').on('click',function(){
			$('.tabs').toggle();
			return false;
		});
		
		/************popular click area****************/
		$('.popular-area .heading-title2 h2').on('click',function(){
			$('.populer-list').toggle();
			return false;
		});
		
		/***********popular tag click area**************/
		$('.heading-title2 span').on('click',function(){
			$('.populer-tag-list').toggle();
			return false;
		});
		
		/***********mega click function************/
		$('.menubar ul li .mega').on('click',function(){
			$('.megamenu').slideToggle();
			return false;
		});
		
		/***********dropdown1 click function************/
		$('.menubar ul li .drop').on('click',function(){
			$('.dropdown1').slideToggle();
			return false;
		});
		
		/***********time function*******************/
		const clock = document.getElementById('date');
		setInterval(() =>{
			const now = moment();
			const humanReadable = now.format('dddd,MMMM D ');
			clock.textContent = humanReadable;
		},100);
		
		/************tabs area*********************/
		$( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
		$( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
		
		/************tabs2 area********************/
		$( "#tabs2" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
		$( "#tabs2 " ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
		
		/************tabs3 area********************/
		$( "#tabs3" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
		$( "#tabs3 " ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
	
		/************nwesticker function***********/
		var timer = !1;
			_Ticker = $("#T1").newsTicker();
			_Ticker.on("mouseenter",function(){
				var __self = this;
				timer = setTimeout(function(){
					__self.pauseTicker();
				},200);
			});
			_Ticker.on("mouseleave",function(){
				clearTimeout(timer);
				if(!timer) return !1;
				this.startTicker();
			});
	   
	   

		/*************tabs scrollbar function**************/
		$(window).on("load",function(){
            $(".tabs").mCustomScrollbar();
        });
		
		/************modal scrollbar function************/
		$(window).on("load",function(){
            $(".modal-content").mCustomScrollbar();
        });
		
		
		/*****wow js*****/
		wow = new WOW(
			{
			animateClass: 'animated',
			offset:       100,
			callback:     function(box) {
			  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
			}
		  }
		);
		wow.init();
		document.getElementById('moar').onclick = function() {
		  var section = document.createElement('section');
		  section.className = 'section--purple wow fadeInDown';
		  this.parentNode.insertBefore(section, this);
		};
		
		

	

});	
	
	/**************menu sticky function***************/
	$(window).scroll(function(){
			var a= $(window).scrollTop();
			$('.scroll_box').text(a);
			
			if(a>200){
				$('.menubar-area').addClass('top-fixed');
				$('.logo2').addClass('logo3');
				
				$('.menubar-area').removeClass('animateOut');
				
			}
			else{
				$('.menubar-area').removeClass('top-fixed');
				$('.logo2').removeClass('logo3');
			}
	});
		