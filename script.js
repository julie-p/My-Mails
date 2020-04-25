var messagesCount = $('p').length; //Récupère le nb de p
$('#count').text(messagesCount); //Màj du compteur

$('.trash').click( function() { //Capte le click sur le bouton trash
    this.parentNode.remove(); //Efface le parent
    var messagesCount = $('p').length; //Récupère à nouveau le nb de p
    $('#count').text(messagesCount); //Màj du compteur
});

$('#btn-add').click(function() { //Capte le click sur le bouton add
    var message = $('#input').val(); //Récupère le txt tapé dans la barre d'ajout
    
    //Créé div+img+div+h6+p+img et append au body
    $('body').append(`
    
        <div class="row"> 
            <img class="avatar" src="avatar-4.jpg"> 
            <div> 
                <h6>Julie Paupert</h6> 
                <p>` + message + `</p> 
            </div> 
            <img class="trash" src="trash.png"> 
            </div>`);

    $('#input').val(''); //Réinitialise l'input une fois le msg envoyé

    $('#count').text($('p').length); //Màj du compteur

    $('.trash').click( function() { //Capte le click sur le bouton trash et efface le parent (& le nouveau msg créé)
        this.parentNode.remove();
        $('#count').text($('p').length); //Màj du compteur
    });
})

$('#btn-search').click(function() { //Capte le click sur bouton search
    $('h6').each(function() { //fonction pour parcourir l'ensemble des h6
        if ( $('#search-msg').val().trim().toLowerCase() !== $(this).text().trim().toLowerCase() ) { //Si la value de search-msg est différente de h6
            $(this).parent().parent().fadeOut(); //Efface les msgs non-correspondants de la page
        } else {
            $(this).parent().parent().fadeIn();
        }
    }) 
})

/*var messagesCount = document.getElementsByTagName('p').length;
document.getElementById('count').textContent = messagesCount;

for(var i=0; i<document.getElementsByClassName('trash').length; i++){
    document.getElementsByClassName('trash')[i].addEventListener("click",
    function(){
        this.parentNode.remove();
        var messagesCount = document.getElementsByTagName('p').length;
        document.getElementById('count').textContent = messagesCount;
    }
    )
}

var add = document.getElementById('btn-add').addEventListener('click', function() { //Capte le clic s/ bouton en ajoutant un event

    //console.log(document.getElementById('input').value);

    var newRow = document.createElement('div'); //Création nouvelle div, class row
        newRow.className = "row"; //Ajout de la nouvelle div à la class row ds index.html
        document.body.appendChild(newRow); //Ajout de la new row au body
    
    var img = document.createElement('img'); //Création de la nouvelle img de profil
        img.src = "avatar-4.jpg"; 
        img.className = "avatar";  //Ajout de la nouvelle img à la class avatar ds index.html
        newRow.appendChild(img); //Ajout de l'img à son parent newRow
    
    var newDiv = document.createElement('div'); //Création nouvelle div qui contient h6 & p
        newRow.appendChild(newDiv); //Ajout de la div à son parent div class row
    
    var h6 = document.createElement('h6'); //Création d'un nouvel headline pour le prénom/nom
        h6.textContent = "Julie Paupert"; //Ajout du texte
        newDiv.appendChild(h6); //Ajout de h6 à son parent
    
    var input = document.createElement('p'); //Création d'un nouveau p dans index.html
        input.textContent = document.getElementById('input').value; // Récupération de la valeur input - qui va permettre d'intégrer le txt de l'user au programme
        newDiv.appendChild(input); //Ajout du nouveau p dans son parent
    
    var trash = document.createElement('img'); //Création d'une nvlle img pour le picto
        trash.src = "trash.png"; 
        trash.className = "trash"; //Ajout du picto à la class trash ds index.html
        newRow.appendChild(trash); //Ajout de picto à son parent

    document.getElementById('input').value = ""; //Cible l'input et réinitialise sa valeur une fois le msg publié
    
    document.getElementById('count').textContent = messagesCount += 1; //Mise à jour du compteur une fois le msg publié

    //Permet de capter le click sur le picto, de supprimer les msgs et mettre à jour le compteur
    trash.addEventListener("click",
        function(){
            this.parentNode.remove();
            var messagesCount = document.getElementsByTagName('p').length;
            document.getElementById('count').textContent = messagesCount;
        }
        )
    }
)*/

