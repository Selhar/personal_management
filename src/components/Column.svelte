<script lang="ts" context="module">
  import type { ICard } from "./Card.svelte"
  export interface IColumn {
    title: string,
    cards: ICard[]
  }
</script>

<script lang="ts">
    import Card from "@components/Card.svelte"
    import ColumnHeader from "@subcomponents/ColumnHeader.svelte"
    
    export let columns:IColumn[]
</script>

<div class="columnList">
  {#each columns as column}
    <div class="columnContainer">
      <ColumnHeader title={column.title} />
      {#each column.cards as card}
        <Card title={card.text} />
      {/each}
    </div>
  {/each}
</div>

<style>
  .columnList {
    display: flex;
    flex-direction: row;
  }

  .columnContainer {
    padding: var(--theme-spaces-medium);
    background-color: var(--theme-colors-background);
    border-radius: var(--theme-misc-radius);
  }

  .columnContainer:not(:last-child) {
    margin-right: var(--theme-spaces-large);
  }
</style>