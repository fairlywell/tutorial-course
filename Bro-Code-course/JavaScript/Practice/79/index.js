// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then(response => {

//     if(!response.ok) {
//       throw new Error("Could not fetch resource");
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// fetchData();

async function fetchData() {

  try{

    // lay ten cua pokemon tu o nhap lieu, chuyen chu thuong
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    // fetch du lieu tu api bang cach ghep ten Pokemon vao ur;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    // kiem tra neu phan hoi ko thanh con
    if(!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json(); // chuyen doi phan hoi thanh du lieu JSON
    const pokemonSrite = data.sprites.front_default; // lay URL cua anh sprite cua pokemon tu du lieu
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSrite;
    imgElement.style.display = "block";

  }

  catch(error) {
    console.error(error);
  }

}