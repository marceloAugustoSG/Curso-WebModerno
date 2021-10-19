const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')


const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'

const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

const maiorSalario = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {

    const funcionarios = response.data
    console.log(funcionarios)

    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)

    const func1 = funcionarios.filter(chineses).filter(mulheres).reduce(maiorSalario)

    const funcionarioMenorSalario = {
        id: func.id,
        nome: func.nome,
        sobrenome: func.sobrenome,
        email: func.email,
        genero: func.genero,
        cidade: func.cidade,
        pais: func.pais,
        empresa: func.empresa,
        salario: func.salario

    }

    const funcionarioMaiorSalario = {
        id: func1.id,
        nome: func1.nome,
        sobrenome: func1.sobrenome,
        email: func1.email,
        genero: func1.genero,
        cidade: func1.cidade,
        pais: func1.pais,
        empresa: func1.empresa,
        salario: func1.salario

    }
    console.log(`${funcionarioMenorSalario.nome} funcionária da empresa ${funcionarioMenorSalario.empresa},cidadã da ${funcionarioMenorSalario.pais} é o funcionario com menor salário,já que recebe : R$ ${funcionarioMenorSalario.salario},00`)
    console.log(`${funcionarioMaiorSalario.nome} funcionária da empresa ${funcionarioMaiorSalario.empresa},cidadã da ${funcionarioMaiorSalario.pais} é o funcionario com maior salário,já que recebe : R$ ${funcionarioMaiorSalario.salario},00`)

})