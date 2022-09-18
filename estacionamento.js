let popup = document.getElementById('popup');
let popup1 = document.getElementById('popup1');
let popup2 = document.getElementById('popup2');
let popup3 = document.getElementById('popup3');
class Estacionamento {
	
	constructor(){
		this.numeroVagas = 20
		this.vagasOcupadas = []
		this.carrosSairam = []
		this.saldo = 0;
	}

	estacionar(valor,veiculo,horaEntrada){
		if(valor == 0){
			if(this.numeroVagas > 0){
			popup.classList.remove("open-popup");
			this.numeroVagas = this.numeroVagas - 1
			console.log('Número de vagas: ', this.numeroVagas)
			localStorage.setItem('Estacionados', JSON.stringify(veiculo));
			var teste = localStorage.getItem('Estacionados')
			var teste1 = JSON.parse(teste);
			this.vagasOcupadas.push(teste1)
			console.log('Vagas ocupadas: ', this.vagasOcupadas)
		}else if(this.numeroVagas >= 20){
			alert('Não há mais vagas disponíveis!')
		}
		}
	}

	liberar(idVeiculo, tipo, horarioSaida){
		let flag = 0
		let teste 
		popup1.classList.remove("open-popup");
		let index = idVeiculo - 1
		for(var i = 0;i<this.vagasOcupadas.length ; i++){
			if(this.vagasOcupadas[i].id == idVeiculo){
				flag = 1
				this.vagasOcupadas[i].horaSaida = horarioSaida
				this.carrosSairam.push(this.vagasOcupadas[i])
				this.vagasOcupadas.splice(i, 1)
				this.numeroVagas++;
			}
		}
		if(flag == 0){
			alert('Id não identificado!')
		}
		console.log('Vagas preenchidas: ', this.vagasOcupadas)
		console.log('Quantidade de vagas: ', this.numeroVagas)
		}

	gerarRelatorio(id){
		let flag1 = 0
		popup2.classList.remove("open-popup");
		console.log('Carros que saíram: ', this.carrosSairam)
		for(var k = 0; k<this.carrosSairam.length ; k++){
			if(this.carrosSairam[k].id == id){
				flag1 = 1
				console.log('Horários de saída: ', this.carrosSairam[k].horaSaida)
				console.log('Horário de entrada: ', this.carrosSairam[k].horaEntrada)
			}
		}

		for(var j = 0; j<this.vagasOcupadas.length; j++){
			if(this.vagasOcupadas[j].id == id){
				flag1 = 1
			console.log('Horário de entrada: ', this.vagasOcupadas[j].horaEntrada)
			console.log('Horários de saída: ', this.vagasOcupadas[j].horaSaida)
			}
		}

		if(flag1 == 0){
			alert('Id não identificado!')
		}
	}


	calcularValorPago(){
		let horaEnt
		let minutoEnt
		let horaS
		let minutoS
		let total
		let horaEntFinal
		let horaSFinal
		for(var m = 0; m<this.carrosSairam.length ; m++){
			horaEnt = this.carrosSairam[m].horaEntrada.slice(0,2)
			minutoEnt = this.carrosSairam[m].horaEntrada.slice(3,5)
			horaS = this.carrosSairam[m].horaSaida.slice(0,2)
			minutoS = this.carrosSairam[m].horaSaida.slice(3,5)
			let ent = parseInt(horaEnt * 60) + parseInt(minutoEnt);
			let saida = parseInt(horaS * 60) + parseInt(minutoS);
			let total = saida - ent;
			console.log('Tempo total estacionado: ', total + ' minutos')
			if(this.carrosSairam[m].tipo == 'C'){
				if(total <= 15){
						this.saldo = this.saldo + 0;
						console.log('Saldo: R$', this.saldo)
					} else if(total >= 60 && total <= 239){
						this.saldo = this.saldo + 4;
						console.log('Saldo: R$', this.saldo)
					} else if(total >= 240){
						this.saldo = this.saldo + 20;
						console.log('Saldo: R$', this.saldo)
					}
				} else if(this.carrosSairam[m].tipo == 'M'){
					if(total <= 30){
						this.saldo = this.saldo + 0;
						console.log('Saldo: R$', this.saldo)
					} else if(total >= 60 && total <=239){
						this.saldo = this.saldo + 2;
						console.log('Saldo: R$', this.saldo)
					} else if(total >= 240){
						this.saldo = this.saldo + 10;
						console.log('Saldo: R$', this.saldo)
					}
				}
		}
					
	} 
}
			