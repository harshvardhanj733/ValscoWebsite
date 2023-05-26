import React, { useEffect } from 'react';
import './ProductsPage.css';

let obj = [{
  img: "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  id: 0,

},
{
  img: "https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  id: 1,


},
{
  img: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  id: 2,


},
{
  img: "https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGxhd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  id: 3,


},
{
  img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  id: 4,
}
];
const Slide = () => {
  let currPointer = 2;

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
          small(0);
          break;
        case 'ArrowDown':
        case 'ArrowRight':
          small(1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const small = (id) => {
    const ld = document.getElementsByClassName('one')[1];
    const rd = document.getElementsByClassName('rights')[0];
    ld.classList.add('leftd');
    rd.classList.add('rightd');

    if (id === 0) {
      setTimeout(previ, 700);
    } else {
      setTimeout(nexti, 700);
    }
  };

  const previ = () => {
    const ph = document.getElementById('ph');
    const cen = document.getElementById('cen');
    const nex = document.getElementById('nex');

    ph.src = obj[currPointer].img;
    currPointer++;
    if (currPointer === obj.length) {
      currPointer = 0;
    }
    cen.src = obj[currPointer].img;

    if (currPointer === obj.length - 1) {
      nex.src = obj[0].img;
    } else {
      nex.src = obj[currPointer + 1].img;
    }

    setTimeout(up, 200);
  };

  const up = () => {
    const up = document.getElementById('up');
    if (up) {
      up.classList.remove('down');
      up.classList.add('top');
      up.setAttribute('id', 'up');
    }
  };

  const nexti = () => {
    const ph = document.getElementById('ph');
    const cen = document.getElementById('cen');
    const nex = document.getElementById('nex');

    nex.src = obj[currPointer].img;
    currPointer--;
    if (currPointer === -1) {
      currPointer = obj.length - 1;
    }
    cen.src = obj[currPointer].img;

    if (currPointer === 0) {
      ph.src = obj[obj.length - 1].img;
    } else {
      ph.src = obj[currPointer - 1].img;
    }

    setTimeout(up, 200);
  };

  return (
    <>
      <div className="product">
        <h2>Products</h2>
      </div>
      <div className="full">
        <div className="one">
          <img
            src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt=""
          />
        </div>
        <div id="test" className="one leftd" onClick={() => small(0)}>
          <img
            id="ph"
            src="https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div id="up" className="text">
          <a href="https://www.youtube.com/">
            <img
              id="cen"
              src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt=""
            />
          </a>
        </div>
        <div className="rights">
          <img
            id="nex"
            src="https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGxhd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
        <div className="rights">
          <img
            src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </div>

      <button className="prev" type="button" onClick={() => small(0)}>
        &lt;
      </button>
      <button className="next" type="button" onClick={() => small(1)}>
        &gt;
      </button>
    </>
  );
};

export default Slide;
