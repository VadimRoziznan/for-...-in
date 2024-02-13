export default class SpongeBob {
  constructor() {
    this.name = 'Губка Боб'; 
    this.health = 10; 
    this.level = 2; 
    this.attack = 80;
    this.defence = 40;
  }
  
  orderByProps(obj, options) {
    const orderedProps = [];
    const otherProps = [];
  
    for (const prop in obj) {
      if (options.includes(prop)) {
        orderedProps.push({ prop, value: obj[prop] });
      } else {
        otherProps.push({ prop, value: obj[prop] });
      }
    }
    orderedProps.sort((a, b) => options.indexOf(a.prop) - options.indexOf(b.prop));
    otherProps.sort((a, b) => a.prop.localeCompare(b.prop));
  
    return orderedProps.concat(otherProps);
  }

}
