/**
 * For the purpose of organizing style partial DDD artifacts,
 * the following enums are defined (default ORGANISMS).
 *
 * ReactiumGulp.Enums.style.MIXINS = -1000
 * ReactiumGulp.Enums.style.VARIABLES = -900
 * ReactiumGulp.Enums.style.BASE = -800
 * ReactiumGulp.Enums.style.ATOMS = 0
 * ReactiumGulp.Enums.style.MOLECULES = 800
 * ReactiumGulp.Enums.style.ORGANISMS = 900
 * ReactiumGulp.Enums.style.OVERRIDES = 1000
 *
 * Set exclude to true to disable a partial by pattern.
 */
ReactiumGulp.Hook.registerSync('ddd-styles-partial', SassPartial => {
    SassPartial.register('c0ffa160-6f90-4ecc-ade6-13dd88e05fd6', {
        pattern: /Hero\/_reactium-style/,
        exclude: false,
        priority: ReactiumGulp.Enums.style.ORGANISMS,
    });
});
