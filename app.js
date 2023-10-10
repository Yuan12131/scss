const http = require('http');
const fs = require('fs');

const pokemon = require('pokemon');
const data = pokemon.all('ko')
let htmlli = `<li>${data[0]}</li>`
let pokemonLi=[];

for (i = 0; i < data.length; i++){
  for (j = pokemonLi.length; j <= pokemonLi.length; j++){
  pokemonLi[j] = "<li>" + data[i] + "</li>"
  break
  }
}
  console.log(`${pokemonLi}`)
  console.log(pokemonLi.join([]))
  
    fs.writeFile('pokemon.html', '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><ul>' + pokemonLi.join([]) + '</ul></body></html>', function() {
      console.log('File created');
    });

    http.createServer(function(request, response){
      console.log(request.method)
      console.log(request.url)
    
      let writeHeadObject = {
        'Content-Type' : 'text-html'
      }
    
      response.writeHead(200, writeHeadObject)
    
      fs.readFile("./pokemon.html", function(err, data){
        if(err){
          console.error("파일을 읽지 못했습니다.")
        } else {
          response.end(data)
        }
      })
    
    }).listen(8080);