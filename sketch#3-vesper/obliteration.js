

// global variables
var mSpeed = 0;

// title animation
var titleFrame = 0;
var titleMsg = [".", "⚬", "○", "0", "o", "⚬"];
function titleAnim1() {
    titleFrame = ++ titleFrame % titleMsg.length; // ++ prefix -> incrementation
    document.title = titleMsg[titleFrame]+ "bliteration"; 
}

// another title animation method 
function titleAnim2(Title, delay) {
    let counter = 0;
    let direction = true;
    aniTitle = setInterval(function () {
        if (counter == Title.length)
            direction = false;
        if (counter == 1)
            direction = true;
        counter = (direction == true) ? ++counter : --counter;
        newtitle = (counter == 0) ? "" : Title.slice(0, counter);
        document.title = newtitle;
    }, delay)
}
// titleAnim2(". ⚬ o ○  ", 120);



// text highlighter -> reveal 
var t = '';
function gText(e) {
    clearTimeout();
    document.querySelector('.selectedText').innerHTML = ''; 
    document.querySelector('.selectedText').classList.remove('fadeOut');

    t = (document.all) ? document.selection.createRange().text : document.getSelection(); // if true=>createRange; else=>getSelection
    var repetition = t.toString().repeat(100);
    document.querySelector('.selectedText').innerHTML = repetition; // show selected text in destined field
    // document.querySelector('.matterOwords').style.visibility = "visible"; 

   var fadeout = setTimeout(()=>{
        document.querySelector('.selectedText').style.backgroundcolor = "black"; 
        document.querySelector('.selectedText').classList.add('fadeOut');
    }, 10);
            

}
document.onmouseup = gText;
if (!document) document.captureEvents(Event.MOUSEUP);






// cursor speed
var timestamp, now, currentmY, dt, distance, mY;
window.addEventListener("mousemove", (e)=>{
    now = Date.now();
    currentmY = e.screenY;
    dt = now - timestamp;
    distance = Math.abs(currentmY - mY);
    var speed = Math.round(distance / dt * 1000);
    mSpeed = speed;
    mY = currentmY;
    timestamp = now;
    titleAnim1();
});
    if (mSpeed == 0 ){
        // document.title = "";
    }
