# vueApartments
Apartments rental mockup - a simple static HTML page fluffed up with no-build Vue. 
Check it out at [my website](https://dorianm.com/demos/vue-apartments/).

## Background and purpose
I was interested to see how easy it would be to integrate Vue without build tools with static html page. I had this apartments mockup lying around and decided to quickly fluff it up with standard filtering/displaying state -- and it was extremely straightforward!
Features mutable list with filtering and interactive preview, fully responsive thanks to the awesomeness of css grid.

## How it's made
Like the good ol' days - html, css and js written from scratch, imported vue.js is doing all the hard work.

## Concluding remarks
The implementation of vue features straight into existing html was surprisingly easy and flexible. Although the performance on older systems might need to be observed carefully, I sincerely believe that for projects of this size using vue is superior to building your own display system with jquery+plugins. And thats full vue im using here, I have yet to try petite-vue!
One thing I'd consider for production would be the custom list transition on filter changes (detect  changes, @given time treshold smoothly hide list, compute contents, smoothly rescale container, smoothly display list). It would, however, require plugins or a dive into reactivity system and thus would defeat the purpose of this little demo.
Stock photos by Curtis Adams, Lina Kivaka and Larissa Farber courtesy of Pexels.
Code licensed MIT.