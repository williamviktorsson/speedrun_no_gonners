<script lang="ts">
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<nav>
  <a href="/">Home</a>
  <a href="/elis">Elis</a>
</nav>

<slot />
