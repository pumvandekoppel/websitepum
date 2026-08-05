var focused;
const body = document.getElementsByTagName("body")[0];
const aside = document.getElementsByTagName("aside")[0];
const main = document.getElementsByTagName("main")[0];
var images = document.getElementsByTagName("img");
const desktopMediaQuery = window.matchMedia("(min-width: 809px)");
const mobileMediaQuery = window.matchMedia("(max-width: 808px)");
const contextButton = document.getElementById("context-button");
const hint = document.getElementById("hint");

function checkFocus() {
  if (desktopMediaQuery.matches) {
    focused = false;
  } else if (mobileMediaQuery.matches) {
    focused = true;
  }
}

window.onload = function() {
  checkFocus();
}

function focusSwitch() {
  if (desktopMediaQuery.matches) {
    if (focused == false) {
      aside.style.marginLeft = "-57vw";
      focused = true;
    } else if (focused == true) {
      aside.style.marginLeft = "0";
      focused = false;
    }
  } else if (mobileMediaQuery.matches) {
    if (focused == true) {
	  contextButton.style.color = "#404142";
	  contextButton.style.paddingLeft = "5px";
	  contextButton.style.paddingRight = "5px";
      aside.style.left = "calc(3vw + 1px)";
      scheef();
      focused = false;
      hint.style.marginLeft = "45vw";
    } else {
	  contextButton.style.color = "white";
      aside.style.left = "-95vw";
      focused = true;
      hint.style.marginLeft = "90vw";
    }
  }
}

// Add event listeners for touchstart and touchend events
main.addEventListener("touchstart", touchStart);
main.addEventListener("touchend", touchEnd);

// Declare variables to store the timestamp and initial touch coordinates
let touchStartTime, clientX, clientY;

function touchStart(e) {
  // Prevent the default behavior (e.g. scrolling) of the touch event
  //   e.preventDefault();

  // Record the timestamp of the touch event
  touchStartTime = Date.now();

  // Record the X and Y coordinates of the touch on the screen
  clientY = e.touches[0].clientY;
  clientX = e.touches[0].clientX;
}

function touchEnd(e) {
  // Record the timestamp of the touch end event
  const touchEndTime = Date.now();

  // Call the swipe function to check if a swipe gesture occurred
  swipe(e, touchEndTime - touchStartTime);
}

const DURATION_THRESHOLD = 500;
const MOVE_THRESHOLD = 100;

var eventListenerTarget = "main";

function changeEventListener() {
  if (focused == true) {
    aside.removeEventListener("touchstart", touchStart);
    aside.removeEventListener("touchend", touchEnd);
    main.addEventListener("touchstart", touchStart);
    main.addEventListener("touchend", touchEnd);
    eventListenerTarget = "main";
  } else {
    aside.addEventListener("touchstart", touchStart);
    aside.addEventListener("touchend", touchEnd);
    main.removeEventListener("touchstart", touchStart);
    main.removeEventListener("touchend", touchEnd);
    eventListenerTarget = "aside";
  }
}

function swipe(e, duration) {
  // Get the final X and Y coordinates of the touch
  const endClientX = e.changedTouches[0].clientX;
  const endClientY = e.changedTouches[0].clientY;

  // Check if the elapsed time between touchstart and touchend events is less than or equal to the duration threshold
  if (duration <= DURATION_THRESHOLD) {
    // Check if the touch moved at least MOVE_THRESHOLD pixels in the X or Y direction
    if (clientY - endClientY >= MOVE_THRESHOLD) {
      // Swipe up detected
      // Perform any additional code for swipe up here
    } else if (endClientY - clientY >= MOVE_THRESHOLD) {
      // Swipe down detected
      // Perform any additional code for swipe down here
    } else if (endClientX - clientX >= MOVE_THRESHOLD) {
      // Swipe right detected
      if (eventListenerTarget == "main") {
        unfocus();
        changeEventListener();
      }

      // Perform any additional code for swipe right here
    } else if (clientX - endClientX >= MOVE_THRESHOLD) {
      // Swipe left detected
      if (eventListenerTarget == "aside") {
        unfocus();
        changeEventListener();
      }
    }
  }
}
