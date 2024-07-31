<!-- src/components/Map.vue -->
<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script>
import { BASEMAP } from '@deck.gl/carto'
import { Deck } from '@deck.gl/core'
import { GeoJsonLayer } from '@deck.gl/layers'
import maplibregl from 'maplibre-gl'
import { onMounted, ref } from 'vue'

export default {
  name: 'Map',
  setup() {
    const mapContainer = ref(null)
    const INITIAL_VIEW_STATE = {
      longitude: -122.45,
      latitude: 37.8,
      zoom: 10,
      pitch: 0,
      bearing: 0
    }
    const mapStyle = BASEMAP.POSITRON

    onMounted(() => {
      // Initialize the maplibre map
      const map = new maplibregl.Map({
        container: mapContainer.value,
        style: mapStyle,
        center: [INITIAL_VIEW_STATE.longitude, INITIAL_VIEW_STATE.latitude],
        zoom: INITIAL_VIEW_STATE.zoom
      })

      // Initialize the Deck instance
      const deck = new Deck({
        initialViewState: INITIAL_VIEW_STATE,
        controller: true,
        layers: [
          new GeoJsonLayer({
            id: 'geojson-layer',
            data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json',
            filled: true,
            pointRadiusMinPixels: 2,
            opacity: 0.4,
            getRadius: 200,
            getFillColor: [255, 0, 0]
          })
        ],
        getTooltip: ({ object }) => object && `Coordinates: ${object.geometry.coordinates}`,
        onViewStateChange: ({ viewState }) => {
          map.jumpTo({
            center: [viewState.longitude, viewState.latitude],
            zoom: viewState.zoom,
            bearing: viewState.bearing,
            pitch: viewState.pitch
          })
        }
      })

      // Sync the map with Deck.gl view state
      map.on('move', () => {
        const { lng, lat } = map.getCenter()
        deck.setProps({
          viewState: {
            longitude: lng,
            latitude: lat,
            zoom: map.getZoom(),
            bearing: map.getBearing(),
            pitch: map.getPitch()
          }
        })
      })
    })

    return {
      mapContainer
    }
  }
}
</script>

<style>
.map-container {
  position: relative;
  width: 100%;
  height: 100vh;
}
</style>
