const express = require("express");
const { respond } = require("../src/utils/responses");
const { sectionSerializer } = require("../src/serialize/section");
const router = express.Router();

let i = 0;

router.get("/sections", function(req, res, next) {
  respond(
    res,
    sectionSerializer.serialize([
      {
        name: "¡promociones!",
        color: "rgb(50,150,0)",
        products: [
          { id: i++, name: "one", price: i + 8 },
          { id: i++, name: "two", price: i + 14 },
          { id: i++, name: "one", price: i + 8 },
          { id: i++, name: "two", price: i + 14 },
          { id: i++, name: "one", price: i + 8 }
        ]
      },
      {
        name: "rolls",
        color: "rgb(50,50,0)",
        products: [
          { id: i++, name: "other", price: i + 8 },
          { id: i++, name: "peter", price: i + 14 },
          { id: i++, name: "other", price: i + 8 },
          { id: i++, name: "peter", price: i + 14 },
          { id: i++, name: "other", price: i + 8 },
          { id: i++, name: "peter", price: i + 14 },
          { id: i++, name: "other", price: i + 8 }
        ]
      },
      {
        name: "bowls",
        color: "rgb(150,50,0)",
        products: [
          { id: i++, name: "some", price: i + 8 },
          { id: i++, name: "anchor", price: i + 14 },
          { id: i++, name: "some", price: i + 8 },
          { id: i++, name: "anchor", price: i + 14 },
          { id: i++, name: "some", price: i + 8 },
          { id: i++, name: "anchor", price: i + 14 },
          { id: i++, name: "some", price: i + 8 },
          { id: i++, name: "anchor", price: i + 14 },
          { id: i++, name: "some", price: i + 8 },
          { id: i++, name: "anchor", price: i + 14 },
          { id: i++, name: "some", price: i + 8 },
          { id: i++, name: "anchor", price: i + 14 },
          { id: i++, name: "some", price: i + 8 },
          { id: i++, name: "anchor", price: i + 14 },
          { id: i++, name: "some", price: i + 8 },
          { id: i++, name: "anchor", price: i + 14 },
          { id: i++, name: "some", price: i + 8 },
          { id: i++, name: "anchor", price: i + 14 }
        ]
      },
      {
        name: "pokes",
        color: "rgb(50,150,50)",
        products: [
          { id: i++, name: "victoria", price: i - 8 },
          { id: i++, name: "guakamole", price: i - 14 },
          { id: i++, name: "victoria", price: i - 8 },
          { id: i++, name: "guakamole", price: i - 14 }
        ]
      },
      {
        name: "menú infantil : )",
        color: "rgb(150,50,50)",
        products: [
          { id: i++, name: "yellow", price: i - 8 },
          { id: i++, name: "minister", price: i - 14 },
          { id: i++, name: "yellow", price: i - 8 },
          { id: i++, name: "minister", price: i - 14 },
          { id: i++, name: "yellow", price: i - 8 }
        ]
      },
      {
        name: "spring rolls vegetarianos",
        color: "rgb(50,0,150)",
        products: [
          { id: i++, name: "marina", price: i - 8 },
          { id: i++, name: "motown", price: i - 14 },
          { id: i++, name: "marina", price: i - 8 }
        ]
      },
      {
        name: "bebidas",
        color: "rgb(150,150,50)",
        products: [
          { id: i++, name: "mesina", price: i - 8 },
          { id: i++, name: "roll", price: i - 14 },
          { id: i++, name: "mesina", price: i - 8 },
          { id: i++, name: "roll", price: i - 14 },
          { id: i++, name: "mesina", price: i - 8 }
        ]
      }
    ])
  );
});

module.exports = router;
