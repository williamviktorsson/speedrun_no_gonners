<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>elis coola sida</h1>

{#each data.interests as interest}
  <li><a href={"/elis/" + interest.id}>{interest.name}</a></li>
{/each}
