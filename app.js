const http = require('http');
const fs = require('fs');

const pokemon = require('pokemon');
const data = pokemon.all('ko')
let htmlli = `<li>${data[0]}</li>`
let pokemonLi=[];

for (i = 0; i < data.length; i++){
  for (j=pokemonLi.length; j <= pokemonLi.length; j++){
  pokemonLi[j] = "<li>" + data[i] + "</li>"
  break
  
  }
}
  console.log(pokemonLi)
  
    fs.writeFile('pokemon.html', '<html><head></head><body><ul>' + pokemonLi.toString() + '</ul></body></html>', function() {
      console.log('File created');
    });


