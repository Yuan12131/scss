const pokemon = require('pokemon');
const data = pokemon.all('ko')
let pokemonLi=[];

// 포켓몬스터 한글 배열을 HTML li 태그로 만들어주는 함수
function setMakeLiTagPokemonList(data) {
  if (Array.isArray(data) === true) {
    let arrayLiTagPokemonList = [];
    for (let i = 0; i < data.length; i++) {
      arrayLiTagPokemonList.push(`<li>${data[i]}</li>`);
    }
    return arrayLiTagPokemonList.join("");
  } else {
    return new Error("배열이 아닙니다.");
  }
}

module.exports = setMakeLiTagPokemonList;
// 모듈로 li 태그로 만드는 함수 내보내기


const HTMLTemplate = `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokemon List</title>
</head>
<body>
  <h1>Pokemon List</h1>
  <ul>
    ${setMakeLiTagPokemonList(data)}
  </ul>
</body>
</html>
`;

module.exports = HTMLTemplate;
// HTML 파일에 들어갈 data 모듈 내보내기

