const home = () => {
  const hillLeft = document.getElementById('hill-left');
  const hillRight = document.getElementById('hill-right');
  const treesLeft = document.getElementById('trees-left');
  const treesRight = document.getElementById('trees-right');
  const mountainLeft = document.getElementById('mountain-left');
  const mountainRight = document.getElementById('mountain-right');

  window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    hillLeft.style.top = value * 1.25 + 'px';
    hillRight.style.top = value * 1.21 + 'px';
    treesLeft.style.top = value * 1.17 + 'px';
    treesRight.style.top = value * 1.13 + 'px';
    mountainLeft.style.top = value * 1.09 + 'px';
    mountainRight.style.top = value * 1.06 + 'px';
  })
}

export default home;