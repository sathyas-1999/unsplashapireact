import React from 'react';
import './App.css';
  const apiRoot = 'https://api.unsplash.com';
const accessKey = 'DUZJ4p_qKrFaihX9Wz5Elx8Td-2asj6K6vMQFADgY74';
const addToDom = photos => {
  photos.forEach(photo => {
    let el = document.createElement('div');
    el.classList.add('image-item');
    el.style.backgroundColor = photo.color;
    el.innerHTML = `<img src="${photo.urls.regular}=">
    <div class="containerimg">
    <img src="${photo.user.profile_image.small}=" class="imgcls">
    <p class="para1">${photo.user.username}</p>
    </div>
    <div class="icondiv">
    <button class="iconbtn"><i class='fas fa-arrow-down'></i>
    </button>
    <button class="iconbtn2"><i class="fa fa-heart"></i></button>
    <button class="iconbtn3"><i class="fa fa-plus"></i></button>
  </div>
`;
    document.querySelector('.image-grid').appendChild(el);
  });
};
const something=(event)=>{
  if(event.keyCode===13){
    event.preventDefault();
    search1();
  }
}
const search1 = () => {
  let query = '';
  let stmt = document.getElementById('search');
  let stmt1 = document.getElementById('searchbar');
  document.getElementById('myDIV').style.display = 'none';
  document.getElementById('imagediv').innerHTML = '';
  let photos = [];
  if (stmt.value !== '') {
    query = stmt.value;
  } else if (stmt1.value !== '') {
    query = stmt1.value;
  }
  fetch(
    `${apiRoot}/search/photos/?client_id=${accessKey}&query=${query}&page=1`
  )
    .then(res => {
      return res.json();
    })
    .then(data => {
      photos.push(...data['results']);
      addToDom(photos);
    })
    .catch(err => {
      console.log(err);
    });
};

const loadMore1 = temp => {
  let photos = [];
  fetch(`${apiRoot}/photos/?client_id=${accessKey}&page=${temp}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      photos.push(...data);
      addToDom(photos);
    })
    .catch(err => {
      console.log(err);
    });
};

const search2 = temp => {
  let query = '';
  let photos = [];
  let stmt = document.getElementById('search');
  let stmt1 = document.getElementById('searchbar');
  if (y !== '') {
    query = y;
  } else if (stmt1.value !== '') {
    query = stmt1.value;
  } else if (stmt.value !== '') {
    query = stmt.value;
  }
  fetch(
    `${apiRoot}/search/photos/?client_id=${accessKey}&query=${query}&page=${temp}`
  )
    .then(res => {
      return res.json();
    })
    .then(data => {
      photos.push(...data['results']);
      addToDom(photos);
    })
    .catch(err => {
      console.log(err);
    });
};
let y = '';
const func1 = x => {
  y = x;
  document.getElementById('myDIV').style.display = 'none';
  document.getElementById('imagediv').innerHTML = '';
  let photos = [];
  fetch(`${apiRoot}/search/photos/?client_id=${accessKey}&query=${y}&page=1`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      photos.push(...data['results']);
      addToDom(photos);
    })
    .catch(err => {
      console.log(err);
    });
};

const loadMore = () => {
  let photos = [];
  fetch(`${apiRoot}/photos/?client_id=${accessKey}&page=1`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      photos.push(...data);
      addToDom(photos);
    })
    .catch(err => {
      console.log(err);
    });
};
let count = 1;
window.addEventListener('scroll', function() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    let stmt = document.getElementById('search');
    let stmt1 = document.getElementById('searchbar');
    count++;
    if (stmt.value === '' && stmt1.value === '' && y === '') {
      loadMore1(count);
    } else {
      search2(count);
    }
  }
});
loadMore();
var flag = 0;
function func2() {
  if (flag === 0) {
    flag = 1;
    document.getElementById('mySidenav').style.display = 'block';
  } else {
    flag = 0;
    document.getElementById('mySidenav').style.display = 'none';
  }
}
function func3() {
  if (flag === 0) {
    flag = 1;
    document.getElementById('mySidenav1').style.display = 'block';
  } else {
    flag = 0;
    document.getElementById('mySidenav1').style.display = 'none';
  }
}
function Home() {

  return (
    <div>
    <header>
      <nav className="navbar">
        <div className="left">
          <div className="logo">
            <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/unsplash-512.png" />
            <h1 style={{ marginLeft: '40px' }}>Unsplash</h1>
            <p style={{ marginLeft: '40px', fontSize: '12px' }}>
              Photos for everyone
            </p>
          </div>
          <div className="nav-search-form">
            <form style={{ position: 'relative' }}>
              <i
                className="fa fa-search"
                style={{ position: 'absolute', top: '10px', left: '20px' }}
              />
              <i className="material-icons">&#xe3b5;</i>
              <input
                type="text"
                placeholder="Search"
                id="search" onKeyDown={(e)=>something(e)}
              />
            </form>
          </div>
        </div>
        <ul className="nav">
          <li className="list">
            <a href="#" className="home">
              Explore
            </a>
          </li>
          <li className="list">
            <a href="#" className="home">
              We're hiring
            </a>
          </li>
          <li className="list">
            <i className="fa fa-ellipsis-h" id="ellipse" onClick={func2} />
            <div id="mySidenav" className="sidenav">
              <a href="#">About</a>
              <a href="#">Wallpapers</a>
              <a href="#">Blog</a>
              <a href="#">Topics</a>
              <a href="#">Collections</a>
              <a href="#">Community</a>
              <a href="#">History</a>
              <a href="#">Made with Unsplash</a>
              <a href="#">API/Developers</a>
              <a href="#">Official Apps</a>
            </div>
          </li>
          <li className="list">
            <button className="btn" className="home">
              Submit
            </button>
          </li>
          <li className="list">
              <a href="/Login" className="home">Login
              </a>
          </li>
          <li>
            <a
              href="/Joinfree"
              className="join"
              style={{ width: '80px' }}
            >
              Join free
            </a>
          </li>
          <li>
            <i className="fa fa-bars" id="menubar" onClick={func3} />
            <div id="mySidenav1" className="sidenav1">
              <a href="#">About</a>
              <a href="#">Wallpapers</a>
              <a href="#">Blog</a>
              <a href="#">Topics</a>
              <a href="#">Collections</a>
              <a href="#">Community</a>
              <a href="#">History</a>
              <a href="#">Made with Unsplash</a>
              <a href="#">API/Developers</a>
              <a href="#">Official Apps</a>
              <a href="#">Explore</a>
              <a href="#">We're hiring</a>
              <a href="/Login" class="home">Login</a>
              <a
                href="/Joinfree"
                className="join"
                style={{
                  marginLeft: '20px',
                  marginRight: '20px',
                  marginBottom: '20px'
                }}
              >
                Join free
              </a>
              <button
                className="btn"
                className="home"
                style={{
                  marginLeft: '20px',
                  marginRight: '20px',
                  marginBottom: '20px',
                  width: '120px'
                }}
              >
                Submit a photo
              </button>
            </div>
          </li>
        </ul>
      </nav>
      <div
        className="category-nav"
        style={{ width: '100vw', overflowX: 'scroll' }}
      >
        <div className="category">
          <a style={{ cursor: 'pointer' }} href="/">
            Editorial
          </a>
        </div>
        <div className="category">
          <button className="wall" onClick={() => func1('wallpapers')}>
            Wallpapers
          </button>
        </div>
        <div className="category">
          <button className="texture" onClick={() => func1('texture')}>
            Texture and Patterns
          </button>
        </div>
        <div className="category">
          <button className="nature" onClick={() => func1('nature')}>
            Nature
          </button>
        </div>
        <div className="category">
          <button
            className="current-events"
            onClick={() => func1('currentevents')}
          >
            Current Events
          </button>
        </div>
        <div className="category">
          <button className="architect" onClick={() => func1('architecture')}>
            Architecture
          </button>
        </div>
        <div className="category">
          <button className="business" onClick={() => func1('business work')}>
            Business and Work
          </button>
        </div>
        <div className="category">
          <button className="film" onClick={() => func1('film')}>
            Film
          </button>
        </div>
        <div className="category">
          <button className="animals" onClick={() => func1('animals')}>
            Animals
          </button>
        </div>
        <div className="category">
          <button className="travel" onClick={() => func1('travel')}>
            Travel
          </button>
        </div>
        <div className="category">
          <button className="fashion" onClick={() => func1('fashion')}>
            Fashion
          </button>
        </div>
        <div className="category">
          <button className="food" onClick={() => func1('foodanddrink')}>
            Food and Drink
          </button>
        </div>
        <div className="category">
          <button
            className="spirituality"
            onClick={() => func1('spirituality')}
          >
            Spirituality
          </button>
        </div>
      </div>
    </header>
    <section className="hero" id="myDIV">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Unsplash</h1>
          <p>
            The internet’s source of freely useable images.
            <br />
            Powered by creators everywhere.
          </p>
          <div className="hero-search-form">
            <form style={{ position: 'relative' }}>
              <i
                className="fa fa-search"
                id="search-icon"
                style={{ position: 'absolute', top: '20px', left: '20px' }}
              />
              <i
                className="material-icons"
                id="focus-icon"
                style={{ position: 'absolute', top: '18px', right: '20px' }}
              >
                &#xe3b5;
              </i>
              <input type="text" placeholder="Search" id="searchbar" onKeyDown={(e)=>something(e)} />
            </form>
          </div>
          <div className="trending-search-tags">
            <p>
              Trending searches: <a href="#">flower</a>,{' '}
              <a href="#">wallpaper</a>, <a href="#">sad</a>,{' '}
              <a href="#">love</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="container">
      <div className="image-grid" id="imagediv" />
    </div>
  </div>
  );
}
export default Home
