
function formatarDataAtual() {
  const agora = new Date();

 
  const diaSemana = agora.toLocaleDateString('pt-BR', { weekday: 'long' });
  const diaSemanaFormatado = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);

  
  const dia = String(agora.getDate()).padStart(2, '0');
  const mes = String(agora.getMonth() + 1).padStart(2, '0');
  const ano = agora.getFullYear();

 
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');

  
  const offsetMinutos = agora.getTimezoneOffset();
  const sinalOffset = offsetMinutos > 0 ? '-' : '+';
  const horasOffset = String(Math.floor(Math.abs(offsetMinutos) / 60)).padStart(2, '0');
  const minsOffset = String(Math.abs(offsetMinutos) % 60).padStart(2, '0');
  const fusoHorario = `(${sinalOffset}${horasOffset}:${minsOffset})`;

  return `${diaSemanaFormatado}, ${dia}/${mes}/${ano} – ${horas}:${minutos} ${fusoHorario}`;
}


function exibirBoasVindas() {
  let nome = prompt('Digite seu primeiro nome:');
  let sobrenome = prompt('Digite seu sobrenome:');

  if (!nome || !nome.trim()) {
      nome = 'Leonardo';
  }

  const nomeCompleto = sobrenome && sobrenome.trim() ? `${nome.trim()} ${sobrenome.trim()}` : nome.trim();
  const dataAtual = formatarDataAtual();

  
  const elementoBoasVindas = document.getElementById('boas-vindas');

  if (elementoBoasVindas) {
      elementoBoasVindas.textContent = `Olá, ${nomeCompleto}! Hoje é ${dataAtual}`;
  }
}


exibirBoasVindas();


    
  
  