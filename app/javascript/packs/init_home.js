const home = () => {
  const hillLeft = document.getElementById('hill-left');
  const hillRight = document.getElementById('hill-right');
  const treesLeft = document.getElementById('trees-left');
  const treesRight = document.getElementById('trees-right');
  const mountainLeft = document.getElementById('mountain-left');
  const mountainRight = document.getElementById('mountain-right');
  const mountainsBack = document.getElementById('mountains-back');
  const sun = document.getElementById('sun');
  const nightSky = document.getElementById('night-sky');

  window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    console.log(value);
    hillLeft.style.top = value * 1.25 + 'px';
    hillRight.style.top = value * 1.24 + 'px';
    treesLeft.style.top = value * 1.17 + 'px';
    treesRight.style.top = value * 1.16 + 'px';
    mountainLeft.style.top = value * 1.14 + 'px';
    mountainRight.style.top = value * 1.13 + 'px';
    mountainsBack.style.top = 100 + value * 1.12 + 'px';
    sun.style.top = 1000 - (value / 2) + 'px';
    nightSky.style.top = 0 - (value / 2) + 'px';
  })
}

export default home;