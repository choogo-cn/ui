<script lang="ts">
  import {Button, ThemeProvider, Dialog} from '$lib'

  let dialog = {
    visible: false
  }
</script>

<ThemeProvider>
  <Button onClick={() => dialog.visible = true}>test</Button>

  <Dialog open={dialog.visible} onClose={() => dialog.visible = false}>
    ok
  </Dialog>
</ThemeProvider>
