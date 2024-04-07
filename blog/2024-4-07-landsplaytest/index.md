---
slug: landsplaytest
title: 2nd Lands Playtest
authors: [hyp3r7]
tags: [update, lands, website]
---

It's been a while, we are back!!

After nearly two years, RackMC is making a return!! For the past week or so, we have been running a small, "unofficial" playtest for the RackMC Lands server to get it updated and back to a playable state. Now that we feel as though we have, we would like to officially announce that we will be doing a second playtest for the Lands server! We want to invite everyone that has stuck with the project until now to join us in playing on and testing the Lands server for a final time. We plan to have the playtest up for the next month or two with a potential launch of the RackMC network this summer (no promises yet lol)

For those who have been playing in previous playtests, there will be some major changes made. The biggest is the testing of a new economy system. The currency of the Lands server will  be copper ingots. You can use the /shop command to convert your currency from physical to digital, or vice versa. The idea is there is a limited number of copper in circulation, so while you can still earn it through jobs, once the server account has been depleted, you will have to mine copper by hand. The server account will then get copper back through the upkeep of lands and the cycle repeats. While we are not 100% set on using this for the final release of lands, it is something we thing is unique and interesting. Therefore we want to hear your feedback! Whether you think it is awesome or makes gameplay more difficult or confusing, just let us know on our [discord](discord.rackmc.net)

For ease of access, we will also be listing the major changes to the server here, as well as all the useful commands you should need.

### Lands
While this is not new, it is a core gameplay feature. If you would like to view all the commands, go to [our documentation](https://rackmc.net/docs/Lands), or even the official [lands documentation](https://github.com/Angeschossen/Lands/wiki). This section is to server purely as basic tips.
- With our new economy, you still start out with $2500, which is enough to start a land with one chunk and sustain it for a week. The new upkeep per chunk is $250 per day and the new cost per chunk $1000 plus an additional $500 for each chunk after
- MAKE SURE YOU DEPOSIT MONEY INTO YOUR LAND'S BANK!!! (/lands deposit `amount`). Failure to do so will cause your land to be unclaimed and your builds and possessions to be prone to griefing and stealing.
- If you would like to make your land accessible for anyone to do /land spawn to visit, you can do so by doing the following:
    1. /lands 
    2. Select roles
    3. Select visitor 
    4. Select action flags 
    5. Enabling teleport to spawn

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

### Copper Economy
This is by far the biggest change. So big in fact, we aren't sure if it will work the way we want, which is why we are testing it here. If you have any issues, confusion, or suggestions, let us know by opening a ticket in our [discord](discord.rackmc.net). 
The way it works is there is a limited amount of money (copper) in circulation. The money is collected through lands upkeep, at $250 per chunk per day. What this all means is that while you can still earn money from the jobs system that we had previously, once there is no more money to pay out, you will have to mine for more copper. To prevent players from just draining the server balance, there is a cap based on your total jobs level. This is all a work in progress and isn't set in stone, so as previously mentioned, your feedback is greatly appreciated so we can tweak this system to make it work just right.
- The only command you should need is actually /shop, which will open the new copper to $ exchange

### Removal of /shop
Due to the fact that we want community to reign supreme, we have decided to remove the /shop. We want chest shops to be the number 1 way people buy and sell items, and the /shop was just to cheap and easy compared to player run chest shops. In place of /shop, we will plan to set up a market area in the next couple of days for players to build shops in a localized area to sell their goods to make it easier to access. We will still have the auction house with /ah for specialty items to be sold.

### Bluemaps
This one isn't really new, but we just wanted to remind everyone that we have a [web-based map](lands.rackmc.net) of the entire explored server for everyone to view

### RTP
Another one that isn't new, but we just wanted to lay out how it works for anyone who is new.
- /rtp has a range of of up to 5000 blocks and a cooldown of 5 minutes.

### Tags
We have switched from the role play tags that we had previously to tags that will be availible network-wide. They are still a work in progress, but for now, we have a tag from each of the previous playtest. If you have participated in the playtest over the past week, the 1st lands playtest, or the factions playtest, you will have a tag to commemorate it. If you participate in the playtest now until it ends, you will get the tag after it is complete.

### Elevator
New with this playtest is elevators. You can now create a structure that allows you to go between different floors of your build seamlessly.
- To create an elevator, all you have to do is place an iron pressure plate on top of a quartz block.

### And More!!!