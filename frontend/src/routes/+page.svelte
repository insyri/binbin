<svelte:head>
  <title>binbin | Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section id="this">
  <h1>binbin: Getting Started!</h1>
  <h2>We are here to help you, blah blah, follow the buttons to go to blah</h2>

  <div class="main">
    <ul id="horizontal">
      <li><a href="/scan"> <button>Scan ID to Catalog</button></a></li>
      <li><a href="/checkout"><button>Checkout an ID</button></a></li>
    </ul>

    <ul class="side">
      <li><a href="/guide"><button>FAQ / Guide</button></a></li>
      <li><a href="/credits"><button>Credits</button></a></li>
      <li><a href="https://forms.gle/bNpZJft2Ui4Etrj98"><button>Feedback Form</button></a></li>
    </ul>
  </div>
</section>

<style>
  #this {
    display: flex;
    flex-direction: column;
  }

  .main {
    display: table-row;
    flex: 1;
  }

  ul {
    display: table-cell;
    list-style-type: none;
  }

  ul#horizontal {
    list-style: none;
  }

  ul#horizontal li {
    display: inline;
  }
</style>
