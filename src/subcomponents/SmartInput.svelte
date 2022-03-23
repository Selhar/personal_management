<script lang="ts">
  export let title = "";
  let readOnly = true;

  const keyHandler = (e: KeyboardEvent) => {
    if(e.key === "Enter") {
      toggleEditable()
    }
  }
  const toggleEditable = () => readOnly = !readOnly;

</script>

<div class="dynamicInput">
  <textarea 
    {readOnly} 
    on:blur={toggleEditable}
    on:click={toggleEditable}
    on:keypress={keyHandler} 
    bind:value={title} 
  />
</div>

<style>
  .dynamicInput {
    width: 15em;
    max-width: 100%;
  }
  textarea {
    width: 100%;
    height: auto;
    resize: none;
  }
  textarea:focus {
    outline: none;
  }
</style>