import Home from './home.js';
import Menu from './menu.js';
import Navbar from './navbar.js';
import Contact from './contact.js';
import Appetizers from './appetizers.js';
import OrderOnline from './orderonline.js';
import FoodPictures from './foodpictures.js';

const Index = () => {
  function italicsBody() {
    document.body.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
  }
  italicsBody();
  
  const content = document.getElementById('content');
  const navbar = Navbar();
  content.appendChild(navbar);
  const home = Home();
  content.appendChild(home);
  
  // NAVBAR CLICKING
  
  const menu = Menu();
  const contact = Contact();
  const appetizers = Appetizers();
  
  const link1 = document.getElementById('home');
  link1.addEventListener('click', () => {
    content.replaceChild(home, content.childNodes[1]);
  });
  
  const link2 = document.getElementById('appetizers');
  link2.addEventListener('click', () => {
    content.replaceChild(appetizers, content.childNodes[1]);
  }); 
  
  const link3 = document.getElementById('menu');
  link3.addEventListener('click', () => {
    content.replaceChild(menu, content.childNodes[1]);
  });
  
  const link4 = document.getElementById('contact');
  link4.addEventListener('click', () => {
    content.replaceChild(contact, content.childNodes[1]);
  });  

  const link5 = document.getElementById('orderonline');
  link5.addEventListener('click', () => {
    content.replaceChild(OrderOnline(), content.childNodes[1]);
  });

  const link6 = document.getElementById('foodpictures');
  link6.addEventListener('click', () => {
    content.replaceChild(FoodPictures(), content.childNodes[1]);
  });
  
};

export default Index;
