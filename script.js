let estudantes = [
{nome: 'João',
 nota01: 7,
 nota02: 5
},

{nome: 'Letícia',
 nota01: 10,
 nota02: 9
},

{nome: 'Diego',
 nota01: 9,
 nota02: 9
},

{nome: 'Julia',
 nota01: 5,
 nota02: 6
}
]

function calculoMedia(nome, nota01, nota02) {
	let media = (nota01 + nota02) / 2
	verificarAprovacao(nome, media)
}

function verificarAprovacao(nome, media) {
	let mensagem
	if (media >= 7) {
		mensagem = `Parabems, ${nome}! você foi aprovado no concurso.`
	} else {
		mensagem = `Não foi dessa vez, ${nome}! tente novamente.`
	}
	alert(`A média do Aluno(a) ${nome} é: ${media} \n${mensagem}`)
}

for (estudante in estudantes) {
	let nome = estudantes[estudante].nome
	let nota01 = estudantes[estudante].nota01
	let nota02 = estudantes[estudante].nota02
	calculoMedia(nome, nota01, nota02)

}