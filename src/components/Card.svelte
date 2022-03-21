<script lang="ts">
  import Title from "@parts/Title.svelte";
</script>

<div class="container">
  <Title text="teste titl" />
</div>

<style>
  .container {
    border: var(--theme-borderDefault) var(--theme-borderDefault) solid;
    padding: var(--theme-paddingDefault);
    max-width: fit-content;
  }
</style>
