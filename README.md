# React/Redux Technical challenge

To run the project:

```
git clone git@github.com:Maciej001/boat-ramps.git
cd boat-ramps
```

Install dependencies either using npm `npm install` or `yarn`

To run the project `npm start` or `yarn start`

Here you will find:

- Project - what needs to be done
- Plan - that worked to the cerain extent
- How it works

## Project

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
  - material one of ALL, EARTH, CONCRETE, ...
  - area one of ALL, SMALL, MEDIUM, LARGE
- Map - using mapbox

2. State (Redux store)
   cache: [ { filters, data }, {filters, data }]
   material: oneOf [EARTH, BITUMEN, ...]
   area: {min, max}
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

## How it works

To display the information on the map our app needs to now: - the ramp's material - size of the ramp - the box - geolocation data in following format - bottom-left corner - upper-right corner
in the form of an array [left, bottom], [right, top]]

1. On the first load, the app loads all the information and stores them in `localStorage`. That helps to avoid the roundtrip to the server on initial load.
2. Data for every filter's combination is cached in redux store: key - filter, value - data
3. Filter has three properties: material, area, box
4. If the filter is recogniesed (it exists in cache), we are getting data immediately - no map flickerring
5. In all the other cases we have to ping the server and then filter and cash data
6. Filtering of data happens when the new set of data has been fetched (`fetchData`) by passing of a combination of filtering functions to `getFiltersPipe` in `/dashboard/cache/redux/actionCreators`

## The onZoom function is not implemented yet.

```

```
