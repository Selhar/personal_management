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

{#each columns as column}
  <ColumnHeader title={column.title} />
  {#each column.cards as card}
    <Card title={card.text} />
  {/each}
{/each}


