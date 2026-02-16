+++
title = "Mapping the Transatlantic Slave Trade"
description = "An interactive flow map of the transatlantic and inter-American slave trade"
date = 2026-02-15
updated = 2026-02-15
template = "blog/page.html"

[taxonomies]
authors = ["Clinton Bowen"]

[extra]
lead = "Seeing the routes that shaped the Atlantic world"
toc = true
top = true
+++

Numbers on a page cannot convey the scale of the transatlantic slave trade. Between the sixteenth and nineteenth centuries, an estimated 12.5 million Africans were forced onto ships bound for the Americas. The [Trans-Atlantic Slave Trade Database](https://www.slavevoyages.org/) has documented over 36,000 individual voyages. But a spreadsheet of voyage records, however comprehensive, obscures the geographic reality: *where* people were taken from, *where* they were sent, and how those patterns shifted over centuries.

This interactive map is an attempt to make those patterns visible.

## What the Map Shows

The visualization renders flow lines from nine African embarkation regions to destinations across the Americas and Europe. Each stem represents the route from one African source region to a selected destination, with thickness proportional to the volume of people transported on that route. The stems converge into a trunk that points to the destination.

The map draws on the same voyage-level data compiled by the Trans-Atlantic Slave Trade Database project, covering both the transatlantic trade and the lesser-known inter-American trade -- the redistribution of enslaved people between ports in the Americas after their initial Atlantic crossing.

{{ slave_trade_map() }}

## Why Visualization Matters

The slave trade was not a single event but a system that operated differently across time and space. Visualization makes several things immediately apparent that tabular data does not:

1. **Regional concentration**: Selecting a Caribbean destination like Jamaica or Saint-Domingue reveals that the Bight of Benin, the Gold Coast, and West Central Africa were dominant source regions. Selecting Bahia or Rio de Janeiro shifts the pattern dramatically toward West Central Africa and Southeast Africa -- reflecting the Portuguese trade networks that connected Angola and Mozambique to Brazil.

2. **Temporal shifts**: Using the time slider to compare early periods (1500s-1600s) against later ones (1700s-1800s) shows how trade routes evolved. The British abolition of the slave trade in 1807 redirected traffic; the expansion of sugar cultivation in Cuba drove a surge of voyages to Havana in the early nineteenth century even as other routes contracted.

3. **Scale disparities**: The thickness of the flow lines makes relative volume immediately legible. Brazil received more enslaved Africans than any other region in the Americas -- roughly 5.5 million people -- yet this fact is often underappreciated relative to the attention given to the trade into North America, which received approximately 400,000.

## Routes and the Sea

The flow lines on the map are not arbitrary curves. They follow plausible maritime corridors shaped by the Atlantic wind and current systems that governed sailing routes during the age of sail. Ships departing from Senegambia or Sierra Leone bound for the Caribbean rode the northeast trade winds on a southwesterly arc. Ships from West Central Africa bound for Brazil took the shorter but still perilous route across the South Atlantic, aided by the south equatorial current. European-bound ships followed the westerlies northeastward.

These routes mattered enormously. Voyage duration affected mortality rates. Ships from Southeast Africa to the Caribbean faced the longest crossings -- sometimes exceeding three months -- with correspondingly higher death tolls. The geography of the trade was inseparable from its human cost.

## Reading the Sources

The nine African source regions on the map correspond to the major embarkation zones used by the Trans-Atlantic Slave Trade Database:

- **Senegambia** and **Sierra Leone**: Upper Guinea coast, source of early Portuguese and later British and French trade
- **Windward Coast** and **Gold Coast**: Central West Africa, site of major European trading forts
- **Bight of Benin** and **Bight of Biafra**: The densely populated Niger Delta region, a major source for British and Portuguese slavers
- **West Central Africa**: The Angola-Congo coast, the single largest source region across the entire history of the trade
- **Southeast Africa**: Mozambique and Madagascar, increasingly important in the late eighteenth and nineteenth centuries
- **Other Africa**: Interior and less-classified origins

Each of these regions had distinct political structures, ethnic compositions, and relationships with European traders. The map's per-region flow lines make it possible to trace these distinct commercial relationships across the Atlantic.

## Explore the Full Map

The embedded map above provides the core experience, but the [full-page version](/slave-trade-map/) offers more space for exploring the data, especially on smaller screens.

We welcome feedback and contributions. The source code for the visualization is available on [GitHub](https://github.com/afbase/slave-trade-map). If you have corrections, suggestions, or want to contribute to SlaveCodes.org more broadly, please see our [contribution guidelines](/contributing/).

## References

- Eltis, David, and David Richardson. *Atlas of the Transatlantic Slave Trade*. Yale University Press, 2010.

- Trans-Atlantic Slave Trade Database. [slavevoyages.org](https://www.slavevoyages.org/).
