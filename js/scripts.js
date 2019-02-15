function closeDiv() {
  $("#hello-world-guide").fadeOut();
}

$(document).ready(function() {
  for (var i = 0; i < 5; i++) {
    $("#activity").append('<div class="update"><div class="summary"><div class="profPic"></div><p><strong>USER</strong> created a repository <strong>CLONE</strong></p></div><div class="updateContent"><h2><strong>travisty12/git-clone</strong></h2><p>Updated Feb 15</p></div></div>');

  }
});
