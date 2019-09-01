const JSONAPISerializer = require("jsonapi-serializer").Serializer;
const { defaultOptions, createRelationshipOptions } = require("./utils");

const type = "section";

const attributes = ["name", "color", "products"];
const products = createRelationshipOptions(["name", "price"]);

const sectionSerializer = new JSONAPISerializer(type, {
  ...defaultOptions,
  attributes,
  products
});

module.exports = {
  sectionSerializer
};
