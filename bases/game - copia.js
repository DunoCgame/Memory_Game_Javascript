let Fichas = document.getElementsByClassName("ficha");
let label = document.getElementsByTagName("label");
let Score = document.getElementById("Score");
let Intentos = document.getElementById("Intentos");



let label_1 = document.getElementsByTagName("label")[0];
let label_2 = document.getElementsByTagName("label")[1];

console.log(label_1.className);

if(label_1.className==label_2.className){
	
	alert("igual");
}





let Aciertos=0;

let data_Score=0;
Score.innerHTML=data_Score;


let Intentos_data=10;
Intentos.innerHTML=Intentos_data;



/********Nodal***********/

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var Close = document.getElementsByClassName("close")[0];

/***Ranking*****/
var oro = document.getElementById("oro");
var plata = document.getElementById("plata");
var bronce = document.getElementById("bronce");
/***Ranking*****/

let Ranking =[];
		Ranking[0]=1;//oro
		Ranking[1]=2;//plata
		Ranking[2]=3;//bronce

var OrdenarRanking;

var Felisitaciones_Estado=false;
var Perdiste_Estado=false;
var Ranking_Estado=false;

var Letras = [];
	Letras[0]="a";
	Letras[1]="b";
	Letras[2]="c";
	Letras[3]="d";
	Letras[4]="e";
	Letras[5]="f";
	Letras[6]="g";
	Letras[7]="h";		
	
	Letras[8]="a";
	Letras[9]="b";
	Letras[10]="c";
	Letras[11]="d";
	Letras[12]="e";
	Letras[13]="f";
	Letras[14]="g";
	Letras[15]="h";

	
var MezclarLetras = Letras.sort(function(){  return Math.random()-0.5 })
	
for(let i=0; i<Fichas.length; i++){
		
		label[i].innerHTML = MezclarLetras[i];
		
		Fichas[i].style.background="rgb(102, 102, 255)";

	}

let Ficha1="";
let Ficha2="";
let pos1;
let pos2;

document.querySelectorAll(".ficha").forEach((element, index) => {
	element.onclick = function(){
		
						SelectFicha(index,label[index].innerText);			
						
						}	
});


function SelectFicha(a,text){

	if(Ficha1=="" ){
		Ficha1=text;
		pos1=a;
		Fichas[a].style.background="rgb(102, 102, 255)";
		label[a].style.display="block";
			
	}
	else
		if(Ficha1!="" && Ficha2==""){
			Ficha2=text;
			pos2=a;
			Fichas[a].style.background="rgb(102, 102, 255)";
			label[a].style.display="block";
				
		}
	

	Verificar();
	}
	
	
function Verificar(){

	setTimeout(	
		function(){
			
				if(Ficha1!="" && Ficha2!=""){
					if(Ficha1==Ficha2){
						
						
						Score.innerHTML=data_Score+=1;
											
						
						Aciertos+=1;
						
						console.log(data_Score);
					
						Ficha1="";
						Ficha2="";
						
						Estado_fichas();
						
					}
					
					if(Ficha1!=Ficha2){
					
						
						Intentos.innerHTML=Intentos_data-=1;
									
						Ficha1="";
						Ficha2="";
						
						Fichas[pos1].style.background="rgb(41, 82, 163)";
						Fichas[pos2].style.background="rgb(41, 82, 163)";
						
						label[pos1].style.display="none";
						label[pos2].style.display="none";
						
						Estado_fichas();
					}
				}


			},1000);
}

function Estado_fichas(){
	
	
	if(Aciertos==8){
		 Felisitaciones_Estado=true;
		 LLamada_Ventana_Nodal();
		
	}
	
	if(Intentos_data==0){		
		Perdiste_Estado=true;
		 LLamada_Ventana_Nodal();
		
	}
}



(function animacion(){
	
	
	setTimeout(function(){             
	
		for(let o=0; o<Fichas.length; o++ ){
			
			label[o].style.display="none";
			Fichas[o].style.background="rgb(41, 82, 163)";
			
			
		}
	
	
	
	},4000);
	
	
})();


var Felisitaciones_Estado=false;
var Perdiste_Estado=false;
var Ranking_Estado=false;

let felizidades_Ventana = document.getElementById("felizidades");
let ranking_Ventana = document.getElementById("ranking");
let Perdiste_Ventana = document.getElementById("Perdiste");

felizidades_Ventana.style.display = "none";
ranking_Ventana.style.display = "none";
Perdiste_Ventana.style.display = "none";

let SectionIntro = document.getElementById("intro");
let SectionGame = document.getElementById("game");

function jugar(){

	SectionIntro.style.display="none";
	SectionGame.style.display="block";
	
}



function LLamada_Ventana_Nodal(){
		
	
	
	OrdenarRanking = Ranking.sort((a,b)=>b-a);
	
	oro.innerText = Ranking[0];
	plata.innerText = Ranking[1];
	bronce.innerText = Ranking[2];
	

	 if(Felisitaciones_Estado==true){
		 modal.style.display = "block";
		felizidades_Ventana.style.display = "block";
		
		setTimeout(function(){             
			Felisitaciones_Estado=false;
			
			Ranking_Estado=true;
			felizidades_Ventana.style.display = "none";
			ranking_Ventana.style.display = "block";
						},2000);
	}	

	if(Perdiste_Estado==true){
		 modal.style.display = "block";
		Perdiste_Ventana.style.display = "block";
		
		setTimeout(function(){             
			Perdiste_Estado=false;
			
			Ranking_Estado=true;
			Perdiste_Ventana.style.display = "none";
			ranking_Ventana.style.display = "block";
						},2000);
	}
	
	
}



Close.onclick = function() {
	  modal.style.display = "none";
	  window.location.reload(); 
	/*o este*/
	// document.location.reload();

}



