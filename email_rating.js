$(function() {   // when document is ready
	$("#f1").submit(getEmailRating);
	} );

function getEmailRating(){
	var rating = $('#cmu-rating').attr('value');
	window.open('mailto:mbautist@andrew.cmu.edu?subject=Rating of CMU&body='+rating);
}