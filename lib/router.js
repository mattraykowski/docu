Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});

Router.route('/new', {name: 'newDocument'});

Router.route('/view/:_id', {
  name: 'viewDocument',
  data: function() {
    return Documents.findOne(this.params._id);
  }
});

Router.route('/edit/:_id', {
  name: 'editDocument',
  data: function() {
    return Documents.findOne(this.params._id);
  }
});