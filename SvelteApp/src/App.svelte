<script>
	let isOn = false;
  
	function toggleLamp() {
	  isOn = !isOn;
	}
  </script>
  
  <style>
	:global(body) {
	  margin: 0;
	  font-family: Arial, sans-serif;
	  transition: background-color 1s ease;
	  background-color: var(--bg-color);
	  color: white;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  height: 100vh;
	}
  
	img {
	  width: 200px;
	  margin: 30px 0;
	}
  
	button {
	  padding: 10px 20px;
	  font-size: 18px;
	  cursor: pointer;
	}
  </style>
  
  <svelte:head>
	<style>
	  :root {
		--bg-color: #222;
	  }
	</style>
  </svelte:head>
  
  {#if isOn}
	<script>
	  document.documentElement.style.setProperty('--bg-color', '#ffee88');
	</script>
  {:else}
	<script>
	  document.documentElement.style.setProperty('--bg-color', '#222');
	</script>
  {/if}
  
  <h1>Lâmpada</h1>
  
  <img src={isOn ? "imagens/bulb-on.png" : "imagens/bulb-off.png"} alt="Lâmpada" />
  
  <button on:click={toggleLamp}>
	{isOn ? 'Apagar' : 'Acender'}
  </button>