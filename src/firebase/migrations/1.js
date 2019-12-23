const up = () => {
  let order = 1;
  const section = "combos";

  const products = [
    {
      order: order++,
      pieces: 100,
      name: "¡combo navideño!",
      price: 150000,
      img: "arbolito.jpg",
      description: 
        `10 piezas Barichara
        10 piezas Mompós
        10 piezas Villa de leyva
        10 piezas taganga
        10 piezas san andres
        10 piezas Múcura
        1p piezas Putumayo
        10 piezas Nuquí
        10 piezas Tumaco 
        10 piezas Barú`,
    },
    {
      order: order++,
      pieces: 40,
      name: "combo caribe grande",
      price: 57000,
      img: "caribe-grande.jpg",
      description: 
        `10 bocados de Taganga roll
        10 bocados de Barú roll
        10 Bocados de San Andrés roll
        10 Bocados de Múcura roll`,
    },
    {
      order: order++,
      pieces: 40,
      name: "combo andino grande",
      price: 56000,
      img: "andino-grande.jpg",
      description:
        `10 bocados de Barichara roll
        10 Bocados de Mompós roll 
        10 Bocados de Villa de Leyva roll
        10 Bocados de Chiquinquirá roll`,
    },
    {
      order: order++,
      pieces: 40,
      name: "combo pacífico grande",
      price: 58000,
      img: "pacifico-grande.jpg",
      description:
        `10 Bocados de Bahía solano roll
        10 Bocados de Tumaco roll
        10 bocados de Nuquí roll
        10 Bocados de Malpelo roll`,
    },
    {
      order: order++,
      pieces: 40,
      name: "combo orinoquía grande",
      price: 72000,
      img: "orinoquia-grande.jpg",
      description:
        `10 Bocados de Villavicencio roll
        10 bocados de Macarena roll
        10 Bocados de Acacías roll
        10 bocados de San Martín`,
    },
    {
      order: order++,
      pieces: 40,
      name: "combo amazonía grande",
      price: 54000,
      img: "amazonia-grande.jpg",
      description:
        `10 Bocados de Puerto Nariño roll
        10 Bocados de Florencia roll
        10 Bocados de Putumayo roll
        10 Bocados de Mitú roll`,
    },
    {
      order: order++,
      pieces: 25,
      name: "combo caribe mediano",
      price: 37500,
      img: "caribe-mediano.jpg",
      description:
        `10 Bocados de Barú roll
        10 Bocados de Múcura roll
        5 bocados de Taganga roll`,
    },
    {
      order: order++,
      pieces: 25,
      name: "combo andino mediano",
      price: 36500,
      img: "andino-mediano.jpg",
      description:
        `10 bocados de Barichara roll
        10 Bocados de Villa de Leyva roll
        5 Bocados de Mompós roll`,
    },
    {
      order: order++,
      pieces: 25,
      name: "combo pacífico mediano",
      price: 39900,
      img: "pacifico-mediano.jpg",
      description:
        `10 Bocados de nuquí roll
        10 bocados de Tumaco roll
        5 bocados de Bahía Solano roll`,
    },
    {
      order: order++,
      pieces: 25,
      name: "combo orinoquía mediano",
      price: 47000,
      img: "orinoquia-mediano.jpg",
      description:
        `10 bocados de Villavicencio roll
        10 bocados de San Martín roll
        5 Bocados de Macarena roll`,
    },
    {
      order: order++,
      pieces: 25,
      name: "combo amazonía mediano",
      price: 34000,
      img: "amazonia-mediano.jpg",
      description:
        `10 bocados de Florencia roll
        10 bocados de Putumayo roll
        5 bocados de Puerto Nariño roll`,
    },
    {
      order: order++,
      pieces: 15,
      name: "combo caribe pequeño",
      price: 24500,
      img: "caribe-pequeno.jpg",
      description:
        `5 Bocados de Barú roll
        5 Bocados de Múcura roll
        5 bocados de Taganga roll`,
    },
    {
      order: order++,
      pieces: 15,
      name: "combo andino pequeño",
      price: 24000,
      img: "andino-pequeno.jpg",
      description:
        `5 bocados de Barichara roll
        5 Bocados de villa de Leyva roll
        5 Bocados de mompós roll`,
    },
    {
      order: order++,
      pieces: 15,
      name: "combo pacífico pequeño",
      price: 26000,
      img: "pacifico-pequeno.jpg",
      description:
        `5 Bocados de Nuquí roll
        5 bocados de Tumaco roll
        5 bocados de Bahía Solano roll`,
    },
    {
      order: order++,
      pieces: 15,
      name: "combo orinoquía pequeño",
      price: 32000,
      img: "orinoquia-pequeno.jpg",
      description:
        `5 bocados de Villavicencio roll
        5 bocados de San Martín roll
        5 Bocados de Macarena roll`,
    },
    {
      order: order++,
      pieces: 15,
      name: "combo amazonía pequeño",
      price: 23000,
      img: "amazonia-pequeno.jpg",
      description:
        `5 bocados de Florencia roll
        5 bocados de Putumayo roll
        5 bocados de Puerto Nariño roll`,
    }
  ];

  products.map(product => {
    firestore
      .collection(`sections/${section}/products`)
      .doc()
      .set(product);
  });
};

up();
