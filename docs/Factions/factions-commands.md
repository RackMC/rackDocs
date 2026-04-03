---
id: factions-commands
title: Commands
description: Factions Commands!
slug: factions-commands
---

## Factions
`/f announce <message>`
Description: Send an announcement to all members, including those offline.

`/f ban <player>`
Description: Ban a player.

`/f chat`
Description: Switch between chat types.

`/f chat ally/coleader/faction/mod/normal/public/truce`
Description: Change chat to the named chat type.

`/f claim`
Description: Claim the chunk you're standing in.

`/f claim --auto`
Description: Toggle auto-claiming.

`/f claim --radius [radius]`
Description: Claim a radius around your position.

`/f claim --fill --fill-limit [limit]`
Description: Claim inside a claimed shape.

`/f claim --faction [faction]`
Description: Claim for another faction, if allowed.

`/f clear bans`
Description: Unban all from your faction.

`/f clear claims`
Description: Unclaim all territory.

`/f clear invites`
Description: Revoke all invites.

`/f clear warps`
Description: Delete all warps.

`/f coords`
Description: Broadcast your current position to your faction.

`/f create <tag>`
Description: Create a new faction with the given tag.

`/f disband`
Description: Disbands your faction.

`/f grace`
Description: Checks the status of grace.

`/f home`
Description: Goes to your faction home.

`/f home --faction [faction]`
Description: Goes to another faction's home, if you have permission.

`/f invite <player>`
Description: Invites a player to join your faction.

`/f invite <player> --delete`
Description: Revokes an invite.

`/f join <faction>`
Description: Joins the named faction, if the faction is open or you're invited.

`/f kick [target]`
Description: Kicks a player.

`/f leave`
Description: Leaves your faction.

`/f link`
Description: Gets the link your faction has set.

`/f list`
Description: Lists factions.

`/f list factions`
Description: Lists factions.

`/f list banlist`
Description: Lists bans.

`/f list claims`
Description: Lists your faction's claims.

`/f list invites`
Description: Lists your faction's invites.

`/f map`
Description: Shows the map.

`/f map --auto-on`
Description: Turns on auto-map display when crossing chunk boundaries.

`/f map --auto-off`
Description: Turns off auto-map display.

`/f map --set-height [height]`
Description: Sets the map height.

`/f money balance`
Description: Gets your faction's balance.

`/f money deposit <amount>`
Description: Deposits money to your faction.

`/f money send <amount> to faction <faction>`
Description: Sends faction money to a faction.

`/f money send <amount> to player <player>`
Description: Sends faction money to a player.

`/f money withdraw <amount>`
Description: Withdraws money from your faction.

`/f near`
Description: Shows nearby faction members.

`/f power`
Description: Gets your power.

`/f power [player]`
Description: Gets a player's power.

`/f relation <faction> ally/enemy/neutral/truce`
Description: Sets your relation with the given faction.

`/f role <member> admin/coleader/moderator/member/recruit`
Description: Sets a member's role.

`/f role <member> promote`
Description: Promotes a member one role higher.

`/f role <member> demote`
Description: Demotes a member one role lower.

`/f set defaultrole <role>`
Description: Sets the role for new joining member.

`/f set description <desc>`
Description: Sets the faction description, for the `show` command.

`/f set explosions true/false`
Description: Toggles explosions (if in a peaceful faction).

`/f set home`
Description: Sets the faction home.

`/f set home --delete`
Description: Deletes the faction home entirely.

`/f set link <url>`
Description: Sets the faction link for the link command.

`/f set open [state]`
Description: Sets if the faction is open to invite-less joins.

`/f set perms`
Description: Control permissions in your faction.

`/f set tag <tag>`
Description: Changes the faction's tag.

`/f set title <player> [title]`
Description: Sets the title for a player (or deletes, if you provide no title).

`/f set warp <name>`
Description: Creates a warp on your position with the given name.

`/f set warp <name> --password [password]`
Description: Creates a warp on your position with the given name and password.

`/f set warp <name> --delete`
Description: Deletes the named warp.

`/f set warp-property <name> --password [password]`
Description: Sets a new password for the named warp.

`/f set warp-property <name> --remove-password`
Description: Deletes the named warp's password.

`/f shield`
Description: Checks your faction's shield status.

`/f shield activate`
Description: Activates your faction's shield.

`/f show`
Description: Shows your faction's info.

`/f show <faction>`
Description: Shows your status.

`/f stuck`
Description: Helps you teleport to safety when in a place you cannot break or place blocks.

`/f tnt`
Description: Gets the faction's TNT bank size.

`/f tnt deposit [amount]`
Description: Deposits TNT from your inventory into the faction bank.

`/f tnt fill <radius> <amount>`
Description: Fills a quantity of TNT from your bank into all dispensers within the radius.

`/f tnt siphon <radius> <amount>`
Description: Siphons a quantity of TNT from nearby dispensers into your TNT bank.

`/f tnt withdraw <amount>`
Description: Withdraws TNT from your bank into your inventory.

`/f toggle chat ally`
Description: Toggles entirely hiding ally chats, in case an ally is getting too chatty.

`/f toggle chat truce`
Description: Toggles entirely hiding truce chats, in case a truced faction is getting too chatty.

`/f toggle logins`
Description: Toggles being notified when a member joins or leaves the server.

`/f toggle scoreboard`
Description: Toggles the scoreboard being visible.

`/f toggle seechunk`
Description: Toggles particle effects at chunk corners for visibility of claims.

`/f top`
Description: Rudimentary /f top.

`/f unban <player>`
Description: Unbans a player.

`/f unclaim`
Description: Unclaims the chunk you're standing in (see claim command for other flags).

`/f unclaim --all-territory`
Description: Unclaims every single chunk you own.

`/f upgrades`
Description: Opens the upgrades info, including descriptions, status, and purchasing.

`/f warp <warp>`
Description: Teleports you to a named warp.

`/f warp <warp> <password>`
Description: Teleports you to a named warp with a password.

`/f zone create <zone>`
Description: Creates a zone.

`/f zone claim <zone>`
Description: Marks an already-owned chunk as belonging to the named claim.

`/f zone delete <zone>`
Description: Deletes the named zone.

`/f zone set <zone> greeting <greeting>`
Description: Sets the greeting for entering zone territory.

`/f zone set <zone> name <name>`
Description: Sets a new name for the named zone.

`/f zone set <zone> perms`
Description: Controls permissions for the named zone.

## Other

### Auction House
`/ah`
Description: Open the auction house.

`/ah menu`
Description: Open the auction house in menu mode.

`/ah search <filter>`
Description: View items matching search filter.

`/ah help`
Description: Show help for all the commands.

`/ah sell <price> [count]`
Description: Sell the item you are holding in hand.

`/ah selling`
Description: View the items you are selling.

`/ah sold`
Description: View the items you have sold recently.

`/ah expired`
Description: View your expired items to return.

`/ah cancel`
Description: Cancel all your auctions.

`/ah return`
Description: Return all your cancelled/expired items.

### BetterRTP
`/rtp`
Description: Randomly teleport between 1k and 5k blocks from spawn.

### Bounties
`/addbounty <player> <bounty>`
Description: Sets a bounty on a player.

`/bounties`
Description: Opens the bounties GUI.

`/hunters`
Description: Opens the hunter leaderboard.

`/bounties quotes`
Description: Lists all owned death quotes.

`/bounties titles`
Description: Lists all owned hunter titles.

`/bounties help`
Description: Shows the help page.

### Kits
`/kit`
Description: Open the Kits GUI.

`/kit list`
Description: Shows all kits.

`/kit <kit>`
Description: Claims a specific kit.

`/kit preview <kit>`
Description: Previews a kit.

### Shop
`/shop`
Description: Open the main shop menu.

`/shop check`
Description: Get information of the item held in hand.

`/shop [shop name]`
Description: Directly open the specified shop.

`/sell hand [quantity]`
Description: Sell the item held in your hand.

`/sell handall`
Description: Sells all items inventory which are the same as the one being held in your hand.

`/sell all`
Description: Sells all items from your inventory.
