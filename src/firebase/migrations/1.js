const up = () => {
  let order = 1;
  const section = "combos";

  const products = [
    {
      order: order++,
      pieces: 40,
      name: "Combo Caribe grande",
      price: 71500,
      img: "combo-grande-40-piezas.jpg",
      description: 
        `10 bocados de Taganga roll
        10 bocados de Barú roll
        10 Bocados de San Andrés roll
        10 Bocados de Múcura roll`,
    },
    {
      order: order++,
      pieces: 40,
      name: "Combo Andino grande",
      price: 70000,
      img: "combo-grande-40-piezas.jpg",
      description:
        `10 bocados de Barichara roll
        10 Bocados de Mompós roll 
        10 Bocados de Villa de Leyva roll
        10 Bocados de Chiquinquirá roll`,
    },
    {
      order: order++,
      pieces: 40,
      name: "Combo Pacífico grande",
      price: 72500,
      img: "combo-grande-40-piezas.jpg",
      description:
        `10 Bocados de Bahía solano roll
        10 Bocados de Tumaco roll
        10 bocados de Nuquí roll
        10 Bocados de Malpelo roll`,
    },
    {
      order: order++,
      pieces: 40,
      name: "Combo Orinoquía grande",
      price: 90000,
      img: "combo-grande-40-piezas.jpg",
      description:
        `10 Bocados de Villavicencio roll
        10 bocados de Macarena roll
        10 Bocados de Acacías roll
        10 bocados de San Martín`,
    },
    {
      order: order++,
      pieces: 40,
      name: "Combo Amazonía Grande",
      price: 67500,
      img: "combo-grande-40-piezas.jpg",
      description:
        `10 Bocados de Puerto Nariño roll
        10 Bocados de Florencia roll
        10 Bocados de Putumayo roll
        10 Bocados de Mitú roll`,
    },
    {
      order: order++,
      pieces: 25,
      name: "Combo Caribe mediano",
      price: 46900,
      img: "combo-mediano-25-piezas.jpg",
      description:
        `10 Bocados de Barú roll
        10 Bocados de Múcura roll
        5 bocados de taganga roll`,
    },
    {
      order: order++,
      pieces: 25,
      name: "Combo Andino mediano",
      price: 50000,
      img: "combo-mediano-25-piezas.jpg",
      description:
        `10 bocados de Barichara roll
        10 Bocados de villa de Leyva roll
        5 Bocados de mompós roll`,
    },
    {
      order: order++,
      pieces: 25,
      name: "Combo Pacífico mediano",
      price: 72500,
      img: "combo-mediano-25-piezas.jpg",
      description:
        `10 Bocados de nuquí roll
        10 bocados de Tumaco roll
        5 bocados de bahía solano roll`,
    },
    {
      order: order++,
      pieces: 25,
      name: "Combo Orinoquía mediano",
      price: 58900,
      img: "combo-mediano-25-piezas.jpg",
      description:
        `10 bocados de Villavicencio roll
        10 bocados de San Martín roll
        5 Bocados de Macarena roll`,
    },
    {
      order: order++,
      pieces: 25,
      name: "Combo Amazonía mediano",
      price: 42500,
      img: "combo-mediano-25-piezas.jpg",
      description:
        `10 bocados de Florencia roll
        10 bocados de putumayo roll
        5 bocados de puerto nariño roll`,
    },
    {
      order: order++,
      pieces: 15,
      name: "Combo Caribe pequeño",
      price: 31000,
      img: "combo-pequeno-15-piezas.jpg",
      description:
        `5 Bocados de Barú roll
        5 Bocados de Múcura roll
        5 bocados de taganga roll`,
    },
    {
      order: order++,
      pieces: 15,
      name: "Combo Andino pequeño",
      price: 30000,
      img: "combo-pequeno-15-piezas.jpg",
      description:
        `5 bocados de Barichara roll
        5 Bocados de villa de Leyva roll
        5 Bocados de mompós roll`,
    },
    {
      order: order++,
      pieces: 15,
      name: "Combo Pacífico pequeño",
      price: 32500,
      img: "combo-pequeno-15-piezas.jpg",
      description:
        `5 Bocados de nuquí roll
        5 bocados de Tumaco roll
        5 bocados de bahía solano roll`,
    },
    {
      order: order++,
      pieces: 15,
      name: "Combo Orinoquía pequeño",
      price: 40000,
      img: "combo-pequeno-15-piezas.jpg",
      description:
        `5 bocados de Villavicencio roll
        5 bocados de San Martín roll
        5 Bocados de Macarena roll`,
    },
    {
      order: order++,
      pieces: 15,
      name: "Combo amazonía pequeño",
      price: 28900,
      img: "combo-pequeno-15-piezas.jpg",
      description:
        `5 bocados de Florencia roll
        5 bocados de putumayo roll
        5 bocados de puerto nariño roll`,
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
