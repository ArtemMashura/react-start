import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserComponent from './Components/UserComponent/App'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='users'>
      <UserComponent name="TEST1" price="3 330" url="https://yellow.ua/media/catalog/product/cache/9/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/1/9/x193812675.jpg.pagespeed.ic.4Uj4pOwLja.webp"/>
      <UserComponent name="TEST2" price="3 999" url="https://yellow.ua/media/catalog/product/cache/9/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/8/7/x8759402.jpg.pagespeed.ic.mf8paL7NVb.webp"/>
      <UserComponent name="TEST3" price="16 049" url="https://yellow.ua/media/catalog/product/cache/9/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/q/v/xqv8lef3cru472hg4fr6hfkhr4vmu20ie.png.pagespeed.ic.9EjIQLwAX2.webp"/>

      <UserComponent name="TEST3" price="13 699" url="https://yellow.ua/media/catalog/product/cache/9/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/1/0/x10692073.jpg.pagespeed.ic.E6Kl0pwmmC.webp"/>
      <UserComponent name="TEST3" price="41 799" url="https://yellow.ua/media/catalog/product/cache/9/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/2/8/x281506329_1.jpg.pagespeed.ic.mbOPfL3Aw8.webp"/>
      <UserComponent name="TEST3" price="31 799" url="https://yellow.ua/media/catalog/product/cache/9/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/1/6/x1694173opt.jpg.pagespeed.ic.W0tKDdjUIQ.webp"/>

    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
