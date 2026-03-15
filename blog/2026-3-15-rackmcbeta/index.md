---
slug: rackmcbeta
title: RackMC Open Beta
authors: [hyp3r7]
tags: [update, website]
---

We've said this a couple of times before, but now we are back for real! It's been another 2 years since the last post and playtest, but we've decided that enough is enough. We will be releasing RackMC as an Open Beta! What does this mean for RackMC? We will be launching our server network with the Lands server and the Creative server, as well as events from time to time. These main two server will be accessible as close to 24/7 as possible (There may be downtime due to updates or bug fixes). We still do not have an official launch date and probably won't for some time, but we wanted to get something out after all of these years.

**RackMC will be launching as an Open Beta starting March 16, 2026 and will stay open until we officially launch.** We will be running a playtest on the Lands and Creative server starting the 16th as well.

Because this is an early access server, there will be bugs, missing features, and potentially game breaking issues. The best thing to do is to report any bugs to staff members via [discord](https://discord.rackmc.net) and we will get them fixed as soon as possible. We also do not plan to do any form of wipe for both Lands and Creative until the official launch of the network (This is subject to change and will be announced ahead of time if it comes to it).

Below, you can find a list of the core features of the Lands server as of right now. If you have any features you would like to suggest, let us know in the [discord](https://discord.rackmc.net)

### Lands
While this is not new, it is a core gameplay feature. If you would like to view all the commands, go to [our documentation](https://rackmc.net/docs/Lands), or even the official [lands documentation](https://github.com/Angeschossen/Lands/wiki). This section is to server purely as basic tips.
- With our new economy, you start out with $0, and will have to mine or sell items to other players. The first claimed chunk is free. The new upkeep per chunk is $25 per week and the new cost per chunk $500 plus an additional $500 for each chunk after
- MAKE SURE YOU DEPOSIT MONEY INTO YOUR LAND'S BANK!!! (/lands deposit `amount`). Failure to do so will cause your land to be unclaimed and your builds and possessions to be prone to griefing and stealing.
- If you would like to make your land accessible for anyone to do /land spawn to visit, you can do so by doing the following:
    1. /lands 
    2. Select roles
    3. Select visitor 
    4. Select action flags 
    5. Enabling teleport to spawn

### Raw Copper Economy
The way this currently works is the raw copper item is what is used to buy, sell, and trade with players, as well as purchase and upkeep lands. The idea is you mine for raw copper and then you can sell it using a shop at spawn to get "digital copper", which is then used for lands purchases, chest shops, the auction house, and more. 

As the development goes on, we plan to also all copper collected from land purchases and upkeep to go into a server account that will be redistributed back to the players via jobs. Unfortunately this is not how it will work in the first implementation.

If you have any issues, confusion, or suggestions, let us know by opening a ticket in our [discord](https://discord.rackmc.net). 

### Custom Image Maps
We have added the ability for players to create custom map art from a url of their choice to display. You can even use animated gifs. Any inappropriate images will be deleted and may result in a ban.
- Each player only gets 5 custom image maps at a time
- You need to have the blank maps and the item frames in order to create them
- In order to create an image map, you use the following command:
    - /if create `name of image` `url` `number of maps wide` `number of maps high` combined
    - If you were to do 2 wide and 2 high, you will need a 2 by 2 grid of item frames.
- If you want to reuse a map you create previously, you do
    - /if get `name` combined
- If you would like to delete a image to create a new one, you do
    - /if delete `name`
- To place a map into the item frames, you crouch and right click

### Item Frame Visibility Toggle
With the custom image maps, we have added the ability to toggle the visibility of the item frames.
- To enter visiblity toggle mode, do
    - /itf togglemode visibility 
    - Note: you will need to crouch and right click to toggle the visibility. Once you are done, you will need to run the command again.

### Bluemaps
This one isn't really new, but we just wanted to remind everyone that we have a [web-based map](https://lands.rackmc.net) of the entire explored server for everyone to view

### RTP
Another one that isn't new, but we just wanted to lay out how it works for anyone who is new.
- /rtp has a range of of up to 5000 blocks and a cooldown of 5 minutes.

### Elevator
New with this playtest is elevators. You can now create a structure that allows you to go between different floors of your build seamlessly.
- To create an elevator, all you have to do is place an iron pressure plate on top of a quartz block.

### Tags
If you have previously participated in any RackMC playtest, you will already have the *RACK* tag. You can access this using `/tags`. For anyone who joins the server from March 16th, 2026 through our launch date (TBD) will also recieve the *BETA* tag.

### And More!!!
