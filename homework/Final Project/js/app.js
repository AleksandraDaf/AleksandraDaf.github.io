

var el = document.getElementsByClassName('menu-item');

for(var i=0; i<el.length; i++) {
   el[i].addEventListener("mouseenter", showSub, false);
   el[i].addEventListener("mouseleave", hideSub, false);
}

function showSub(e) {
   if(this.children.length>1) {
      this.children[1].style.height = "auto";
      this.children[1].style.overflow = "visible";
      this.children[1].style.opacity = "1";
   } else {
      return false;
   }
}

function hideSub(e) {
    if(this.children.length>1) {
      this.children[1].style.height = "0px";
       this.children[1].style.overflow = "hidden";
       this.children[1].style.opacity = "0";
    } else {
       return false;
    }
}




/*
<script type="text/javascript" src="js/dropdown-menu.js"></script>
<script type="text/javascript">
	jQuery(document).ready(function($) {
		jQuery('.dropdown-menu').dropdown-menu();
	});
</script>

jQuery('.dropdown-menu').dropdown-menu({
	theme: 'plain',
	breakpoint: 768,
	menuLabel: 'Menu',
	sticky: false,
	position: 'static',
	openingSpeed: 250,
	closingDelay: 250,
	showArrows: true,
	closeBtn: false,
	scrollbarFix: false
});	
*/