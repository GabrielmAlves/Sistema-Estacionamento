class Veiculo{
	constructor(id,placa,tipo,marca,cor,nomeDoProprietario,horaEntrada,horaSaida){
		this.id = id
		this.placa = placa
		this.marca = marca
		this.cor = cor 
		this.nomeDoProprietario = nomeDoProprietario
		this.tipo = tipo
		this.horaEntrada = horaEntrada
		this.horaSaida = horaSaida
	}
	
	setId(id){
		this.id = id
	}

	getId(id){
		return this.id
	}

	setPlaca(placa){
		this.placa = placa
	}

	getPlaca(placa){
		return this.placa
	}

	setTipo(tipo){
		this.tipo = tipo
	}

	getTipo(tipo){
		return this.tipo
	}

	setMarca(marca){
		this.marca = marca
	}

	getMarca(marca){
		return this.marca
	}

	setCor(cor){
		this.cor = cor
	}

	getCor(cor){
		return this.cor
	}

	setNomeProprietario(nomeDoProprietario){
		this.nomeDoProprietario = nomeDoProprietario
	}

	getNomeProprietario(nomeDoProprietario){
		return this.nomeDoProprietario
	}

	setHoraEntrada(horaEntrada){
		this.horaEntrada = horaEntrada
	}

	getHoraEntrada(horaEntrada){
		return this.horaEntrada
	}

	setHoraSaida(horaSaida){
		this.horaSaida = horaSaida
	}

	getHoraSaida(){
		return this.horaSaida
	}
}