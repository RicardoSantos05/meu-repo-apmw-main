// Criar título
const h1 = document.createElement('h1');
h1.textContent = 'Lâmpada';
document.body.appendChild(h1);

// Criar imagem
const img = document.createElement('img');
img.id = 'lamp';
img.src = 'imagens/bulb-off.png'; // imagem apagada
document.body.appendChild(img);

// Criar botão
const btn = document.createElement('button');
btn.textContent = 'Acender';
document.body.appendChild(btn);

// Lógica da lâmpada
let isOn = false;

btn.onclick = () => {
  isOn = !isOn;
  img.src = isOn ? 'imagens/bulb-on.png' : 'imagens/bulb-off.png';
  btn.textContent = isOn ? 'Apagar' : 'Acender';
  document.body.style.backgroundColor = isOn ? '#ffee88' : '#222';
};