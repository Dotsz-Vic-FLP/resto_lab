
const Appetizers = () => { // Part 1
    document.body.style.backgroundImage="url('./imgs/resto-bg.jpg')";
    document.body.style.backgroundRepeat='stretch';
    document.body.style.margin='0';
    
    const appetizerContainer = document.createElement('div');
    appetizerContainer.setAttribute('class', 'container');
    
    const appetizersContent = document.createElement('div');
    appetizersContent.setAttribute('class', 'appetizer-container');

    const appetizer1 = document.createElement('img')
    appetizer1.setAttribute('class','appetizer1');
    appetizer1.src = './imgs/Creamy-Buko-Melon-Salad.jpg';
    
    const appetizer2 = document.createElement('img')
    appetizer2.setAttribute('class','appetizer2');
    appetizer2.src = './imgs/Tokneneng.jpg';
    
    const appetizer3 = document.createElement('img')
    appetizer3.setAttribute('class','appetizer3');
    appetizer3.src = './imgs/Onions-Rings.jpg';
    
    appetizersContent.appendChild(appetizer1)
    appetizersContent.appendChild(appetizer2)
    appetizersContent.appendChild(appetizer3)
    appetizerContainer.appendChild(appetizersContent)

    return appetizersContent;
  };
  
  export default Appetizers;