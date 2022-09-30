<script lang="ts">
  import { when } from "$lib/when";
  import { onDestroy } from "svelte";

  let { now, daysLeft, probability } = when();

  const interval = setInterval(() => {
    const w = when();
    now = w.now;
    daysLeft = w.daysLeft;
    probability = w.probability;
  }, 1000);

  onDestroy(() => clearInterval(interval));
</script>

<svelte:head>
  <title>{Math.floor(daysLeft)} days left until Silksong comes out</title>
</svelte:head>

<h1>Silksong When</h1>
<p>The current time is <strong>{new Date(now).toString()}</strong>.</p>
<p>
  Silksong will be released in a maximum of approximately <strong
    >{daysLeft}</strong
  > days.
</p>
<p>
  This means that there is a roughly <strong>{probability * 100}%</strong> chance
  Silksong will be released today.
</p>

<p class="muted">
  <em>
    <a href="https://github.com/neelkarma/silksong-when">Source</a> |
    <a href="/api">API</a>
  </em>
</p>

<style global>
  body {
    background-color: #222;
    color: #ccc;
    font-family: sans-serif;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }

  a:hover {
    color: #aaa;
  }

  .muted {
    color: #888;
  }
</style>
