/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-chat': '&#xe600;',
		'icon-chat-alt-stroke': '&#xe601;',
		'icon-chat-alt-fill': '&#xe602;',
		'icon-comment-alt1-stroke': '&#xe603;',
		'icon-comment': '&#xe604;',
		'icon-comment-stroke': '&#xe605;',
		'icon-comment-fill': '&#xe606;',
		'icon-comment-alt2-stroke': '&#xe607;',
		'icon-comment-alt2-fill': '&#xe608;',
		'icon-checkmark': '&#xe609;',
		'icon-check-alt': '&#xe60a;',
		'icon-x': '&#xe60b;',
		'icon-x-altx-alt': '&#xe60c;',
		'icon-denied': '&#xe60d;',
		'icon-wrench': '&#xe60e;',
		'icon-cog': '&#xe60f;',
		'icon-calendar': '&#xe610;',
		'icon-calendar-alt-stroke': '&#xe611;',
		'icon-calendar-alt-fill': '&#xe612;',
		'icon-mail': '&#xe613;',
		'icon-document-alt-stroke': '&#xe614;',
		'icon-document-alt-fill': '&#xe615;',
		'icon-document-stroke': '&#xe616;',
		'icon-document-fill': '&#xe617;',
		'icon-plus': '&#xe618;',
		'icon-plus-alt': '&#xe619;',
		'icon-minus': '&#xe61a;',
		'icon-minus-alt': '&#xe61b;',
		'icon-pin': '&#xe61c;',
		'icon-link': '&#xe61d;',
		'icon-bolt': '&#xe61e;',
		'icon-move': '&#xe61f;',
		'icon-move-alt1': '&#xe620;',
		'icon-move-alt2': '&#xe621;',
		'icon-award-fill': '&#xe622;',
		'icon-award-stroke': '&#xe623;',
		'icon-spin-alt': '&#xe624;',
		'icon-spin': '&#xe625;',
		'icon-curved-arrow': '&#xe626;',
		'icon-reload': '&#xe627;',
		'icon-reload-alt': '&#xe628;',
		'icon-loop-alt2': '&#xe629;',
		'icon-transfer': '&#xe62a;',
		'icon-arrow-left': '&#xe62b;',
		'icon-arrow-right': '&#xe62c;',
		'icon-arrow-up': '&#xe62d;',
		'icon-arrow-down': '&#xe62e;',
		'icon-play': '&#xe62f;',
		'icon-pause': '&#xe630;',
		'icon-stop': '&#xe631;',
		'icon-eject': '&#xe632;',
		'icon-first': '&#xe633;',
		'icon-last': '&#xe634;',
		'icon-play-alt': '&#xe635;',
		'icon-fullscreen-exit': '&#xe636;',
		'icon-fullscreen': '&#xe637;',
		'icon-list': '&#xe638;',
		'icon-pen-alt-fill': '&#xe639;',
		'icon-brush-alt': '&#xe63a;',
		'icon-layers': '&#xe63b;',
		'icon-bars': '&#xe63c;',
		'icon-eye': '&#xe63d;',
		'icon-user': '&#xe63e;',
		'icon-home': '&#xe63f;',
		'icon-lock-fill': '&#xe640;',
		'icon-unlock-fill': '&#xe641;',
		'icon-tag-stroke': '&#xe642;',
		'icon-tag-fill': '&#xe643;',
		'icon-sun-stroke': '&#xe644;',
		'icon-sun-fill': '&#xe645;',
		'icon-star': '&#xe646;',
		'icon-map-pin-stroke': '&#xe647;',
		'icon-map-pin-alt': '&#xe648;',
		'icon-target': '&#xe649;',
		'icon-download': '&#xe64a;',
		'icon-upload': '&#xe64b;',
		'icon-cloud-download': '&#xe64c;',
		'icon-cloud-upload': '&#xe64d;',
		'icon-paperclip': '&#xe64e;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
