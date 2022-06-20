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
    rows=1
    on:blur={toggleEditable}
    on:click={toggleEditable}
    on:keypress={keyHandler} 
    bind:value={title} 
  />
</div>

<style>
  .dynamicInput {
    max-width: 100%;
  }
  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    color: var(--theme-colors-text);
    background-color: transparent;
    font-weight: var(--theme-font-weightBold);
  }
  textarea:focus {
    outline: none;
    cursor: auto;
  }
</style>