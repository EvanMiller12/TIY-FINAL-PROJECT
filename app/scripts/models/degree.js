var $ = require('jquery');
var Backbone = require('backbone');

var Degree = Backbone.Model.extend({
  idAttribute: 'objectId',

});

var DegreeCollection = Backbone.Collection.extend({
  model: Degree,
  url: function(){
    return 'https://final-proxy-server.herokuapp.com/v1/schools/';
    // return 'https://localhost:3000/v1/schools/'
  },

  parse: function(data){
    return data.results;
  },

  urlSetter: function(degree, major) {
    this.url = 'https://final-proxy-server.herokuapp.com/v1/schools/' + degree + '/' + major ;
      // return 'https://localhost:3000/v1/schools/'
    return this;
  },
  average: function() {
    var earnings = this.map(function(degree){
      return degree.get('2012.earnings.10_yrs_after_entry.median');
    });

    var average = earnings.reduce(function(a, b){
      return a + b;

    }, 0) / earnings.length;

    return average;
  },
});


module.exports = {
  Degree,
  DegreeCollection
};
