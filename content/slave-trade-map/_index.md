+++
title = "Transatlantic Slave Trade Map"
description = "Interactive visualization of the transatlantic slave trade flow data"
draft = false
insert_anchor_links = "none"
template = "slave-trade-map/section.html"
[extra]
lead = "Explore the routes of the transatlantic and inter-American slave trade"
+++

## The Database

The map above draws on the **Trans-Atlantic Slave Trade Database** (TASTDB), the most comprehensive record of the forced migration of enslaved Africans across the Atlantic Ocean. Compiled over decades by an international team of scholars, the database documents individual voyages — ships, ports of departure and arrival, numbers of people embarked and disembarked, mortality at sea, and the national flags under which these voyages sailed.{{ footnote(id="1", content="David Eltis and David Richardson, eds., *Atlas of the Transatlantic Slave Trade* (New Haven: Yale University Press, 2010). The database is maintained at [slavevoyages.org](https://www.slavevoyages.org/).") }}

A companion dataset, the **Intra-American Slave Trade Database**, records voyages that moved enslaved people *between* ports in the Americas — from Caribbean islands to mainland colonies, from one colonial power's territory to another.

Together, these databases represent a monumental scholarly achievement. They are also, by necessity, incomplete.

## By the Numbers

<div class="stat-grid">
  <div class="stat-box">
    <span class="stat-number">36,108</span>
    <span class="stat-label">Trans-Atlantic voyages documented</span>
  </div>
  <div class="stat-box">
    <span class="stat-number">11,521</span>
    <span class="stat-label">Intra-American voyages documented</span>
  </div>
  <div class="stat-box">
    <span class="stat-number">10.7M</span>
    <span class="stat-label">Estimated embarked (trans-Atlantic)</span>
  </div>
  <div class="stat-box">
    <span class="stat-number">9.2M</span>
    <span class="stat-label">Estimated survived the crossing</span>
  </div>
  <div class="stat-box">
    <span class="stat-number">1.5M</span>
    <span class="stat-label">Estimated deaths at sea</span>
  </div>
  <div class="stat-box">
    <span class="stat-number">8,459</span>
    <span class="stat-label">Voyages after the 1808 ban</span>
  </div>
</div>

The trans-Atlantic trade spanned more than three centuries (1514--1866). At its peak, hundreds of voyages per year carried enslaved people from the coasts of West and Central Africa to plantations in Brazil, the Caribbean, and North America. The mortality rate across the Middle Passage averaged **13.7%** — roughly one in seven people embarked did not survive the crossing.{{ footnote(id="2", content="Calculated from TASTDB: 10,665,568 estimated embarked vs. 9,202,995 estimated disembarked across 36,108 documented voyages.") }}

{% accordion(id="flag-breakdown", title="Voyages by national flag") %}
| Flag | Voyages | Estimated Embarked | Estimated Disembarked |
|------|--------:|-------------------:|----------------------:|
| Great Britain | 11,239 | 2,929,174 | 2,472,921 |
| Portugal / Brazil | 6,124 | 2,089,558 | 1,855,789 |
| France | 4,090 | 1,273,146 | 1,087,264 |
| Spain | 1,637 | 460,299 | 401,252 |
| Netherlands | 1,249 | 440,592 | 382,130 |
| United States | 1,799 | 309,111 | 256,247 |
| Denmark | 250 | 71,170 | 59,618 |

*Source: Trans-Atlantic Slave Trade Database, 2020 dataset. Voyages with no recorded national flag are excluded.*
{% end %}

Between 1800 and 1820 — the two decades that frame the documents discussed in our [blog post](/blog/2026-02-15-slave-trade-map/) — the database records **5,455 trans-Atlantic voyages** carrying an estimated 1.6 million people.{{ footnote(id="3", content="TASTDB filtered for YEARAM 1800--1820: 5,455 voyages, 1,606,167 estimated embarked, 1,428,351 estimated disembarked.") }} The year 1808 marks a visible inflection point: both the United States and Great Britain formally abolished the trans-Atlantic slave trade that year. The number of voyages drops sharply — then recovers, as illegal trade continued under different flags and through different ports for decades afterward.

## Primary Sources

Three documents from the New Orleans archives tell the story of **Eulalie Bayeron**, a free woman of color who bought, lost, and sold enslaved people between 1807 and 1827. Read the full analysis in our [blog post](/blog/2026-02-15-slave-trade-map/).

{{ gallery(images="ship-manifest.jpeg, eulalie-bayeron-blase-cenas.jpeg, marie-sale.jpeg", captions="Ship manifest — Francoise (1827), Petition of Eulalie Bayeron (1810), Sale of Marie (1817)") }}

Full transcriptions and translations are available on the [notes page](@/slave-trade-map/notes.md).

---

{{ footnote(id="1", content="David Eltis and David Richardson, eds., *Atlas of the Transatlantic Slave Trade* (New Haven: Yale University Press, 2010). The database is maintained at [slavevoyages.org](https://www.slavevoyages.org/).") }}

{{ footnote(id="2", content="Calculated from TASTDB: 10,665,568 estimated embarked vs. 9,202,995 estimated disembarked across 36,108 documented voyages.") }}

{{ footnote(id="3", content="TASTDB filtered for YEARAM 1800--1820: 5,455 voyages, 1,606,167 estimated embarked, 1,428,351 estimated disembarked.") }}
