//CREATE COLLECTION.
people = new Mongo.Collection('people');

my_object = {
    name : 'my_name',
    prop : 'my_prop'
}

//CLIENT.
if (Meteor.isClient) {




  Template.profile.helpers({
    info: {
      Name: 'Bob Dinkleberg',
      Age: 45,
      Location: 'Earth, Milky Way'
    }
  });

// http://stackoverflow.com/questions/31220610/access-an-objects-property-names-in-a-blaze-template
// https://www.discovermeteor.com/blog/a-guide-to-meteor-templates-data-contexts/

 people.insert({ name : "John", age : 20 });
 people.insert({ name : "Bill", age : 30 });
 people.insert({ name : "Lucy", age : 40 });


 //HELPERS.
 Template.body.helpers({
 people: function() {
 return people.find();
 }

 });




}
