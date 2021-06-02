
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
     return text.replace("e"," ");

}
const concatString = (text1, text2) => {
         return text1.concat(text2);
}
const showChar5 = (text) => {
      
    return text[4];
}
const showChar9 = (text) => {
    return text.substring(0, 9);
}
const toCapitals = (text) => {
return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return typeof text === 'string';
}

const getExtension = (text) => {
    return text.split('.').pop();
}
const countSpaces = (text) => {
    var count=0;
    for(var i=0;i<text.length;i++){   
        if (text[i]==" ")
         count++;
    }
    return count;
}
const InverseString = (text) => {
  return text.split('').reverse().join('');

}

const power = (x, y) => {
    return Math.pow(x,y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    return array.map(Math.abs);       

}
const circleSurface = (radius) => {
      return Math.round( Math.PI*radius*radius );
}
const hypothenuse = (ab, ac) => {
       return  Math.sqrt( Math.pow(ab,2)+Math.pow(ac,2) );
}
const BMI = (weight, height) => {
    var num    = weight / (height * height);
    var result = num.toFixed(2);
    return parseFloat(result) ;

}

const createLanguagesArray = () => {
    return ["Html","CSS","Java","PHP"];
}

const createNumbersArray = () => {
    var arr = [];
    for(var i=0 ; i<6 ; i++){
        arr.push(i);
    }
    return arr;
}

const replaceElement = (languages) => {
    languages[2] = 'Javascript';
    return languages;
}

const addElement = (languages) => {
    languages.push('Ruby');
    languages.push('Python');
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-1);
    numbers.unshift(-2);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages; 
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    var social_array = social_arr.split(",");
    return social_array;
}

const convertArrToStr = (languages) => {
    var convertToS = languages.join(",");
    return convertToS;
}

const sortArr = (social_arr) => {
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();
}