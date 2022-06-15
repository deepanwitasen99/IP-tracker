const lookup = document.querySelector(".search");
const ipAdd = document.querySelector(".ip_display");
const locationDisplay = document.querySelector(".loc_display");
const geoDisplay = document.querySelector(".geo_display");
const timeDisplay = document.querySelector(".time_display");

lookup.addEventListener("click", () => {
    axios.get("https://ipapi.co/json/").then(response=>{
        //console.log(response);
        ipAdd.textContent = `IP Address: ${response.data.ip}`;
        //console.log(response);
        locationDisplay.textContent = `Location: ${response.data.city}, ${response.data.region}, ${response.data.country_name}`;
        geoDisplay.textContent = `Geo Location: ${response.data.latitude}, ${response.data.longitude}`
        timeDisplay.textContent = `Time Zone: ${response.data.timezone}`
    });
});
