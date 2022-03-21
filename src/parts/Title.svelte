<script>
  export let text;
  import { getContext } from "svelte";
  const { theme, change } = getContext("theme");
  export const teste = "x";
</script>

<button class="title" on:click={() => change("light")}>{teste}</button>
<span class="title" on:click={change}>{$theme.name}</span>

<style>
  .title {
    font-weight: bold;
    font-size: 12;
    color: var(--theme-colors-text);
  }
</style>
