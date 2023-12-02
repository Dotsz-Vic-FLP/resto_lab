const OrderOnline = () => { // Part 2
    
    // Form
    const form = document.createElement('form');
    form.setAttribute('action', 'https://formspree.io/f/mnqkowpa'); 
    form.setAttribute('method', 'POST');
  
    // name 
    const nameLabel = document.createElement('label');
    nameLabel.innerHTML = 'Name: ';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.required = true;
  
    // email 
    const emailLabel = document.createElement('label');
    emailLabel.innerHTML = 'Email: ';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.required = true;
  
    // textarea
    const orderLabel = document.createElement('label');
    orderLabel.innerHTML = 'Your Order: ';
    const orderInput = document.createElement('textarea');
    orderInput.setAttribute('name', 'order');
    orderInput.setAttribute('rows', '20');
    orderInput.setAttribute('cols', '50');
    orderInput.required = true;
  
    // submit
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerHTML = 'Place Order';
  
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));
  
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(document.createElement('br')); 
  
    form.appendChild(orderLabel);
    form.appendChild(orderInput);
    form.appendChild(document.createElement('br'));
  
    form.appendChild(submitButton);
    


    return form;
    
  };
  
  export default OrderOnline;
  