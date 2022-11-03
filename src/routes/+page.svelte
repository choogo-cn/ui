<script lang="ts">
  import {Toast, toast} from '$lib/toast'
  import {Account} from '$lib/icons'
  import {Button, ThemeProvider, Dialog} from '$lib'

  let dialog = {
    visible: false
  }

  let count = 0
</script>

<!-- <ThemeProvider> -->
  <Button onClick={() => dialog.visible = true}>open dialog</Button>
  <Button onClick={() => toast(`count: ${count++}`)}>open toast</Button>
  <Button onClick={() => toast('ok')} variant="text"><Account color="warning"/></Button>
  <Dialog open={dialog.visible} onClose={() => dialog.visible = false}>ok</Dialog>
  <Toast/>
<!-- </ThemeProvider> -->
