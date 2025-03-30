<script lang="ts">
    import { FileSystemTool } from "$lib";
    const p = FileSystemTool.handler({command: 'read-files'})
</script>

<h1>Welcome to SvelteKit</h1>
<p>{JSON.stringify(p)}</p>
