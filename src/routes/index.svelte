<script>
    import FormField from '../components/FormField.svelte';
    import Label from '../components/Label.svelte';
    import SelectField from '../components/SelectField.svelte';
    import TextField from '../components/TextField.svelte';
    import SelectOption from '../components/SelectOption.svelte';
    import Button from '../components/Button.svelte'
    import Checkbox from '../components/Checkbox.svelte'
    import Table from '../components/table/Table.svelte'
    import TableRow from '../components/table/TableRow.svelte'

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

<Table
    rows={[
        {name: 'Sample1', weight: 1, amount: 3},
        {name: 'Sample2', weight: 2, amount: 2},
        {name: 'Sample3', weight: 3, amount: 1},
    ]}
    visibleColumns={['name', 'weight', 'amount']}
    let:row
>
    <thead slot="head">
        <TableRow let:column>
            {#if column === 'name'}
                Name
            {:else if  column === 'weight'}
                Weight
            {:else if  column === 'amount'}
                Amount
            {/if}
        </TableRow>
    </thead>

    <TableRow let:column>
        {#if column === 'weight'}
            {row['weight']} lb
        {:else}
            {row[column]}
        {/if}
    </TableRow>
</Table>
