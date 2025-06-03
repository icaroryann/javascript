let amigo = {nome:'Icaro',
    sexo: 'M',
    peso: 62, 
    engordar(p){
        console.log('Engordou')
        this.peso += p
    }}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)