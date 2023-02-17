Approach:
Find an api that would provide superhero fight statistics (Marvel had good general data, but not the type of data I wanted), I knew there had to be one out there on the internet somewhere, then use those stats and combine it with the "Save the Universe" project earlier in the cohort, so that 2 superheroes fight eachother rather than the earth spaceship versus some number of alien spaceships. Good amount of adjustments needed but also many of the core code was brought over. Once I had the data I wanted, I had to figure out how to display it, for that I based it off of the 'Movie' database lab. Then to get the data into the "fight" code I passed the data as a prop. 

Technologies used: 
HTML, CSS, JS, REACT, AJAX. 

Additiional things I'd like to tweak-- (2):
******SOLVED-->1. The "Superhero API" returns all matches for a search, sometimes there are multiple matches. For example if you search "Superman" what you get back is "Cyborg Superman" and "Superman". "Cyborg" is returned first, or is in [0] position. This also applies to other well-known superheroes like Batman, Flash, Thor, and Thing. The way I have the display component setup, is that it always takes the data from the first position. A work-around could be to put a conditional, looking at the data, and putting special cases for Superman, etc. Another work-around could be to search by character number that they provide, but then a person would need to look at a chart (go to another page) and get the superhero number, but that's too much work. What I tried as a workaround was to make a hyperlink on the page under a side header "Popular picks" that would automatically bring up the superhero clicked on. This had to use a different url though, and the json data that came back was formatted differently too, so the way the data was picked from it had to be changed as well. I tested it out, and my test version of clicking the "Superman" link was working. The problem though was whenever the page refreshed, it would be a blank page. I think this is something I can get to work though with more time. --> I put in a conditional that looks at the character id and returns the correct superhero!

2. There are times when you press the 'Fight' button, but seemingly nothing happens. I think that's because the same random event occurred. I added an animation on the button because I thought it looked better but also it better demonstrates that you've clicked it, showing that the game is still going. I'd like to tweak it with either more potential outcomes when the button is clicked or show more animation with the health/create a health bar. 

Netlify Live Link 
https://genuine-tartufo-997b8e.netlify.app/
