<script>
  let count = 0;

  function incrementCount() {
    count += 1;
  }
</script>

<div>
  <a href="https://svelte.dev" rel="noreferrer" target="_blank">
    <img alt="Svelte logo" class="logo svelte" src="assets/svelte.svg" />
  </a>
</div>
<h1>Svelte</h1>
<div class="card">
  <button on:click={incrementCount} type="button">count is {count}</button>
  <p>
    Edit <code>src/App.svelte</code> and save to test LiveReload
  </p>
</div>
<p class="read-the-docs">Click on Svelte logo to learn more</p>

<style>
  :global(body > div) {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
    box-sizing: border-box;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) .logo {
      animation: logo-spin infinite 20s linear;
    }
  }

  .card {
    padding: 2em;
  }

  .read-the-docs {
    color: #888;
  }
</style>
