/************
 * INSTRUCTIONS: Copy below and paste fully into URL box
 */

javascript:

/**
 * Changes an existing element's style (newly created elements won't be affected)
 * Works in bookmarklet but not in javascript: URL (Firefox only)
 */ 
function Sty(sel,obj){
	var a=$$(sel);
	for(var i=0;i<a.length;i++){
		for(var j in obj){
			a[i].style[j]=obj[j]
		}
	}
}

/**
 * Changes the CSS rule.
 * Does not work in Firefox (SecurityError)
 */ 
function aCSS(r,def) {
	var sss=document.styleSheets;
	if (sss){
		for (var i=0;i<sss.length;i++){
			if (sss[i].cssRules || sss[i].rules) {
				if (sss[i].addRule){ /* IE + cHrome */
					/* For IE9, add it to the LAST stylesheet 
					 * For Google Chrome, add it to the FIRST stylesheet 
					 * TODO: Optimize this.
					 */
					sss[i].addRule(r,def,0);
				}
				else if (sss[i].insertRule){ /* FF + Chrome + IE 9 */ 
					sss[i].insertRule(r+'{'+def+'}', 0);
					break;
				}
			}
		}
	}
}

o0 = {"backgroundColor":"#000","color":"#ccc"}; /* BLACK */
o1 = {"backgroundColor":"#111","color":"#ccc"}; /* DARKEST GRAY*/
oimg = {"backgroundImage":"none"};
/* oT = {"color":"#ccc"}; /* TEXT ONLY */

s0 = "background-color:#000;color:#ccc"; /* BLACK */
s1 = "background:#111;color:#ccc;"; /* DARKEST GRAY */
s2 = s1 + ";border-color:#333"; /* DARKEST GRAY + OUTLINE */
s3 = "background-color:#113;color:#ccc"; /* DARK BLUE */
sT = "color:#ccc"; /* TEXT ONLY */

/* Main backgrounds */
Sty("#primarywrap", o0);
Sty("#primarywrap", oimg);
Sty("#subwrap,#footer,#footer a", o0);

/* Category links at the top (Top New, Favorites, Shooter, ...) */
/*
 * This is the annoying gradient at the top of each page
 * #play .gamepage_header_outer {background-image: linear-gradient(to bottom, rgba(255,255,255,0.95) 0%,rgba(255,255,255,0) 100%)}
 */
Sty("#play .gamepage_header_outer", oimg);
/* aCSS("#play .gamepage_header_outer","background-image:none"); */
aCSS(".gamepage_category a",s0)

/* Border around game and chat  - use bg-COLOR to preserve images */
Sty("#maingame,#quicklinks li,#kong_game_ui ul.main_tabs", o1);
/* TABs */
aCSS("#kong_game_ui ul.main_tabs li.tab a.active",s0);

/* CHAT tab */
Sty("#chat_container,.tabpane", o0);

/* Room name (not tab) */
Sty(".room_name",{"color":"#eee"});
/* Room tab */
aCSS("#kong_game_ui .chat_room_tab.active a",s1);
aCSS("#kong_game_ui .chat_room_tab a",s0);

/*Sty("#kong_game_ui .chat_room_tab.active a",o1);*/
/* user list */
Sty(".chat_message_window,.users_in_room",o1);
aCSS("#kong_game_ui .user_row .username","color:#ccc");
/* chat messages */
aCSS("#kong_game_ui .chat_message_window .whisper", s3); /* dark blue*/
aCSS("#kong_game_ui .chat_message_window .even", s0);
aCSS("#kong_game_ui .chat_message_window .error_msg", "background-color:#311"); /* dark red */
Sty(".chat_input",o1);

/* GAME INFO tab */
aCSS(".cntrToggle",s1);
aCSS(".panel_handle a","color:#ccc");

/* ACHIEVEMENTS tab */
aCSS("#kong_game_ui .accomplishment_vtabpane_content", s2);
/* active vs inactive achievements - make them same colors for simplicity */
aCSS("#kong_game_ui ul.accomplishment_vtabs li.vtab a", s1);
aCSS("#kong_game_ui ul.accomplishment_vtabs li.vtab a.active", s2);
aCSS("#kong_game_ui .chat_promotion",s1);
/*Sty(".part_of_quest",o0);*/
aCSS("#kong_game_ui .game_accomplishment .accomplishment_header .part_of_quest",s0);



/* USER INFO tab */
aCSS("#kong_game_ui .tabpane .contents_inner",s1);


/* AWARD TAB - Next Achievement suggestion (cntrNotify) */
aCSS(".cntrNotify",s0);
/* AWARD TAB - BOTD notification (.regtxt) */
aCSS(".regtext",s1);
aCSS("#kong_game_ui .accomplishment_completed .check_tomorrow",s0);

/* TODO: Do the above still apply? */
/* AWARD tab - NEW 2013 - has a two-tone gray/white background with image. Make the text dark to be readable */
aCSS("#accomplishment_awarded_tab_pane_content","color:#000");

/* Chat Select Dropdown */
aCSS("#kong_game_ui .chat_actions_container select",s1);

/* HIGH SCORES tab */

aCSS("select",s2);
aCSS("#high_scores_container .bucket,#high_scores_container table,#high_scores_container ul.high_score_tabs li.high_score_panel_tab a.active,#high_scores_container .pagination",s1);
aCSS("#high_scores_container table td.username a",sT);
aCSS("#high_scores_container table tr.myscore td",s3);

/* Chat Room Chooser */
aCSS("#kong_game_ui #chat_room_chooser .rooms_list",s1)
aCSS("#kong_game_ui #chat_room_chooser .rooms .room.even",s0)

/* 
background-color: white;
#kong_game_ui #chat_room_chooser .rooms_list - #fff
background-color: #EFEFEF;
#kong_game_ui #chat_room_chooser .rooms .room.even
*/


/********** NEW LAYOUT ***************/


Sty("#play.new_gamepage .game_page_wrap",o0);
Sty(".game_details_outer",{"background":"#000","color":"#ccc"});
Sty(".game_tab_content",o1);
Sty(".game_comments .comments_type",o0);
Sty(".game_comments .comment .sender_name_link",o1);

Sty(".game_tab_group",o0); /* BG for most of the boxes below the game; 2013-12-02 */
/* Sty(".game_tab_link",o1); /* bad - don't do this */
Sty(".game_tab_index",o1); /* Tab row*/

aCSS(".game_tab_item .game_tab_link","background-color:#E8E8E8"); /* This doesn't seem to work anymore */
/* FAIL */
/* Sty(".game_tabs_item.active .game_tabs_link",o0); */
/* FAIL */


/*Sty(".game_more_games .pod_header",o1);*/
Sty(".pod_header",o1);
/* Need "background" to replace bg-image*/
/*Sty(".game_comments .game_comment_form_lower, .game_discussions .game_discussions_links",{"background":"#111","color":"#ccc"});*/
Sty(".game_comment_form_lower,.game_discussions_links",{"background":"#111","color":"#ccc"});
Sty(".tag a",o0);

/* The published date and # of gameplays is black text with !important marking... need to override it similarly */
aCSS(".highcontrast", "color:white!important")

/* Forum Posts */
Sty(".post_tagline,.post_author",o0);
Sty(".post_message a",o1);


/************ COMMON TO OLD AND NEW LAYOUT ******************/

/*  sidebar/ads + recommended games */
Sty("#gamespotlight_container",o0);
Sty(".game",{"color":"#ccc"});

/* Text box for writing comments */
Sty("#comment_content_0, #comment_content_1",{"backgroundColor":"#222","color":"#ccc","borderColor":"#333"});

/* Game Developer Comments */
Sty(".comment_reply",o0);

/*  - not overrideable ATM
  .highcontrast - #000!important */

/*Sty(".highcontrast",{'backgroundColor':'#cc9'});*/



/************ FORUMS *************/
/* 
 * Sty(".posts .post .body blockquote, .posts .post .body pre",{"background":"#222","borderColor":"#333"})
 */
