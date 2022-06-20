<script lang="ts" context="module">
    import type { IColumn } from "./components/Column.svelte"
</script>

<script lang="ts">
  import ThemeContext from "./ThemeStore.svelte";
  import Column from "@components/Column.svelte";

  const columns: IColumn[] = [{
    title: "t1",
    cards: [
      {
        text: "c1"
      },
      {
        text: "c2"
      }
    ],
  },
  {
    title: "t2",
    cards: [
      {
        text: "c1"
      },
      {
        text: "c2"
      }
    ],
  }
  ]
</script>

<ThemeContext>
  <main class="main">
    <Column {columns} />
  </main>
</ThemeContext>


<style>
  .main {
    width: 100vw
  }
</style>
