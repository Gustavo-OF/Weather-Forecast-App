function getLocationWeather() {
            navigator.geolocation.getCurrentPosition(function (position) {
                getWeather(position.coords.latitude, position.coords.longitude).then((response) => {
                    setWeather(response);
                    setLoading(false);
                }) 
            });
        }