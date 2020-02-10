
var dateComplete = new Date();
var jour = dateComplete.getDate();
jour = parseInt(jour);
// creation case calendrier
for(let i = 1; i <= 29; i++) 
{	
	if (jour > i ){
		$('#calendar').append("<div class='case hier'>" + i + "</div>"); 
	}
	else if (jour < i) {
		$('#calendar').append("<div class='case demain'>" + i + "</div>"); 
	}
	else{
		$('#calendar').append("<div class='case aujourdhui'>" + i + "</div>"); 
	}

}

// date 
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
$(".date").html(new Date().toLocaleDateString('fr-FR',options));


// tableau json
var infos = [
{"titre":"Peter Bankov", "contenu":"Poster, artiste et graphiste, il revient sur le code mis en place par les avant-gardes russe, et nous fait redécouvrir le collage et la typographie ","img":"src/image/calendrier/download1.jpg"},
{"titre":"Murakami", "contenu":"Célèbre artiste japonnais, qui mêle manga, art ancestral et peinture","img":"src/image/calendrier/download2.jpg"},
{"titre":"Tomas Saracano", "contenu":"Artiste Contemporain, spécialisé dans la mise réseau via le mouvement naturel","img":"src/image/calendrier/download3.jpg"},
{"titre":"Stefan Sagmeister", "contenu":"Graphiste, connu pour ses happenings et ses expositions, il réinvente la communication en communication participative","img":"src/image/calendrier/download4.jpg"},
{"titre":"Picasso", "contenu":"Artiste majeur français, chef de fil, peintre, écrivain etc.","img":"src/image/calendrier/download5.jpg"},
{"titre":"Magritte", "contenu":"Surréaliste, imaginaire et belge","img":"src/image/calendrier/download6.jpg"},
{"titre":"Van Gogh", "contenu":"Expressionisme, impressionisme, Arlegois", "img":"src/image/calendrier/download7.jpg"},
{"titre":"Pierre Soulages", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download8.jpg"},
{"titre":"Malevitch", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download9.jpg"},
{"titre":"Modigliani", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.","img":"src/image/calendrier/download10.jpg"},
{"titre":"David Lachappelle", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download11.jpg"},
{"titre":"Riad Satouf", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download12.jpg"},
{"titre":"Vasarely", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download13.jpg"},
{"titre":"Frida Khalo", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download14.jpg"},
{"titre":"Anish Kapoor", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download15.jpg"},
{"titre":"Joseph Beuys", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download16.jpg"},
{"titre":"Shigeru Ban", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download17.jpg"},
{"titre":"Douanier Rousseau", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download18.jpg"},
{"titre":"Paul Rand", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download19.jpg"},
{"titre":"Guggenheim", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download20.jpg"},
{"titre":"Frank Llord wright", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download21.jpg"},
{"titre":"Rodin", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download22.jpg"},
{"titre":"Camille Claudel", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download23.jpg"},
{"titre":"Niki de Saint Phalle", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download24.jpg"},
{"titre":"Cindy Sherman", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download25.jpg"},
{"titre":"Orlan", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download26.jpg"},
{"titre":"Barbara Kruger", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download27.jpg"},
{"titre":"Sonia Delauney", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download28.jpg"},
{"titre":"Jean Dubuffet", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download29.jpg"},
{"titre":"Fanette Mellier", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download30.jpg"},
{"titre":"Savignac", "contenu":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img":"src/image/calendrier/download31.jpg"},
]


//utilisation 
$('.case').click(function(){
	var nbCase = $(this).text();
	// cela permet de retourner les cases deux fois 
	$('.case').removeClass('return');
	// appeler mon tableau json
	$('.title').text(infos[nbCase-1]["titre"]);
	$('.contenu').text(infos[nbCase-1]["contenu"]);
	$('.info-img').attr("src",(infos[nbCase-1]["img"]));
	// ceci est mon animation
	if($('.case').hasClass('show')){
		$('.show').addClass('return');
		$('.case').removeClass('show');
	}
	else{	
		$(this).addClass('show');
		setTimeout(1500);
	}

	
});










