export default function (str) {
    let Arraystr = str.split('')
    let temp = [];
    let newStr;

      for(let i=0;i<15;i++){
        temp.push(Arraystr[i]);
      }
      newStr = temp.join('');
      newStr += ' ...'

      return newStr;
  }