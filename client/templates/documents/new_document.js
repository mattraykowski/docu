Template.newDocument.events({
  'submit form': function(e) {
    e.preventDefault();
    var documentTitle = $(e.target).find('[name=title]').val();
    $(e.target).find('[name=title]').val('');
    
    Documents.insert({title: documentTitle});
  }
});