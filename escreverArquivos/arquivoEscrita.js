const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1299.99,
    desconto: 015
}

fs.writeFile(
    __dirname + '/arquivoGerado.json',
    JSON.stringify(produto),
    err => {
        console.log(err || 'arquivo Salvo!')
    }
)