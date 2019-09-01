const defaultOptions = {
  keyForAttribute: "camelCase",
  attributes: ["name"]
};

const createRelationshipOptions = attributes => ({
  ref: "id",
  attributes
});

module.exports = {
  defaultOptions,
  createRelationshipOptions
};
