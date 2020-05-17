<script>
    import {
        FormField,
        Label,
        SelectField,
        TextField,
        SelectOption,
        Button,
        Checkbox,
    } from '../components/library';

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
