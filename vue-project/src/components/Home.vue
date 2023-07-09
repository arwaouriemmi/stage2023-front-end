<template>
  <body>
    <NavBar />

    <div style="position: relative; width: 100vw; height: 600px;">
      <l-map ref="map" v-model:zoom="zoom" :center="center" @click="handleMapClick" @load="onMapLoaded">
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    ></l-tile-layer>
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="overlay"
          name="Streets"
        ></l-tile-layer>
        <l-geo-json :geojson="tunisiaGeojson"></l-geo-json>
        <l-marker v-if="markerPosition" :lat-lng="markerPosition" @dragend="handleMarkerDragend" :draggable="!showForm"></l-marker>
      </l-map>
      <div v-if="showForm" class="overlay-form" >
        <div class="form-container">
        <form @submit="submitObservation">
          <div class="card bg-danger text-light" :style="{ borderRadius: '1rem' }">
            <div class="card-body text-center">
              <div>
                <h5 class="fw-bold mb-2 text-uppercase">Observation</h5>
                <div class="form-outline form-light mb-4">
          <label class="form-label" for="Latitude"> Latitude:</label>
          <input id="Latitude"  class="form-control form-control-lg" type="text" :value="currentLatitude" required
    
    ref="latitudeInput" disabled>
        </div>
        <div class="form-outline form-light mb-4">
          <label class="form-label" for="Longitude"> Longitude:</label>
          <input id="Longitude"  class="form-control form-control-lg" type="text" :value="currentLongitude" required
    
    ref="longitudeInput" disabled>
        </div>
          <div class="form-outline form-light mb-4">
          <label class="form-label" for="comment"> Comment:</label>
          <textarea  class="form-control form-control-lg" id="comment"  required
    @blur="validateComment"
    ref="commentInput"></textarea>
    <p v-if="commentError" class="error-message">
    <font-awesome-icon icon="exclamation-circle" />
    {{ commentError }}
  </p>
        </div>
        <div class="form-outline form-light mb-4">
          <label class="form-label" for="images">Images:</label>
          <input  class="form-control form-control-lg" type="file" id="images" 
   
    ref="imagesInput"  multiple>
        </div>
          <button class="btn btn-outline-light"  type="submit" :disabled="!isCommentValid">Submit Observation</button>
        </div>
      </div>
    </div>
        </form>
        
      </div>
    </div>
    </div>
  </body>
</template>

<script lang="ts">
  import { library } from "@fortawesome/fontawesome-svg-core";
   import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
   import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
   

   library.add(faExclamationCircle)
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LGeoJson, LMarker } from "@vue-leaflet/vue-leaflet";
import NavBar from './NavBar.vue';
import "leaflet/dist/leaflet.css";
import { GeoJsonObject } from 'geojson';
import axios from 'axios';
type LatLngTuple = [number, number];

export default {
  computed: {
  
    
    currentLongitude() {
      if (this.markerPosition) {
        const [lat, lng] = this.markerPosition;
        return `${lng}`;
      }
      return '';
    },
    currentLatitude() {
      if (this.markerPosition) {
        const [lat, lng] = this.markerPosition;
        return `${lat}`;
      }
      return '';
    },
  },

  components: {
    LMap,
    LTileLayer,
    NavBar,
    LGeoJson,
    LMarker,
    FontAwesomeIcon,
  },
  data() {
    return {
      commentError:'',
      isCommentValid:false,
      zoom: 12,
      center: [33.8869, 9.5375] as LatLngTuple,
      markerPosition: null as LatLngTuple | null,
      tunisiaGeojson: {} as GeoJsonObject | GeoJsonObject[] | undefined,
      showForm: false,
     
      
    };
  },
  
  methods: {
    
    validateComment() {
      const commentInput = this.$refs.commentInput as HTMLInputElement;
      const comment = commentInput.value.trim();
     

      if (comment === '') {
        this. commentError = 'Please enter a comment .';
      } else {
        this. commentError = ''; 
        this.isCommentValid= true;
      }
     
    },
    onMapLoaded() {
      // Delay the zooming to allow the map tiles to load
      setTimeout(() => {
        this.zoom -= 1;
      }, 500);
    },
    handleMapClick(event) {
      if (!this.markerPosition) {
        this.markerPosition = [event.latlng.lat, event.latlng.lng];
      }
    },
    handleMarkerDragend(event) {
      this.markerPosition = [event.target._latlng.lat, event.target._latlng.lng];
      this.showForm = true; 
    },
   
    updateMarkerPosition(event) {
      // Update the marker position based on the mouse coordinates
      this.markerPosition = [event.latlng.lat, event.latlng.lng];
    },
   
   
    handleImageUpload(event) {
      const files = event.target.files;
      this.observation.images = Array.from(files);
    },
   async submitObservation(event) {
      event.preventDefault();
     
const form = new FormData();

const imagesInput = this.$refs.imagesInput as HTMLInputElement;
console.log('imagesInput:', imagesInput);
console.log('imagesInput.files:', imagesInput.files);
const imagesFiles = imagesInput.files;

console.log(imagesFiles);
    
if (imagesFiles) {
  for (let i = 0; i < imagesFiles.length; i++) {
    const file = imagesFiles[i];
    form.append('images', file);
  }
}
      const today = new Date().toLocaleDateString();
      form.append('observationJson', JSON.stringify({
       date : today,
        latitude: this.$refs.latitudeInput.value.trim(),
        longitude: this.$refs.longitudeInput.value.trim(),
       text: this.$refs.commentInput.value.trim()
        
      }));
      form.forEach((value, key) => {
        console.log(key + ': ' + value);
      });
      
      
      console.log(form);
      debugger;
  try {
  debugger;
  const response = await axios.post('https://localhost:44382/observation/add', form ,  {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
  debugger;
  window.location.href = '/home';

 
} catch (error) {

  console.log('Error occurred while submitting the form:', error);
  
  

   

}

    },
  },
};
</script>



<style scoped>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
}
.form-outline.form-light .form-label {
    color: #ffffff !important;
  }
  .bg-danger {
    background-color: #dc3545 !important;
  }
  
  .text-light {
    color: #ffffff !important;
  }
  
  .text-light-50 {
    color: rgba(255, 255, 255, 0.5) !important;
  }

  .overlay-form {
  position: absolute;
  z-index: 9999;
  height: 150px;
  width: 250px;
  top:20%;
  left:50%;
 

  transform: translate(-50%, -50%);
}
.btn-outline-light {
    color: #ffffff !important;
    border-color: #ffffff !important;
  }
  
  .btn-outline-light:hover {
    background-color: #ffffff !important;
    color: #dc3545 !important;
  }

  .form-container {
    width: 100%;
    max-width: 400px; 
    margin: 0 auto;
  }
.l-map {
  height: 100%;
}
.error-message {
  color: yellow;
}
</style>
