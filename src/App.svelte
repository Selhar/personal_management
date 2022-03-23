<script lang="ts" context="module">
    import type { IColumn } from "./components/Column.svelte"

</script>

<script lang="ts">
  import ThemeContext from "./ThemeStore.svelte";
  import Column from "@components/Column.svelte";

  const columns: IColumn[] = [{
    title: "To-do",
    cards: [
      {
        text: "buy weed"
      },
      {
        text: "smoke weed"
      }
    ]
  }]
</script>

<ThemeContext>
  <main>
    <Column {columns} />
  </main>
</ThemeContext>

<style>
</style>
