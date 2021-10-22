const LinksSocialMedia = {
  github: 'DaviGomesO',
  youtube: 'channel/UCM4vs3lvK9dmhHVn341o4ug',
  facebook: 'davi.gomes.7771',
  instagram: 'davi.gomes__',
  twitter: 'DaviGomes___'
}

function changeSocialMediaLinks() {
  //pegando o elemento que está na id userName
  //modificando o conteúdo dessa id com o textContent
  //document.getElementById('userName').textContent = 'Davi Gomes'
  //userName.textContent = 'Davi Gomes'

  for (let li of socialLinks.children) {
    //o const aqui pode ser alterado pois a varivel é de escopo deixando de existir quando sair do laço.
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}

//alterando os links, que eram pra estar com o do mayk lá na main

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  //fetch entra na url pega o que retorna e importa para o código
  //then funciona como um faça
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      //userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

//Arroe fuctions é uma forma contraida das funções tendo o seguinte formato: argumento => {}, porém para executar a mesma é mais complicado. E quando tem mais de um parâmetro: (parametro1, parametro2) => {}, quando não recebe parâmetro, dessa forma: () => {}. Quando faz apenas uma função, não necessita das chaves.
