const Navbar = () => { 
  const navbarContent = document.createElement('div');
  navbarContent.setAttribute('class', 'navbar fixed-top');

  // Part 4. Sandwich Icon / Hamburger Menu
  const hamburger = document.createElement('button');
  hamburger.setAttribute('class', 'hamburger');
  for (let i = 0; i<3 ; i++){
    const span = document.createElement('span');
    hamburger.appendChild(span);
  }
  // Navigation links container
  const navLinks = document.createElement('ul');
  navLinks.setAttribute('class', 'navLink');

  // Create links
  const populateNavLinks = () => {
    const links = [
        { id: 'home', text: 'Home' },
        { id: 'appetizers', text: 'Appetizers' },
        { id: 'menu', text: 'Menu' },
        { id: 'contact', text: 'Contact' },
        { id: 'orderonline', text: 'Order Online' },
        { id: 'foodpictures', text: 'Food Pictures' }
    ];

    links.forEach(link => {
        const listItem = document.createElement('li');
        listItem.setAttribute('class', 'nav-item list-unstyled mx-2');

        const anchor = document.createElement('a');
        anchor.setAttribute('id', link.id);
        anchor.setAttribute('class', 'mx-2');
        anchor.setAttribute('href', '#');
        anchor.textContent = link.text;

        listItem.appendChild(anchor);
        navLinks.appendChild(listItem);
    });
  };
  
  populateNavLinks();
  
  hamburger.addEventListener('click', () =>  {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  navbarContent.appendChild(hamburger);
  navbarContent.appendChild(navLinks);

  return navbarContent;
};

export default Navbar;