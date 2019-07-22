#cReact/Redux Technical challenge

## Data

The project contains a data set describing the location and metadata of boat ramps in Australia's Gold Coast. The data set can be found under ./data/boat_ramps.geojson.

It is a standard GeoJSON file, with each feature consisting of a geometry and properties, such as owner, material that the ramp is made of, etc.

The challenge
Your goal is to build a React and Redux-based UI to explore this data. The interface should have the following features:

A map capable of showing the position of all the boat ramps.
A 'construction material' sidebar that displays the number of ramps per material.
An 'area' sidebar that displays the number of ramps per area range. The ranges are [0, 50), [50, 200), and [200, 526)
Zooming in the map should filter the sidebar data to include only those ramps which are currently visible in the viewport.
When clicking on either a 'construction material' or 'area' in the sidebar, the map will filter to only show ramps for the current selection.
Technology choices
The use of React and Redux is required. Apart from that, you are completely free to choose libraries, frameworks and tools to best assist you in this challenge. The choice of the method of serving the data to the UI is up to you, feel free to import it from a static json file.

Bonus Points
Serve the geojson data from a RESTful API built in the technology of your choice rather than just importing from a static json file.

Once complete
When you've finished writing your code, please host it in a publicly accessible location (such as Github) for us to clone, along with a readme on how to run it.

## Plan

1. Simple UI with two areas (see UI.jpg)

- Filters:
  - ramp material (EARTH, CONCRETE)
  - area ( )
- Map - using mapbox

2. State (Redux store)
   material: oneOf [EARTH, BITUMEN, ...]
   are: {min, max}
   borderBox: [W, S, E, N] // W - stands for west border (longitude)

3. How it will work?

- Check if initial data are in `localStorage` for initial filters and if data is not outdated
  - if data in local storage and not outdated -> hydrate redux
  - otherwise, pull the data from the "server" and store in cache, store in `localStorage`, hydrate redux
- On filters change:
  - check if data for given filters combination is in cache
    - if yes, hydrate redudx,
    - if not, pull the data from the "server", cache it, hydrate redux

4. Server
   A function that takes filters as an argument and returns features array

5. Steps

- mock ui
- write tests
- write "server"
- wire up redux
- add responsive map
