

$(document).ready(function(){





	// navbar-area
	$('.mobile_bars').click(function(){
	  $('.sidebar_area').toggleClass('mobile_menu_hide_show');
	});

	$('.mobile_times').click(function(){
	  $('.sidebar_area').toggleClass('mobile_menu_hide_show');
	});


	// transacton-filter
	// $(".transaction_top_search").click(function(){
	//   $(".trasaction_search_filter_sub").toggle();
	// });
	// $(".tran_search_submit a img").click(function(){
	//   $(".trasaction_search_filter_wrapper").toggle();
	// });
	// $(".tran_search_submit_new a img").click(function(){
	//   $(".trasaction_search_filter_wrapper").toggle();
	// });
	
	$(".transaction_top_search").click(function(){
	  $(".trans_wrapper_toggle").toggle();
	});



	$(".todaytoday").click(function(){
			$(".amount_blue").toggleClass("blue_blue");
		});

	// $(".transaction_dropdown_submit_cencel").click(function(){
	//   $(".trans_wrapper_toggle").toggle();
	// });

	// $(".dropdwon_type_del").click(function(){
	//   $(".dropdwon_type_dell").toggle();
	// });
	// $(".dropdwon_sta_del").click(function(){
	//   $(".dropdwon_sta_dell").toggle();
	// });




	// home-profile-start
	$(".profile_toggle").click(function(){
          $(this).toggleClass("active");
        })

    $(document).click(function(){
    	$(".profile_toggle").removeClass('active'); 
    });

    $(".profile_area_wrapper, .profile_toggle").click(function(e){
     	 e.stopPropagation(); 
    });
    // home-profile-end

    // home-notification-start
    $(".header_toggle_notification").click(function(){
      	$(this).toggleClass("active");
    })

    $(document).click(function(){
    	$(".header_toggle_notification").removeClass('active'); 
    });

    $(".profile_notification_area, .header_toggle_notification").click(function(e){
     	 e.stopPropagation(); 
    });
    // home-notification-end

        // $(".header_toggle_notification").click(function(){
		//   $(".profile_notification_area").toggleClass();
		// });
	
	// $(".header_profile_notification a").click(function(){
	//   $(".profile_notification_area").toggle();
	// });


	// benifici-dots

	$(".benifici_dots_icon").click(function(){
      	$(this).toggleClass("active");
    })

    $(document).click(function(){
    	$(".benifici_dots_icon").removeClass('active'); 
    });

    $(".dots_down_menu, .benifici_dots_icon").click(function(e){
     	 e.stopPropagation(); 
    });

	// $(".benifici_mb_user_dot a.js_dots1 img").click(function(){
	//   $(".js_dot_menu1").toggle();
	// });
	// $(".benifici_mb_user_dot a.js_dots2 img").click(function(){
	//   $(".js_dot_menu2").toggle();
	// });

	// $(".benifici_mb_user_dot a.js_dots3 img").click(function(){
	// 	  $(".js_dot_menu3").toggle();
	// 	});

	// $(".benifici_mb_user_dot a.js_dots4 img").click(function(){
	// 	  $(".js_dot_menu4").toggle();
	// 	});

	// $(".benifici_mb_user_dot a.js_dots5 img").click(function(){
	// 	  $(".js_dot_menu5").toggle();
	// 	});

	// $(".benifici_mb_user_dot a.js_dots6 img").click(function(){
	// 	  $(".js_dot_menu6").toggle();
	// 	});




	// benifici-addNew

	// $(".benifici_addnew_cont").click(function(){
    //   	$(this).toggleClass("active");
    // })

    // $(document).click(function(){
    // 	$(".benifici_addnew_cont").removeClass('active'); 
    // });

    // $(".benifici_addNew_receipnt_area, .benifici_addnew_cont").click(function(e){
    //  	 e.stopPropagation(); 
    // });

	// $(".benifici_addnew a").click(function(){
	// 	  $(".benifici_addNew_receipnt_area").toggle();
	// 	});

	// user-addNew
	$(".user_dropdown_addnew a").click(function(){
		  $(".user_addNew_area").toggle();
		});
	// user-addNew
	$(".tickets_chatList_addNew a").click(function(){
		  $(".chating_addNew_area").toggle();
		});


	// account-filter

	$(".tran_search_submit_account").click(function(){
		  $(".trasaction_search_filter_wrapper_account").toggle();
		});

	$(".account_single_toggle_cureency").click(function(){
		  $(".account_content_masterCard_area").toggleClass('account_toglle_show_item');
		});

	$(".account_toggle_back").click(function(){
		  $(".account_content_masterCard_area").toggleClass('account_toglle_show_item');
		});

	// $(".account_toggle_back").click(function(){
	// 	  $(".account_single_newAccount").toggleClass('ttttt');
	// 	});


	// user-filter

	$(".user_dropdown_filter a").click(function(){
		  $(".user_search_filter_dropdown").toggle();
		});




	// $('.transferAmount_client_logo').owlCarousel({
	// 	items:5,
	//     loop:true,
	//     dots:true,
	//     nav:true
	// })
	$(".transferAmount_client_logo").owlCarousel({
		  items: 5,
		  loop: true,
		  dots: false,
		  nav: true,
		  navText: [
		    '<i class="fas fa-chevron-left"></i>',
		    '<i class="fas fa-chevron-right"></i>',
		  ],
		   responsive: {
			    0: {
			      items: 2,
			    },
			    384: {
			      items: 3,
			    },
			    575: {
			      items: 5,
			    },
			  }
		});


	




})