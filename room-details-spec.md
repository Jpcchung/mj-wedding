# Room Details: Complete Information Spec

**Wedding:** Maggie & Jonathan · July 15, 2027 · AYANA SKY, Jimbaran
**Group hotel:** RIMBA by AYANA
**Companion doc:** `room-blocks.md` (contract terms, agent contacts, open items)
**Last updated:** August 20, 2026

This doc lists every data point needed to turn "we have a room block" into something a guest can actually act on. Three parts: what to get from AYANA, what to publish to guests, and what to collect from guests. Nothing here is confirmed yet, it is the shopping list.

---

## Part 1: What to get from AYANA, per room category

Ask for this as a table, one row per category. Anything missing becomes a guest email later.

### Room facts

| Field | Why it matters |
|---|---|
| Category name, exactly as AYANA lists it | Guests will cross-check against ayana.com. Mismatched names cause "is this the same room?" emails. |
| Size in sqm | Sets expectations. Also justifies the price gap between tiers. |
| Bed configuration options (king / twin / king + twin) | The single most-asked question. Couples need king, friends sharing need twin. Must be requestable at booking. |
| Maximum occupancy, adults and children stated separately | Determines who can share and therefore how many rooms you need. |
| View / location on property | The only reason to pay up a tier at RIMBA. |
| Number of rooms of this category available to block for our dates | Cannot size the block without it. A category with 3 rooms is not worth publishing. |
| Bathroom setup (bath, shower, both) | Matters more than people admit for a 5 night stay. |
| Balcony or terrace, yes or no | |

### Money

| Field | Why it matters |
|---|---|
| Nightly rate | |
| Currency, and whether the rate is fixed in that currency | IDR vs USD matters over 11 months of FX movement. Get it fixed if possible. |
| **Whether the rate is net or "++"** | Indonesian hotels commonly quote plus tax and plus service, which can add roughly 21%. Confirm the exact percentages and whether the quoted number already includes them. This is the most common source of sticker shock. |
| Peak / high season surcharge for July | July is peak in Bali. Confirm the group rate already accounts for it and does not add a surcharge later. |
| Which dates the rate is valid for | Does it cover Jul 13 to 19, or only the wedding-adjacent nights? |
| Extra bed cost per night, and which categories allow one | |
| Extra adult cost per night beyond double occupancy | |
| Child rates by age band, and the age at which a child pays adult | |
| Minimum length of stay for block rates | If AYANA requires 3 nights minimum, that changes who can come at all. |
| Whether the rate is commissionable to the agents | Affects whether the agents' incentives match yours. |

### Inclusions

| Field | Why it matters |
|---|---|
| Breakfast: included or not, and for how many people per room | Big real-world value. A third occupant often is not covered. |
| WiFi | Expedia lists free in-room WiFi at 100+ Mbps. Confirm it applies to the block rate. |
| Shuttle between RIMBA and AYANA Resort / AYANA SKY | The wedding site already promises a complimentary shuttle. Confirm frequency and hours, especially late night after the reception. |
| Access to AYANA estate facilities (the 14 pools, Kubu Beach, waterslide, Rock Bar) | The site says every AYANA facility is included. Get this in writing, it is a major selling point. |
| Rock Bar access and whether a reservation is needed | The welcome party is there. Guests will want to go on other nights too. |
| Parking | Free self and valet parking per Expedia. |
| Anything AYANA will throw in for a group this size | Welcome drink, room upgrade for the couple, a hospitality suite, late checkout on Jul 16. Always ask. |

### Policies

| Field | Why it matters |
|---|---|
| Check-in and check-out times | Expedia lists 3:00 p.m. check-in, before noon check-out. Confirm, then publish. |
| Early check-in / late check-out cost and availability | Many guests land on red-eyes. This will come up constantly. |
| **Guest-level cancellation terms** | Separate from our 7 day / 25% block terms. See the warning below. |
| Deposit required from each guest, if guests book directly | |
| Payment methods accepted | |
| Name change policy | Guests swap plus-ones. Free name changes are worth asking for. |
| Airport transfer cost from DPS, per vehicle and per person | 12 km, 20 to 30 min. Guests will ask before they ask anything else. |
| Accessibility: step-free rooms, lifts, distance from lobby | RIMBA is a large hillside property. Ask specifically for older guests. |
| Crib availability and cost | Expedia says free cribs. |
| Whether AYANA will hold a rooming list and take guest payments directly | Determines whether this is one email or a hundred. See `room-blocks.md` item F. |

### The cancellation distinction, read this twice

Our block contract (7 days before check-in, max 25% of rooms) is **our** exposure, not the guest's. If a guest cancels inside 7 days, or if more than a quarter of the block drops, **we** pay. So decide deliberately which terms to pass through to guests:

- **Guests book and pay AYANA directly:** they carry their own cancellation risk and you carry almost none. Strongly preferred.
- **You pay and collect from guests:** you carry all of it. If this is the only option, publish a guest book-by and cancel-by date that is *earlier and stricter* than AYANA's, so you have time to reshuffle rooms before you are locked in.

---

## Part 2: What to publish to guests

The "Stay" section of the site currently says group rates are coming and to hold off booking. Replace it with this once terms are signed.

**Hotel identity**

- RIMBA by AYANA, Jimbaran, Bali, on the AYANA estate
- One or two photos, plus a link to the official page
- One line on why this hotel: "where we're staying, connected to the venue by shuttle, full AYANA estate access"
- Distance and travel time to AYANA SKY, and to DPS airport

**The offer**

- Room categories in the block, with an all-in nightly price (tax and service included, and a USD equivalent if the rate is in IDR)
- Exactly what the price includes, breakfast for how many, shuttle, facilities
- Which nights the block covers: core Jul 14 to 16, edges Jul 13 and Jul 17 to 19
- Maximum occupancy per category, and extra bed cost
- Bed configuration options and how to request one

**The action**

- **Book-by date**, stated as AYANA's release date rather than yours. Guests respect the hotel's deadline. See `room-blocks.md` item G.
- **How to book**, in one step: a booking link, a group code, or a named email address. Not a multi-step process.
- What happens after they book: confirmation from whom, and when
- Cancellation terms that apply to *them*, in plain language with a date
- Deposit amount, if any

**Practical answers before they ask**

- Check-in 3:00 p.m., check-out noon (confirm), plus early / late options
- Airport transfer: how to book, what it costs, or that AYANA arranges it
- Wedding-day shuttle times, including the ride home after the reception
- Whether kids are welcome, crib and extra bed availability
- A named contact for room problems, ideally an agent, not you and Maggie

**Alternatives**

- AYANA Resort and Segara for guests who want oceanfront and are booking themselves, with a clear note that those are not in the block and not at the group rate
- A cheaper Jimbaran option if you want one, though the site's current all-together-on-the-estate framing argues against it

---

## Part 3: What to collect from guests

Whether via form or by email, these are the fields. Missing any of them creates a round trip per guest.

| Field | Notes |
|---|---|
| Full name of every occupant, exactly as on passport | Hotels match ID at check-in. Nicknames cause problems. |
| Email and WhatsApp number | WhatsApp is how everything works in Bali. |
| Arrival date and departure date | Not "number of nights." Dates. |
| Room category, first and second choice | Always ask for a second choice, inventory shifts. |
| Bed configuration: one king or two twins | |
| Number of adults | |
| Number of children, with ages | Ages drive rates and extra beds. |
| Who they are sharing with, if splitting a room | Lets you consolidate and shrink the block. |
| Flight number and arrival time | Only needed if you are coordinating transfers. |
| Airport transfer needed, yes or no | |
| Accessibility needs | Step-free access, proximity to lobby, lift access. |
| Dietary restrictions | Collect once here, reuse for the welcome party and reception. |
| Special occasion during the trip | Honeymoon, anniversary, birthday. Free upgrades sometimes follow. |
| Who is paying, them or you | Keeps your liability tracked against the 25% cap. |
| Are they joining the Jul 17 to 19 Ubud/Canggu trip | Drives the tail nights of the block. |

---

## Part 4: RIMBA inventory, from public sources

Unconfirmed, from ayana.com and Expedia as of August 2026. Use this to sanity-check whatever rate sheet comes back, not as fact.

| Category | Size | Beds | Max occupancy | Notes |
|---|---|---|---|---|
| One Bedroom | 42 to 53 sqm | King or twin | 2 to 3 | Variants: Pool Access, Jimbaran Bay View, Resort View, Forest View, and the Wana series (Pool Access, Ocean View, Resort View, Garden View) |
| One Bedroom Suite | 82 sqm | King, or king + twin | 3 | Variants: Pool Access, Resort View, Jimbaran Bay View |
| Two Bedroom | 84 to 108 sqm | King + twin | 4 to 6 | Variants: Wana Ocean View, Wana Resort View, Resort View |
| Two Bedroom Suite | 124 sqm | King + twin | 6 | Resort View |

Other public data points to verify: 403 rooms total on property, 14 outdoor pools plus a waterslide, private beach, free self and valet parking, free WiFi at 100+ Mbps, buffet breakfast listed as a surcharge on some channels, free cribs, extra beds around IDR 986,150 per night, check-in from 3:00 p.m., check-out before noon.

**Two things to flag with the agents:**

1. Breakfast shows as a **surcharge** on public rates. Get it explicitly included in the group rate, it is one of the easiest concessions to win and one of the most visible to guests.
2. The **Two Bedroom** categories sleep 4 to 6. If several friend groups share these, you need far fewer rooms in the block, which directly reduces your 25% cancellation exposure. Ask what the per-person economics look like versus separate One Bedrooms before you decide the room count.

---

## Part 5: Ask-in-one-message checklist

Combine with the message already drafted in `room-blocks.md` so the agents get a single request rather than five.

- [ ] Rate sheet by category for Jul 13 to 19, 2027, with block inventory per category
- [ ] Net or ++, and the exact tax and service percentages
- [ ] Currency, and whether the rate is fixed
- [ ] Breakfast: included, and for how many per room
- [ ] Extra bed and extra adult costs, child age bands
- [ ] Minimum length of stay, if any
- [ ] Bed configuration options and how guests request one
- [ ] Confirmed check-in and check-out times, early / late options and cost
- [ ] Shuttle schedule to AYANA SKY, including post-reception
- [ ] Written confirmation of full AYANA estate facility access
- [ ] Airport transfer cost from DPS
- [ ] Can guests book and pay AYANA directly against the block, with a code or link
- [ ] Guest-level cancellation terms, as distinct from our block terms
- [ ] Block release date for unclaimed rooms
- [ ] Rate hold expiry, how long before we must confirm
- [ ] Name change policy
- [ ] Group concessions available: upgrades, welcome amenity, late checkout Jul 16
- [ ] Accessible room availability

---

## Change log

| Date | Change |
|---|---|
| Aug 20, 2026 | File created. Public RIMBA inventory researched and flagged as unconfirmed. |
