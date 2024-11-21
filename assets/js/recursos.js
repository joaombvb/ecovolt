document.getElementById('simulador-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Coletando os valores dos inputs
    const tipoInst = document.getElementById('tipo-inst').value;
    const consumo = parseFloat(document.getElementById('consumo').value);
    const precoEnergia = parseFloat(document.getElementById('preco-energia').value);
    const custoSistema = parseFloat(document.getElementById('custo-sistema').value);
  
    // Calculando os resultados
    const economiaAnual = consumo * precoEnergia * 12;
    const tempoRetorno = custoSistema / economiaAnual;
    const impactoAmbiental = consumo * 0.6 * 12; // Supondo que 0.6 kg de CO2 seja emitido por kWh de energia consumido
  
    // Atualizando os resultados na interface
    document.getElementById('economia-anual').textContent = `R$ ${economiaAnual.toFixed(2)}`;
    document.getElementById('tempo-retorno').textContent = tempoRetorno.toFixed(2);
    document.getElementById('impacto-ambiental').textContent = `${impactoAmbiental.toFixed(2)} kg de CO2`;
  
    // Mostrando o resultado
    document.getElementById('resultados').style.display = 'block';
  });
  
document.getElementById('buscar-localizacao').addEventListener('click', function() {
    // Verificar se o navegador tem suporte à geolocalização
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const userLat = position.coords.latitude;
        const userLon = position.coords.longitude;
  
        // Carregar o mapa e centralizar na posição do usuário
        const map = L.map('map').setView([userLat, userLon], 13);
  
        // Adicionar o tileLayer para o mapa
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
  
        // Adicionar um marcador na posição do usuário
        L.marker([userLat, userLon])
          .addTo(map)
          .openPopup();
  
      }, function(error) {
        alert("Erro ao obter a localização: " + error.message);
      });
    } else {
      alert("Geolocalização não é suportada neste navegador.");
    }
});
  
  
  