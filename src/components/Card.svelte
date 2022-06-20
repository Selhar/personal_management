<script lang="ts" context="module">
  export interface ICard {
    text: string
  }
</script>

<script lang="ts">
  export let title="New card"
</script>

<div class="cardItem">
  {title}
</div>

<style>
  .cardItem {
    cursor: pointer;
    color: var(--theme-colors-text);
    padding: var(--theme-spaces-tiny);
    background-color: var(--theme-colors-backgroundContrast);
    border-radius: var(--theme-misc-radius);
    box-shadow: var(--theme-colors-shadow) var(--theme-spaces-shadow);
  }

  .cardItem:not(:first-child) {
    margin-top: var(--theme-spaces-small)
  }

</style>
