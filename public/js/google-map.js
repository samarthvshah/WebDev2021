// Initialize and add the map
function initMap() {
    // The location of Cupertino
    const cupertino = { lat: 37.3230, lng: -122.0322 };
    const rancho = {lat: 37.33628644779267, lng: -122.10783454285563}
    const mainStreet = {lat: 37.32513227345443, lng: -122.01068361233949}
    const shoreline = {lat : 37.398454548407784,lng: -122.06318562847115}
    // The map, centered at Cupertino
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: cupertino,
    });
    // The marker, positioned at Popular Locations
    const marker = new google.maps.Marker({
        position: cupertino,
        map: map,
    });
    const marker2 = new google.maps.Marker({
        position: rancho,
        map: map,
    });
    const marker3 = new google.maps.Marker({
        position: mainStreet,
        map: map,
    });
    const marker4 = new google.maps.Marker({
        position: shoreline,
        map: map,
    });
}