import { guides as guidesEs } from './es';
import { Guide } from './es';

const guidesCaOverrides: Partial<Guide>[] = [
    {
        "id": "01",
        "title": "Guia introduct\u00f2ria al reglament d'IA",
        "summary": "Aquesta guia ofereix una visi\u00f3 general del Reglament Europeu d'IA, definint el seu abast i obligacions principals. Explica els nivells de risc (inacceptable, alt, transpar\u00e8ncia, m\u00ednim) i els rols dels operadors, com proveïdors i responsables del desplegament."
    }
];

export const guides: Guide[] = guidesEs.map(g => {
    const override = guidesCaOverrides.find(o => o.id === g.id);
    if (override) {
        return {
            ...g,
            ...override,
            // If override properties are missing, they fall back to 'g' (Spanish) automatically via spread
            // But specific nested arrays might need explicit handling if we wanted to replace them entirely.
            // Since we only provide title/summary here, the rest remains in Spanish.
        };
    }
    return g;
});
