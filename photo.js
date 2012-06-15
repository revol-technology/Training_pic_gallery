$(document).ready(function()
{
  $("img").click(function()
  {
    var image = this.src;
     $.facebox('<img src="'+image+'" class="pics"/><form id=comment><textarea name="comment"></textarea><br/><input type="submit" value="submit"/></form>');
   });
});
