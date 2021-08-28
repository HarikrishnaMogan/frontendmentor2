let con = document.createElement("div");
con.className="con";
document.body.append(con);
function prev()
{
    con.innerHTML=`
    <div class="profile">
       <img class="tanya" src="images/image-tanya.jpg">
       <div class="button">
         <img class="pre" onclick="prev()" src="images/icon-prev.svg">
         <img class="next" onclick="next()"src="images/icon-next.svg">
       </div>
    </div>
    <div class="desc">
     “ I’ve been interested in coding for a while but never taken the jump, until now. 
     I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
     excited about the future. ”
    </div>
 <div class="details">
  <p>Tanya Sinclair</p>
   <p>UX Engineer</p>
 </div>
    `;
}
prev();
function next()
{
    con.innerHTML=`
    <div class="profile">
    <img class="tanya" src="images/image-john.jpg">
       <div class="button">
         <img class="pre" onclick="prev()" src="images/icon-prev.svg">
         <img class="next" onclick="next()"src="images/icon-next.svg">
       </div>
    </div>
    <div class="desc">
    “ If you want to lay the best foundation possible I’d recommend taking this course. 
  The depth the instructors go into is incredible. I now feel so confident about 
  starting up as a professional developer. ”
    </div>
 <div class="details">
  <p>John Tarkpor</p>
   <p>  Junior Front-end Developer</p>
 </div>
   
    `;
}
