const { colors } = require("./utils.js");

const up = () => {
  let order = 1;

  const sections = [
    {
      order: order++,
      name: "rolls",
      menuName: "rolls",
      color: colors.black
    },
    {
      order: order++,
      name: "combos",
      menuName: "combos",
      color: colors.golden
    },
    {
      order: order++,
      name: "bowls",
      menuName: "bowls",
      color: colors.golden
    },
    {
      order: order++,
      name: "pokes",
      menuName: "pokes",
      color: colors.red
    },
    {
      order: order++,
      name: "menú infaltil : )",
      menuName: "niños",
      color: colors.green
    },
    {
      order: order++,
      name: "baos",
      menuName: "baos",
      color: colors.red
    },
    {
      order: order++,
      name: "spring rolls vegetarianos",
      menuName: "vegetarianos",
      color: colors.golden
    },
    {
      order: order++,
      name: "bebidas",
      menuName: "bebidas",
      color: colors.black
    }
  ];

  sections.map(section => {
    firestore
      .collection("sections")
      .doc(section.name)
      .set(section);
  });
};

up();
