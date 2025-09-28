document.getElementById("donationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o recarregamento da página

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const item = document.getElementById("item").value;

  const successMessage = document.getElementById("successMessage");

  // Exibe mensagem de sucesso
  successMessage.innerHTML = `Obrigado, <strong>${name}</strong>! Sua doação de <strong>${item}</strong> foi registrada. Entraremos em contato pelo e-mail <strong>${email}</strong>.`;

  // Limpa o formulário
  document.getElementById("donationForm").reset();
});
