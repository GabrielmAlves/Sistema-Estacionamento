/*Variáveis para efetuar o estacionamento dos veículos*/
let nomeProprietario = document.getElementById('nome');
let horaEntrada = document.getElementById('hora_entrada');
let marca = document.getElementById('marca');
let placa = document.getElementById('placa');
let cor = document.getElementById('cor');
let tipo = document.getElementById('tipo');

let nome_proprietario = nomeProprietario.value; 
let hora_entrada = horaEntrada.value;
let Marca = marca.value;
let Placa = placa.value;
let Cor = cor.value;
let Tipo = tipo.value;
let count = 0;

/*Variáveis para a liberação dos veículos*/
let id = document.getElementById('id');
let type = document.getElementById('type');
let horarioSaida = document.getElementById('hora_saida');
let ID = id.value;
let Type = type.value;
let HS = horarioSaida.value;

/*Variáveis para relatório*/
let identificador = document.getElementById('id_rel');
let iden = id_rel.value;


/*============OBJETOS===========*/
let c = new Carro(count, Placa,Tipo,Marca,Cor,nome_proprietario,hora_entrada,HS);
let m = new Moto(count, Placa,Tipo,Marca,Cor,nome_proprietario,hora_entrada,HS);
let e = new Estacionamento();


function abrirPopUp(valor){
	if(valor == 0){
	popup.classList.add("open-popup");
	}else if(valor == 1){
		popup1.classList.add("open-popup");

	}else if(valor == 2){
		popup2.classList.add("open-popup");
	} else if(valor == 3){
		popup3.classList.add("open-popup");
	}

}

function fecharPopUp(valor){
	if(valor == 0){	
	if(placa.value === '' || tipo.value === '' || marca.value === '' || cor.value === '' || nomeProprietario === ''){
		alert('Preencha todos os campos!')

	}else if(tipo.value != 'C' && tipo.value != 'M'){
		alert('Tipo inválido!')
	} else if(!isNaN(marca.value) || !isNaN(cor.value) || !isNaN(nomeProprietario.value)){
	alert('Campos inválidos!')
} else if(tipo.value == 'C'){
	count++;
	c.setId(count)
	c.setPlaca(placa.value);
	c.setTipo(tipo.value);
	c.setMarca(marca.value);
	c.setCor(cor.value);
	c.setNomeProprietario(nomeProprietario.value);
	c.setHoraEntrada(horaEntrada.value)
	e.estacionar(0,c,hora_entrada)
}else if(tipo.value == 'M'){
	count++;
	m.setId(count)
	m.setPlaca(placa.value);
	m.setTipo(tipo.value);
	m.setMarca(marca.value);
	m.setCor(cor.value);
	m.setNomeProprietario(nomeProprietario.value);
	m.setHoraEntrada(horaEntrada.value)
	e.estacionar(0,m,hora_entrada)
} 
	}else if(valor == 1){
		   if(type.value === 'C'){
			e.liberar(id.value,type.value,horarioSaida.value);
		}else if(type.value === 'M'){
			e.liberar(id.value,type.value,horarioSaida.value);
		} else if(type.value === '' || id.value === '' || horarioSaida.value === ''){
			alert('Preencha todos os campos!')
		} else if(!isNaN(Type) || type.value != 'C' && type.value != 'M'){
			alert('Tipo inválido!')
		} 
	} else if(valor == 2){
		console.log('id: ', id_rel.value)
		e.gerarRelatorio(id_rel.value)
	} else if(valor == 3){
		popup3.classList.remove("open-popup");
		e.calcularValorPago();
	}
}

