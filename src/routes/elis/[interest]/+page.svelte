<script lang="ts">
  import { browser } from "$app/environment";
  import { invalidateAll } from "$app/navigation";
  import { onDestroy } from "svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  if (browser) {
    let i = setInterval(() => {
      invalidateAll();
    }, 1000);
    onDestroy(() => {
      clearInterval(i);
    });
  }
</script>

<h1>{data.interest?.name}</h1>

<hr />

<form action="?/edit" method="post">
  <textarea
    name="description"
    cols="1"
    rows="4"
    value={data.interest?.description   }
  />
  <button>Submit changes</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    gap: 20px;
  }
</style>
