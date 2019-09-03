const migration = () => {
  const products = [
    { name: "acacias", price: 8000, img: "O2yNzXdqOu0" },
    { name: "san martín", price: 14000, img: "9r5kHbw51fk" },
    { name: "macarena", price: 8000, img: "dH9zt0QuQL0" },
    { name: "villavicencio", price: 14000, img: "fLXFN-x8FIw" },
    { name: "puerto nariño", price: 8000, img: "MQuMgA2tqsU" },
    { name: "florencia", price: 14000, img: "NkgQSDqQA3Y" },
    { name: "putumayo", price: 8000, img: "wXkGvQJWI-Y" },
    { name: "mitú", price: 14000, img: "BIhxjllZbLI" },
    { name: "malpelo", price: 8000, img: "xXOcdw54sks" },
    { name: "nuquí", price: 14000, img: "T_JP9lJBPaU" },
    { name: "rosario", price: 8000, img: "8FWQQXMspEM" },
    { name: "tayrona", price: 14000, img: "rwLTQ7eyBx0" },
    { name: "camarones", price: 8000, img: "XcLSYPRif3k" },
    { name: "pollo crispy", price: 14000, img: "WNSSI5wz06E" },
    { name: "salmón", price: 8000, img: "ZygmvOHnYLU" },
    { name: "otro", price: 14000, img: "E3FIsRAmTA0" },
    { name: "nombre", price: 8000, img: "4ZDNhvskCsc" },
    { name: "ciudad", price: 14000, img: "WbaCCyf67E8" }
  ];

  products.map(product => {
    firestore
      .collection("sections/Uu5L6BFqpDHO1lr9qIuf/products")
      .doc()
      .set(product);
  });
};
