ServerEvents.recipes(event => {
    event.remove({ type: 'create:compacting', output: 'createdeco:industrial_iron_ingot' })
});
