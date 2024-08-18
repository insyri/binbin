<script>
  export let isEnabled = false;

  function toggle() {
    isEnabled = !isEnabled;
    dispatch("toggle", { isEnabled });
  }

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export function getSwitchState() {
    return isEnabled;
  }
</script>

<button on:click={toggle}>
  {isEnabled ? "Enabled" : "Disabled"}
</button>
