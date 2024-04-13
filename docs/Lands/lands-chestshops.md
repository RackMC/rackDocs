---
id: lands-chestshops
title: Chest Shops
description: Chest Shops
slug: lands-chestshops
---

# Chest Shop Basics
Chest Shops are the main way that items are bought, sold, and traded on the Lands server. The best way find chest shops on the server is to do `/warp market` or by going to public lands. You can create chest shops of your own if you want to buy or sell items for a price.

# Chest Shop Set Up
1. Shift right click on the chest with a sign to place it
2. On the sign, write the following
```

<amount>
B <buy price> : <sell price> S
?
```
3. You should skip the first line.
4. The second line should have the amount to be bought or sold for the price you set
5. The third line is where you set the prices. The price following B is how much players will pay to buy your items. The price before the S is how much you players will be paid if they sell you the item. If you want to do only one or the other, you can
6. The ? will allow the shop to autofill the item with the item in the chest or by right clicking the sign after creating it
7. Example for a shop allowing players to buy 32 items for $100
```

32
B 100
?
```
