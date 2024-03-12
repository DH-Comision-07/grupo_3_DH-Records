let nextProductId = 1;
const product ={

    products:[
        {
            id: nextProductId++,
            titulo: "Abbey Road",
            categoria: "Rock",
            descripcion: "Abbey Road es el undécimo álbum de estudio de la banda británica de rock The Beatles. Fue lanzado en 1969 y es uno de los álbumes más icónicos de la historia de la música.",
            autor: "The Beatles",
            discografica: "Apple Records",
            preciocosto: 15.99,
            preciomostrador: 29.99,
            stock: 50,
            imagen: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
        },
        {
            id: nextProductId++,
            titulo: "Thriller",
            categoria: "Pop",
            descripcion: "Thriller es el sexto álbum de estudio del cantante estadounidense Michael Jackson, lanzado en 1982. Es el álbum más vendido de todos los tiempos.",
            autor: "Michael Jackson",
            discografica: "Epic Records",
            preciocosto: 12.50,
            preciomostrador: 24.99,
            stock: 30,
            imagen: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png"
        },
        {
            id: nextProductId++,
            titulo: "The Dark Side of the Moon",
            categoria: "Rock Progresivo",
            descripcion: "The Dark Side of the Moon es el octavo álbum de estudio de la banda británica de rock Pink Floyd, lanzado en 1973. Es uno de los álbumes más influyentes en la historia del rock.",
            autor: "Pink Floyd",
            discografica: "Harvest Records",
            preciocosto: 18.75,
            preciomostrador: 34.99,
            stock: 20,
            imagen: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png"
        },
        {
            id: nextProductId++,
            titulo: "Hotel California",
            categoria: "Rock",
            descripcion: "Hotel California es el quinto álbum de estudio de la banda de rock Eagles, lanzado en 1976. Es uno de los álbumes más vendidos de todos los tiempos y contiene el icónico sencillo homónimo.",
            autor: "Eagles",
            discografica: "Asylum Records",
            preciocosto: 14.25,
            preciomostrador: 27.99,
            stock: 25,
            imagen: "https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg"
        },
        {
            id: nextProductId++,
            titulo: "Back in Black",
            categoria: "Hard Rock",
            descripcion: "Back in Black es el séptimo álbum de estudio de la banda de rock AC/DC, lanzado en 1980. Es uno de los álbumes más vendidos de la historia y es conocido por su energía y fuerza.",
            autor: "AC/DC",
            discografica: "Atlantic Records",
            preciocosto: 13.50,
            preciomostrador: 26.99,
            stock: 35,
            imagen: "https://upload.wikimedia.org/wikipedia/en/2/2b/ACDC_Back_in_Black.png"
        },
        {
            id: nextProductId++,
            titulo: "Nevermind",
            categoria: "Grunge",
            descripcion: "Nevermind es el segundo álbum de estudio de la banda estadounidense Nirvana, lanzado en 1991. Es considerado uno de los álbumes más influyentes de la década de 1990 y ayudó a popularizar el género grunge.",
            autor: "Nirvana",
            discografica: "DGC Records",
            preciocosto: 16.00,
            preciomostrador: 30.99,
            stock: 40,
            imagen: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg"
        },
        {
            id: nextProductId++,
            titulo: "Rumours",
            categoria: "Rock",
            descripcion: "Rumours es el undécimo álbum de estudio de la banda británico-estadounidense Fleetwood Mac, lanzado en 1977. Es uno de los álbumes más exitosos de la historia y contiene varios sencillos populares.",
            autor: "Fleetwood Mac",
            discografica: "Warner Bros. Records",
            preciocosto: 14.75,
            preciomostrador: 28.99,
            stock: 30,
            imagen: "https://upload.wikimedia.org/wikipedia/en/e/e9/FleetwoodMacRumours.PNG"
        },
        {
            id: nextProductId++,
            titulo: "Sgt. Pepper's Lonely Hearts Club Band",
            categoria: "Rock Psicodélico",
            descripcion: "Sgt. Pepper's Lonely Hearts Club Band es el octavo álbum de estudio de The Beatles, lanzado en 1967. Es considerado uno de los álbumes más influyentes de todos los tiempos y ayudó a definir el género del rock psicodélico.",
            autor: "The Beatles",
            discografica: "Parlophone",
            preciocosto: 16.50,
            preciomostrador: 31.99,
            stock: 25,
            imagen: "https://upload.wikimedia.org/wikipedia/en/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg"
        },
        {
            id: nextProductId++,
            titulo: "Led Zeppelin IV",
            categoria: "Hard Rock",
            descripcion: "Led Zeppelin IV es el cuarto álbum de estudio de la banda británica de rock Led Zeppelin, lanzado en 1971. Es uno de los álbumes más vendidos de la historia y contiene clásicos como Stairway to Heaven.",
            autor: "Led Zeppelin",
            discografica: "Atlantic Records",
            preciocosto: 17.25,
            preciomostrador: 32.99,
            stock: 20,
            imagen: "https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg"
        },
        {
            id: nextProductId++,
            titulo: "The Wall",
            categoria: "Rock Progresivo",
            descripcion: "The Wall es el undécimo álbum de estudio de la banda británica de rock Pink Floyd, lanzado en 1979. Es un álbum conceptual que trata sobre temas como el aislamiento y la alienación.",
            autor: "Pink Floyd",
            discografica: "Harvest Records",
            preciocosto: 19.00,
            preciomostrador: 35.99,
            stock: 15,
            imagen: "https://upload.wikimedia.org/wikipedia/en/1/1f/PinkFloydWallCoverOriginalNoText.jpg"
        }
    ],


    getAllProducts:function () {
    return this.products;
    },
    getProductById:function(productId){
    return this.products.find(product => product.id == productId);
    }
}

module.exports = products;