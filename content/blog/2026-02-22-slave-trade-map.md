+++
title = "Mapping the Transatlantic Slave Trade"
description = "An interactive flow map of the transatlantic and inter-American slave trade"
date = 2026-02-22
updated = 2026-02-22
template = "blog/page.html"
draft = false

[taxonomies]
authors = ["Clinton Bowen"]

[extra]
lead = "An enriched presentation of the Transatlantic Slave Trade"
toc = true
top = true
+++

Over a number of decades, David Eltis et al. have made efforts to build a database of the voyages in the Transatlantic slave trade. About the [database](https://www.slavevoyages.org/), David has stated that it "and its successors never will record every voyage that set out to obtain slaves." [^david1] The database remains an invaluable resource for conveying the scale of the trade, and I wanted to present it in a way that would convey the timeline of trade to specific regions in the Americas and the volume of trade to those regions from specific parts of Africa.

This idea came about when I looked at this map.

{{ image_with_caption(url="blog/09.jpg", width=800, caption='Volume and Direction of the Trans-Atlantic Slave Trade from All Africa to All American Regions — Map 9 from David Eltis and David Richardson, Atlas of the Transatlantic Slave Trade (Yale University Press, 2010).', credit="Eltis & Richardson / Yale University Press") }}

The "Volume and Direction of the Trans-Atlantic Slave Trade" map in Eltis and Richardson's *Atlas of the Transatlantic Slave Trade* is quite encompassing, conveying the numbers of the enslaved from various origins in Africa to destinations in the Americas. But a fixed map can only show aggregate patterns. It can't answer granular questions like: how many enslaved people from the Senegambia region went to Cuba? What I've created below is a flow visualization—a different way of exploring the same data that lets you trace specific routes and examine regional dynamics over time.

{{ slave_trade_map() }}

In the bottom table you are able to explore different voyages in the database organized by embarkment region. The lines across the Atlantic do not represent the actual routes taken by ships; they are a flow visualization meant to convey origin, destination, and volume. I have no knowledge of the wind patterns that maritime vessels employed in these oceans.

I explicitly account for the deaths in each voyage—they shouldn't be forgotten.

What you can also learn is the timespan of trade for a specific region or port in the Americas. It's a useful data point for understanding colonization activity in particular regions during the 16th through 19th centuries. The timeline may also reflect the abolition of trade in different regions.  Howeve, the database might not include smuggling and doesn't account for overland trade.

To emphasize David's words: this is not comprehensive.  Two such examples are: (1) the Schooner Sémillante manifest and (2) [Pierre Lafitte](https://en.wikipedia.org/wiki/Pierre_Lafitte)'s smuggling of enslaved people.

{{ image_with_caption(url="blog/ship-manifest.jpeg", width=800, caption="Manifest of Slaves on board the Schooner Sémillante, bound from New Orleans for the Port of Bay Saint Louis. District of Mississippi, May 29, 1827.", credit="New Orleans Notarial Archives") }}

[^david1] Eltis, David. "The volume and structure of the transatlantic slave trade: A reassessment." The William and Mary Quarterly 58.1 (2001): 17-46.