const isMobile = typeof window.screen.orientation;
const boo = typeof window.screen.orientation !== 'undefined';
const j = JSON.stringify(isMobile);

alert(boo);
alert(j);
alert(isMobile);