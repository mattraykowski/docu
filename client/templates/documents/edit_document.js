Template.editDocument.events({
  'keyup #documentEditor': function(e) {
    
    var content = $(e.target).val();
    var location = $(e.target).caret();
    
    Documents.update(this._id, {$set: {body: content}});
  }
});