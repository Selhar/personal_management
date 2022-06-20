<script lang="ts">
    import SmartInput from "@subcomponents/SmartInput.svelte"
    export let title:string
</script>

<div class="header">
  <SmartInput {title}/>
</div>

<style>
  .header {
    padding: 0 0 0 var(--theme-spaces-medium)
  }
</style>