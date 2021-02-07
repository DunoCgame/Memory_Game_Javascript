let Fichas = document.getElementsByClassName("ficha");
let label = document.getElementsByTagName("label");
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
	  // window.location.reload(); 
Reinicio();
}
	
	
document.querySelectorAll(".ficha").forEach((element, index) => {
	element.onclick = function(){
		
						SelectFicha(index,label[index].className);			
						
						}	
});	
	

function jugar(){

	SectionIntro.style.display="none";
	SectionGame.style.display="block";
	MezclarPosLetras();
	OcultarFichas();
	
}

// reset function

function Reinicio(){
	
	SectionIntro.style.display="block";
	SectionGame.style.display="none";
	MezclarPosLetras();
	// OcultarFichas();
	
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

	
var MezclarLetras;
	
function MezclarPosLetras(){
		MezclarLetras = Letras.sort(function(){  return Math.random()-0.5 });

			for(let i=0; i<Fichas.length; i++){
			
				label[i].className = MezclarLetras[i];
				Fichas[i].style.background="white";
				Fichas[i].style.border="2px solid #cccc00";

			}
		
	}
	
function OcultarFichas(){
	
		for(let o=0; o<Fichas.length; o++ ){
			
			label[o].style.display="block";					
		}
		
	let time;	
	
	// clearTimeout(time);
	
	time = setTimeout(function(){  
	
		for(let o=0; o<Fichas.length; o++ ){
			
			label[o].style.display="none";
			Fichas[o].style.background="rgb(41, 82, 163)";
			Fichas[o].style.border="2px solid white";
						
		}

	},5000);
	
	// clearTimeout(time);
}


function SelectFicha(a,text){
	
if(label[a].style.display!="block"){
	
		
			// alert("ficha" +a+" select no es block");
			

			
			if(Ficha1=="" ){
				Ficha1=text;
				pos1=a;
				
				Fichas[a].style.background="white";
				Fichas[a].style.border="2.3px solid #cccc00";						
				label[a].style.display="block";
				
					
			}
			else
				if(Ficha1!="" && Ficha2==""){
					Ficha2=text;
					pos2=a;
					
					Fichas[a].style.background="white";
					Fichas[a].style.border="2.3px solid #cccc00";
								
					label[a].style.display="block";
					
						
				}
			

			Verificar();
			

		}else{
			
			// alert("ficha " +a+"select es block");
		}
	
	

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
						
						Fichas[pos1].style.background="rgb(41, 82, 163)";
						Fichas[pos2].style.background="rgb(41, 82, 163)";
						Fichas[pos1].style.border="2px solid white";
						Fichas[pos2].style.border="2px solid white";
						
						label[pos1].style.display="none";
						label[pos2].style.display="none";
						
						Estado_fichas();
					}
				}


			},1000);
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
	
	// Ranking[0]=data_Score;
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









