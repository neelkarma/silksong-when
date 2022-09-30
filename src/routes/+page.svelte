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

<h1>Silksong When</h1>
<p>The current time is <strong>{new Date(now).toString()}</strong></p>
<p>
  There are approximately <strong>{daysLeft}</strong> days left until Silksong has
  to be released.
</p>
<p>
  This means that there is roughly a <strong>{probability * 100}%</strong> chance
  Silksong will be released today.
</p>
<p class="muted">
  <em>
    There is also an API Endpoint where you can request this information, at <a
      href="/api"><code>GET /api</code></a
    >
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
