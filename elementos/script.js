function criarElemento(){
    const cores =['red', 'green', 'blue'];
    const novaDiv = document.createElement('div');
    novaDiv.className ='box box-' + cores[Math.floor(Math.random()* cores.length)];
    novaDiv.addEventListener('click', () => {
        novaDiv.style.opacity = '0';
        setTimeout(()=>{
            novaDiv.remove();
        } ,300);
    });
    document.getElementById('boxes').appendChild(novaDiv);
}

const creatButton = document.getElementById('creatButton');
creatButton.addEventListener('click',criarElemento);