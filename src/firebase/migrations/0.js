const { colors } = require("./utils.js");

const up = () => {
  let order = 1;

  const sections = [
    { order: order++, name: "rolls", color: colors.black },
    { order: order++, name: "bowls", color: colors.golden },
    { order: order++, name: "pokes", color: colors.red },
    { order: order++, name: "combos", color: colors.golden },
    { order: order++, name: "menú infaltil : )", color: colors.green },
    { order: order++, name: "baos", color: colors.red },
    { order: order++, name: "spring rolls vegetarianos", color: colors.golden },
    { order: order++, name: "bebidas", color: colors.black }
  ];

  sections.map(section => {
    firestore
      .collection("sections")
      .doc(section.name)
      .set(section);
  });
};

up();
