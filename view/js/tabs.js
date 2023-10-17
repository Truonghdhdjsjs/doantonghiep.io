const tabheader=document.querySelector('.tab-header'),tabcontent=document.querySelector('.tab-content')
function tabclicked(element)
{
    let activedelment=tabheader.querySelector('.active-1')
    let activedtab= tabcontent.querySelector('.active-1')
    let elementname= element.getAttribute('name')
    let displaytab =tabcontent.querySelector(`#${elementname}`)
    
    activedelment.classList.remove('active-1')
    activedtab.classList.remove('active-1')
    element.classList.add('active-1')
    displaytab.classList.add('active-1')
}