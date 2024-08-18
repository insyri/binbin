<script>
  import github from "$lib/images/github.svg";
  import "../app.css";
</script>

<section>
  <main>
    <slot />
  </main>

  <footer>
    <a href="/"><button>Go to Home</button></a>
    <p>
      Developed by the Cypress Creek Computer Science and Engineering Club of
      2024-25. <a href="/credits"> Click to view credits.</a>
    </p>
    <a href="https://github.com/insyri/binbin">
      <img src={github} alt="GitHub" /></a
    >
  </footer>
</section>

<style>
  footer img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  footer {
    display: table-row;
  }

  footer > * {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    padding: 0.5rem;
  }
</style>
