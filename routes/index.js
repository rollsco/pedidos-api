const express = require("express");
const router = express.Router();
const { respond } = require("../src/utils/responses");
const { sectionSerializer } = require("../src/serialize/section");
const { firestoreService } = require("../src/firebase/service");

router.get("/sections", async (req, res, next) => {
  const params = req.query;
  const sections = await firestoreService.get("sections", params.include);
  // firestoreService.temp();
  // TODO use THE SAME system used in the query to indicate the serializer
  // what relationships to include
  respond(res, sectionSerializer.serialize(sections, ["products"]));

  return;

  respond(
    res,
    sectionSerializer.serialize([
      {
        name: "pokes",
        color: "rgb(140,26,0)",
        products: [
          { name: "victoria", price: i - 8, img: "Vn66d55r3EM" },
          { name: "guakamole", price: i - 14, img: "6UxD0NzDywI" },
          { name: "victoria", price: i - 8, img: "JnFGgVaFpmE" },
          { name: "guakamole", price: i - 14, img: "CQQS9qJkCv4" }
        ]
      },
      {
        name: "menú infantil : )",
        color: "rgb(0,70,10)",
        products: [
          { name: "yellow", price: i - 8, img: "Y9pFfA4Z3g0" },
          { name: "minister", price: i - 14, img: "oJHWDw4mfno" },
          { name: "yellow", price: i - 8, img: "KjqmPzk8iqw" },
          { name: "minister", price: i - 14, img: "JnFGgVaFpmE" },
          { name: "yellow", price: i - 8, img: "CQQS9qJkCv4" }
        ]
      },
      {
        name: "spring rolls vegetarianos",
        color: "rgb(245,179,66)",
        products: [
          { name: "marina", price: i - 8, img: "CyCMOcYKlu8" },
          { name: "motown", price: i - 14, img: "on2t2s6qkj4" },
          { name: "marina", price: i - 8, img: "s7FuT9HYoxM" }
        ]
      },
      {
        name: "bebidas",
        color: "rgb(0,0,0)",
        products: [
          { name: "mesina", price: i - 8, img: "" },
          { name: "roll", price: i - 14, img: "" },
          { name: "mesina", price: i - 8, img: "" },
          { name: "roll", price: i - 14, img: "" }
        ]
      }
    ])
  );
});

module.exports = router;
