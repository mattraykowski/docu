Template.editDocument.events({
  'keypress #documentEditor': function(e) {
    var content = $(e.target).val();
    var location = $(e.target).caret();
    
    Documents.update(this._id, {$set: {body: content}});
  }
});