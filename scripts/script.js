"use strict";

const wrapper = document.querySelector('.wrapper');


function DomElement(selector, height, width, bg, fontSize){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  }
  
  DomElement.prototype.createElement = function(){
     if (this.selector[0] === '.'){
      const arr = this.selector.split(''),
            className = arr.splice(0, 1);
      const div = document.createElement('div');
            div.classList.add(className.join(''));
            div.textContent = 'Its DIV element';
            wrapper.append(div);
            div.setAttribute('style', `height:${this.height}rem; width:${this.width}rem; 
            background-color:${this.bg}; font-size:${this.fontSize}em;`);
     } 
    else if (this.selector[0] === '#'){
      const arr = this.selector.split(''),
            idName = arr.splice(0, 1);
      const p = document.createElement('p');
            p.id = `${idName.join('')}`;
            p.textContent = 'Its P element';
            wrapper.append(p);
            p.setAttribute('style', `height:${this.height}rem; width:${this.width}rem; 
            background-color:${this.bg}; font-size:${this.fontSize}em;`);
    }
  };

  let newElement1 = new DomElement('.block', 2, 'auto', '#FF9', 2);

  newElement1.createElement();

  let newElement2 = new DomElement('#best', 2, 'auto', '#FDF', 2);

  newElement2.createElement();

