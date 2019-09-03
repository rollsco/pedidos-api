const express = require("express");
const router = express.Router();
const { respond } = require("../src/utils/responses");
const { sectionSerializer } = require("../src/serialize/section");
const { firestoreService } = require("../src/firebase/service");

router.get("/sections", async (req, res, next) => {
  
  // TODO define how query goes down into relationships
  const sections = await firestoreService.get("sections");

  let i = 1;
  // TODO use THE SAME system used in the query to indicate the serializer 
  // what relationships to include
  respond(res, sectionSerializer.serialize(sections, ["products"]));
  return;
  respond(
    res,
    sectionSerializer.serialize([
      {
        name: "¡promociones!",
        color: "rgb(245,179,66)",
        products: [
          { id: i++, name: "one", price: i + 8, img: "VIv0srmK78g" },
          { id: i++, name: "two", price: i + 14 , img: "JorKKx5rvA0" },
          { id: i++, name: "one", price: i + 8 , img: "12IsagncQ7o" },
          { id: i++, name: "two", price: i + 14 , img: "wMd1q99pXWQ" },
          { id: i++, name: "one", price: i + 8, img: "O2yNzXdqOu0" },
        ]
      },
      {
        name: "rolls",
        color: "rgb(0,70,10)",
        products: [
          { id: i++, name: "other", price: i + 8 , img: "5Gte2_TlS_A" },
          { id: i++, name: "peter", price: i + 14 , img: "-sDWTQfqgFA" },
          { id: i++, name: "other", price: i + 8 , img: "M1M9PVArnlE" },
          { id: i++, name: "peter", price: i + 14 , img: "QGQQHTOjHlI" },
          { id: i++, name: "other", price: i + 8 , img: "CA2NgpLIqa0" },
          { id: i++, name: "peter", price: i + 14 , img: "sl5exRJYXuI" },
          { id: i++, name: "other", price: i + 8, img: "wmPDe9OnXT4"  }
        ]
      },
      {
        name: "bowls",
        color: "rgb(245,179,66)",
        products: [
          { id: i++, name: "some", price: i + 8 , img: "O2yNzXdqOu0" },
          { id: i++, name: "anchor", price: i + 14 , img: "9r5kHbw51fk" },
          { id: i++, name: "some", price: i + 8 , img: "dH9zt0QuQL0" },
          { id: i++, name: "anchor", price: i + 14 , img: "fLXFN-x8FIw" },
          { id: i++, name: "some", price: i + 8 , img: "MQuMgA2tqsU" },
          { id: i++, name: "anchor", price: i + 14 , img: "NkgQSDqQA3Y" },
          { id: i++, name: "some", price: i + 8 , img: "wXkGvQJWI-Y" },
          { id: i++, name: "anchor", price: i + 14 , img: "BIhxjllZbLI" },
          { id: i++, name: "some", price: i + 8 , img: "xXOcdw54sks" },
          { id: i++, name: "anchor", price: i + 14 , img: "T_JP9lJBPaU" },
          { id: i++, name: "some", price: i + 8 , img: "8FWQQXMspEM" },
          { id: i++, name: "anchor", price: i + 14 , img: "rwLTQ7eyBx0" },
          { id: i++, name: "some", price: i + 8 , img: "XcLSYPRif3k" },
          { id: i++, name: "anchor", price: i + 14 , img: "WNSSI5wz06E" },
          { id: i++, name: "some", price: i + 8 , img: "ZygmvOHnYLU" },
          { id: i++, name: "anchor", price: i + 14 , img: "E3FIsRAmTA0" },
          { id: i++, name: "some", price: i + 8 , img: "4ZDNhvskCsc" },
          { id: i++, name: "anchor", price: i + 14, img: "WbaCCyf67E8"  }
        ]
      },
      {
        name: "pokes",
        color: "rgb(140,26,0)",
        products: [
          { id: i++, name: "victoria", price: i - 8, img: "Vn66d55r3EM"  },
          { id: i++, name: "guakamole", price: i - 14, img: "6UxD0NzDywI"  },
          { id: i++, name: "victoria", price: i - 8, img: "JnFGgVaFpmE"  },
          { id: i++, name: "guakamole", price: i - 14, img: "CQQS9qJkCv4" }
        ]
      },
      {
        name: "menú infantil : )",
        color: "rgb(0,70,10)",
        products: [
          { id: i++, name: "yellow", price: i - 8 , img: "Y9pFfA4Z3g0"},
          { id: i++, name: "minister", price: i - 14 , img: "oJHWDw4mfno"},
          { id: i++, name: "yellow", price: i - 8 , img: "KjqmPzk8iqw"},
          { id: i++, name: "minister", price: i - 14 , img: "JnFGgVaFpmE"},
          { id: i++, name: "yellow", price: i - 8, img: "CQQS9qJkCv4" }
        ]
      },
      {
        name: "spring rolls vegetarianos",
        color: "rgb(245,179,66)",
        products: [
          { id: i++, name: "marina", price: i - 8 , img: "CyCMOcYKlu8"},
          { id: i++, name: "motown", price: i - 14 , img: "on2t2s6qkj4"},
          { id: i++, name: "marina", price: i - 8, img: "s7FuT9HYoxM" }
        ]
      },
      {
        name: "bebidas",
        color: "rgb(0,0,0)",
        products: [
          { id: i++, name: "mesina", price: i - 8 , img: ""},
          { id: i++, name: "roll", price: i - 14 , img: ""},
          { id: i++, name: "mesina", price: i - 8 , img: ""},
          { id: i++, name: "roll", price: i - 14 , img: ""},
        ]
      }
    ])
  );
});

module.exports = router;
