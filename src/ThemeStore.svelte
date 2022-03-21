<script>
  // This is a heavily adapted version of Josef Aidt's script from this article
  // https://dev.to/josef/theming-in-svelte-with-css-variables-53kd
  import { setContext, onMount } from "svelte";
  import { writable } from "svelte/store";
  import { themes } from "./themes.js";

  const defaultTheme = themes.dark;

  const Theme = writable(themes.dark);

  setContext("theme", {
    theme: Theme,
    change: (name = "light") => {
      const newTheme = themes[name];

      if (!newTheme) {
        console.info("Theme not found");
        return;
      }

      Theme.update((t) => ({ ...t, ...newTheme }));
      setVars(newTheme);
    },
  });

  const setVars = (theme) => {
    const defaults = themes.defaults;

    [defaults, theme].forEach((item) => {
      for (let domain in item) {
        for (let property in item[domain]) {
          const value = item[domain][property];
          let name = `--theme-${domain}-${property}`;
          document.documentElement.style.setProperty(name, value);
        }
      }
    });

    document.documentElement.style.setProperty("--theme-name", theme.name);
  };

  onMount(() => {
    setVars(defaultTheme);
  });
</script>

<slot />
