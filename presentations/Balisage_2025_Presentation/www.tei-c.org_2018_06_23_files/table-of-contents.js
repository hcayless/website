var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var ToC =
  "<nav role='navigation' class='toc toc_body'>" +
    "<h2>Contents</h2>" +
    "<ul>";

var newLine, el, title, link, count = 0;

jQuery("article h2").each(function() {

  count++;

  el = jQuery(this);
  title = el.text();

  if ( el.attr( 'id' ) ) {
    link = '#' + el.attr( 'id' );
  } else {
    el.attr( 'id', 'section-' + count )
    link = '#section-' + count;
  }

  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += newLine;

});

ToC +=
   "</ul>" +
  "</nav>";

if ( document.querySelector( 'h2' ) ) {
  jQuery(".entry-content").prepend(ToC);
}


}
/*
     FILE ARCHIVED ON 17:17:56 Sep 07, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:39:18 Aug 03, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.701
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.011
  esindex: 0.014
  cdx.remote: 55.561
  LoadShardBlock: 305.874 (3)
  PetaboxLoader3.datanode: 436.184 (4)
  PetaboxLoader3.resolve: 331.193 (3)
  load_resource: 480.003
*/