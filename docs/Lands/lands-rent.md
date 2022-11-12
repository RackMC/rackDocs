---
id: lands-rent
title: Rent System
description: The renting and sell system
slug: lands-rent
---

## Rent Sign
#### Rent sign setup:
```
Lands
rent [area]
<interval> [max]
<cost>
```
#### Explanation
Parameters surrounded by [] are optional. Parameters surrounded by \<> are required.

- [area]: This parameter is only needed if the sign is placed outside the area.
- \<interval>: The tenant can extend their rental by \<interval>. Time units: d (days), h (hours) and m (minutes). Default is d. Example: 15d = 15 days
- \<max>: Is the max. duration of the rental.
- \<cost>: Defines the cost per \<interval>.
You can only set sub areas for rent. The default area can only be set for sale (= selling the whole land; more information below)

Example:
```
Lands
rent Test
7d 30d
1000
```
#### When the Sign has been placed
The rent sign is setup and players can now access it.

To rent this area, just click on the sign.
To add more time to your rental, just click again on the sign.

Tenants can use `/lands rent cancel` to cancel their rental while standing inside the area.

As the area owner you can either remove the sign or execute /lands rent remove while standing inside the area.

## Sell Sign
Sell signs can be placed in sub areas and in the default area (= selling the whole land)
#### Sell sign setup
```
Lands
sell [area]
<cost>
```
#### Explanation
Parameters surrounded by [] are optional. Parameters surrounded by \<> are required.

- [area]: This parameter is only needed if the sign is placed outside the area.
- \<cost>: Defines the total cost.

Example:
```
Lands
sell Test
1000
```
## Browse Listings
Use `/lands rentlist` to view all areas and lands that can be rented or bought. There you can also filter and sort these offers.
