// STRETCH
exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert([
            {vin: 'JH4DA9360LS010859', model: 'Acura', make: 'Integra', mileage: 2450, title: 'used', transmission: 'auto'},
            {vin: '1GKEL19WXRB546238', model: 'GMC', make: 'Safari', mileage: 10000, title: 'scrap', transmission: ''},
            {vin: '1FAFP52UXXA197384', model: 'Ford', make: 'Taurus', mileage: 00, title: 'new', transmission: 'auto'},
            {vin: '1GCHK29U31E237682', model: 'Chevrolet', make: 'Silverado', mileage: 500, title: 'fairly new', transmission: 'manual'}
        ]);
};
