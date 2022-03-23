<script lang="ts">
  import SmartInput from "@subcomponents/SmartInput.svelte";
  export let title="New card"
</script>

<div class="container">
  <SmartInput {title}/>
</div>

<style>

  .container {
    border: var(--theme-borderDefault) var(--theme-borderDefault) solid;
    padding: var(--theme-paddingDefault);
    max-width: fit-content;
  }
</style>
