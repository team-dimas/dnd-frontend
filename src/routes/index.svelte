<script>
    import FormField from '../components/FormField.svelte';
    import Label from '../components/Label.svelte';
    import SelectField from '../components/SelectField.svelte';
    import TextField from '../components/TextField.svelte';
    import SelectOption from '../components/SelectOption.svelte';
    import Button from '../components/Button.svelte'
    import Checkbox from '../components/Checkbox.svelte'

    let value;
</script>

{value}

<FormField>
    <Label>Select</Label>
    <SelectField>
        <SelectOption value="123">123</SelectOption>
        <SelectOption value="456">456</SelectOption>
        <SelectOption value="789">789</SelectOption>
    </SelectField>
</FormField>

<FormField>
    <Label>Text</Label>
    <TextField/>
</FormField>

<Button kind="primary">Submit</Button>
<Button kind="default">Cancel</Button>

<Checkbox bind:value>
    Checkbox
</Checkbox>
