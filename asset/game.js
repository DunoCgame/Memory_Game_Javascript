let Fichas = document.getElementsByClassName("ficha");
let Fronts = document.getElementsByClassName("Front");
let Backs = document.getElementsByClassName("Back");

let Score = document.getElementById("Score");
let Intentos = document.getElementById("Intentos");

var Felisitaciones_Estado=false;
var Perdiste_Estado=false;
var Ranking_Estado=false;

let felizidades_Ventana = document.getElementById("felizidades");
let ranking_Ventana = document.getElementById("ranking");
let Perdiste_Ventana = document.getElementById("Perdiste");

let SectionIntro = document.getElementById("intro");
let SectionGame = document.getElementById("game");

let Aciertos=0;

let data_Score=0;
let Intentos_data=10;

Score.innerHTML=data_Score;
Intentos.innerHTML=Intentos_data;

/********Nodal***********/
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var Close = document.getElementsByClassName("close")[0];

felizidades_Ventana.style.display = "none";
ranking_Ventana.style.display = "none";
Perdiste_Ventana.style.display = "none";

/***Ranking*****/
var oro = document.getElementById("oro");
var plata = document.getElementById("plata");
var bronce = document.getElementById("bronce");
/***Ranking*****/

let Ranking =[];
		Ranking[0]=0;//oro
		Ranking[1]=0;//plata
		Ranking[2]=0;//bronce

var OrdenarRanking;

var Felisitaciones_Estado=false;
var Perdiste_Estado=false;
var Ranking_Estado=false;

let Ficha1="";
let Ficha2="";
let pos1;
let pos2;


var MezclarLetras;
	

var Letras = [];
		Letras[0]="icon-unrealengine";
		Letras[1]="icon-unity";
		Letras[2]="icon-playstation";
		Letras[3]="icon-xbox";
		Letras[4]="icon-blender";
		Letras[5]="icon-cplusplus";
		Letras[6]="icon-python";
		Letras[7]="icon-javascript";		
		Letras[8]="icon-unrealengine";
		Letras[9]="icon-unity";
		Letras[10]="icon-playstation";
		Letras[11]="icon-xbox";
		Letras[12]="icon-blender";
		Letras[13]="icon-cplusplus";
		Letras[14]="icon-python";
		Letras[15]="icon-javascript";


Close.onclick = function() {
	  modal.style.display = "none";
Reinicio();
}


document.querySelectorAll(".ficha").forEach((element, index) => {
	element.onclick = function(){
		
						SelectFicha(index,Backs[index].className);			
						
						}	
});	
	

document.querySelectorAll(".Front").forEach((element, index) => {
	 element.onclick = function(){					
				Fichas[index].style.transform="rotateY(180deg)";
				}	

			});	


document.querySelectorAll(".Back").forEach((element, index) => {
	element.onclick = function(){						
				Fichas[index].style.transform="rotateY(0deg)";					
				}	
			});	



function jugar(){

	SectionIntro.style.display="none";
	SectionGame.style.display="block";
	MezclarPosLetras();
	OcultarFichas();
	
}


function Reinicio(){
	
	SectionIntro.style.display="block";
	SectionGame.style.display="none";
	MezclarPosLetras();
	//OcultarFichas();
	
	Aciertos=0;
	data_Score=0;
	Intentos_data=10;

	OrdenarRanking;

	Felisitaciones_Estado=false;
	Perdiste_Estado=false;
	Ranking_Estado=false;

	Ficha1="";
	Ficha2="";
	pos1;
	pos2;	
	
	felizidades_Ventana.style.display = "none";
	ranking_Ventana.style.display = "none";
	Perdiste_Ventana.style.display = "none";

}


function MezclarPosLetras(){
		MezclarLetras = Letras.sort(function(){  return Math.random()-0.5 });

			for(let i=0; i<Fichas.length; i++){
			
				Backs[i].className += " "+MezclarLetras[i];			
				

			}
		
	}
	
function OcultarFichas(){
	
		for(let o=0; o<Fichas.length; o++ ){
			
			Fichas[o].style.transform="rotateY(180deg)";				
		}
		
	let time;	
	
	
	time = setTimeout(function(){  
	
		for(let o=0; o<Fichas.length; o++ ){
			
		Fichas[o].style.transform="rotateY(0deg)";
							
		}

	},5000);
	

}


function SelectFicha(a,text){
	if(Fichas[a].style.transform=="rotateY(180deg)"){
			if(Ficha1=="" ){
				Ficha1=text;
				pos1=a;
	
			}
			else
				if(Ficha1!="" && Ficha2==""){
					Ficha2=text;
					pos2=a;
				}			
		}else{			
			console.log("no rotada");
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
	
						Ficha1="";
						Ficha2="";
						
						Estado_fichas();
						
					}
					
					if(Ficha1!=Ficha2){						
						Intentos.innerHTML=Intentos_data-=1;
									
						Ficha1="";
						Ficha2="";

						Fichas[pos1].style.transform="rotateY(0deg)";
						Fichas[pos2].style.transform="rotateY(0deg)";
						
						Estado_fichas();
					}
				}


			},2000);
}



function Estado_fichas(){

	if(Aciertos==8){
		 add_datos_ranking(data_Score);
		 Felisitaciones_Estado=true;
		 LLamada_Ventana_Nodal();	
	}
	
	if(Intentos_data==0){
		add_datos_ranking(data_Score);		
		Perdiste_Estado=true;
		LLamada_Ventana_Nodal();		
	}
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


function add_datos_ranking(val){

	if(val>Ranking[0] &&  val>Ranking[1] && val>Ranking[2]){
		Ranking[0]=val;	
		Ranking[1]=Ranking[1];	
		Ranking[2]=Ranking[2];	
	}
	else
	if(val<=Ranking[0] && val>Ranking[1] && val>Ranking[2]){
		Ranking[0]=Ranking[0];	
		Ranking[1]=val;	
		Ranking[2]=Ranking[2];	
	}
	else
	if(val<=Ranking[0] && val<=Ranking[1] && val>Ranking[2]){
		Ranking[0]=Ranking[0];	
		Ranking[1]=Ranking[1];	
		Ranking[2]=val;		
	}
	
	
}













