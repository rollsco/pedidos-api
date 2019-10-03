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
});

module.exports = router;
