const leftSide = document.getElementById("left")
const rightSide = document.getElementById("right")

loadPage()

function loadPage()
{
  leftSide.innerHTML = "";
  rightSide.innerHTML = "";

  fetch('../data/dados.json')
  .then(res => res.json())
  .then(out => {
    loadDados(out.dados[0].content)
  })
}


function loadDados(content)
{
  content.forEach(c => {
    switch(c.name)
    {
      case "profile-title": setFullName(c.content); break
      case "profile-pic": setProfilePic(c.content); break
      case "profile-dados": setProfileDados(c.content); break
      case "profile-social": setProfileSocial(c.content); break
      case "objetivo": setObjetivos(c.content); break
      case "formacao": setFormacao(c.content); break
      case "experiencia": setExperiencia(c.content); break
      case "habilidades": setHabilidades(c.content); break
    }
  });
}

function setFullName(nome)
{
  var section = document.createElement('section')
  section.classList.add("profile-title")
  var h2 = document.createElement('h2')
  h2.textContent = nome

  section.append(h2)

  leftSide.append(section)
}

function setProfilePic(pic)
{
  var section = document.createElement('section')
  section.classList.add("profile-pic")
  var img = document.createElement('img')
  img.src = pic
  img.alt = "profile Pic"

  section.append(img)

  leftSide.append(section)
}

function setProfileDados(dados)
{
  var section = document.createElement('section')
  section.classList.add('profile-dados')

  dados.forEach(dado => {
    var p = document.createElement('p')
    var strong = document.createElement('strong')
    var span = document.createElement('span')

    strong.textContent = dado.title + ': '
    span.textContent = dado.value

    p.append(strong)
    p.append(span)

    section.append(p)
  })

  leftSide.append(section)
}

function setProfileSocial(socials)
{
  var section = document.createElement('section')
  section.classList.add('profile-social')

  socials.forEach(social => {
    var a = document.createElement('a')
    var stack = document.createElement('span')
    var i1 = document.createElement('i')
    var i2 = document.createElement('i')
    var title = document.createElement('span')

    stack.classList.add('fa', 'fa-stack', 'fa-lg')
    i1.classList.add('fa','fa-circle','fa-stack-2x')
    i2.classList.add('fa','fa-stack-1x','fa-inverse','fa-'+social.title)

    title.textContent = social.name

    stack.append(i1,i2)
    a.href = social.value
    a.target = "blank"
    a.append(stack, title)
    section.append(a)
  })

  leftSide.append(section)
}


function setObjetivos(content)
{
  var p = document.createElement('p')
  p.textContent = content

  setContent('Objetivo', p)
}

function setFormacao(content)
{
  var detalhes = document.createElement('div')
  detalhes.classList.add('detalhes')

  content.forEach(c => {
    var detalhe = document.createElement('div')
    var detalheLeft = document.createElement('div')
    var detalheRight = document.createElement('div')

    var data = document.createElement('strong')
    var nome = document.createElement('div')
    var local = document.createElement('div')

    detalhe.classList.add('detalhe')
    detalheLeft.classList.add('detalhe-left')
    detalheRight.classList.add('detalhe-right')

    data.textContent = c.data
    nome.textContent = c.area
    local.textContent = c.local

    detalheLeft.append(data)
    detalheRight.append(nome,local)

    detalhe.append(detalheLeft,detalheRight)
    detalhes.append(detalhe)
  })

  setContent('Formação', detalhes)
}

function setExperiencia(content)
{
  var detalhes = document.createElement('div')
  detalhes.classList.add('detalhes')

  content.forEach(c => {
    var detalhe = document.createElement('div')
    var detalheLeft = document.createElement('div')
    var detalheRight = document.createElement('div')

    var data = document.createElement('strong')
    var nome = document.createElement('div')
    var cargo = document.createElement('div')
    var local = document.createElement('div')

    detalhe.classList.add('detalhe')
    detalheLeft.classList.add('detalhe-left')
    detalheRight.classList.add('detalhe-right')

    nome.classList.add('title')

    data.textContent = c.data
    cargo.textContent = c.cargo
    nome.textContent = c.area
    local.textContent = c.local

    detalheLeft.append(data)
    detalheRight.append(nome,cargo,local)

    detalhe.append(detalheLeft,detalheRight)
    detalhes.append(detalhe)
  })

  setContent('Experiências', detalhes)
}

function setHabilidades(content)
{
  var detalhes = document.createElement('div')
  detalhes.classList.add('habilities')

  content.forEach(c => {
    var detalhe = document.createElement('div')
    var detalheLeft = document.createElement('div')
    var detalheRight = document.createElement('div')

    var data = document.createElement('strong')

    detalhe.classList.add('hability')
    detalheLeft.classList.add('hability-nome')
    detalheRight.classList.add('hability-level')

    data.textContent = c.name

    // level
    var hability = []
    c.level.forEach(l => {
      var i = document.createElement('i')
      i.classList.add('fa','fa-circle' + (l === 1 ? '' : '-o'))
      // hability.push(i)
      detalheRight.append(i)
    })

    detalheLeft.append(data)
    // detalheRight.append(hability)

    detalhe.append(detalheLeft,detalheRight)
    detalhes.append(detalhe)
  })

  setContent('Experiências', detalhes)
}


function setContent(_title, _values)
{
  var section = document.createElement('section')
  var title = document.createElement('h1')
  var content = document.createElement('div')

  content.classList.add('content')
  content.append(_values)
  title.textContent = _title

  section.append(title, content)

  rightSide.append(section)
}