TrelloClone.Collections.Cards = Backbone.Collection.extend({
  url: "/api/cards",
  
  model: TrelloClone.Models.Card,
  
  comparator: function(collection) {
    return collection.get("ord");
  }
});