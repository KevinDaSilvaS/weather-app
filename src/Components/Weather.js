import React from 'react'

class Weather extends React.Component{

    constructor(props){
        super(props);

        this.state = new Object();
        this.state.query = "";
        this.state.response = {"coord":{"lon":-0.13,"lat":51.51},
        "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],
        "base":"stations","main":{"temp":19.43,"feels_like":15.88,"temp_min":18.89,"temp_max":20,
        "pressure":1022,"humidity":40},"visibility":10000,"wind":{"speed":3.6,"deg":250},
        "clouds":{"all":93},"dt":1589735657,"sys":{"type":1,"id":1414,"country":"GB",
        "sunrise":1589688320,"sunset":1589744925},"timezone":3600,"id":2643743,
        "name":"London","cod":200};

    }

    queryManager = (event) =>{
        
        this.setState({query : event.target.value});
    }

    manageEnter = (event) =>{
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.query}&units=metric&APPID=0541fc99977dedf06658a396f208f654`;

        if (event.key === "Enter") {
            fetch(url, {mode: 'cors'})
            .then(res=>res.json())
            .then(json => {
                this.setState({response:json})
                console.log(json);
            });
        }
    }

    render(){
        const resp = this.state.response;
        const wrapper = "wrapper";
        let bgClass = "";
        if (resp["main"]["temp"] < 20) {
            bgClass = "cold";
        }

        if (resp.weather[0]["main"] === "Rain") {
            bgClass = "rain";
        }

        const classes = wrapper + " " + bgClass;

        return(
            <div className={classes}>
                <div className="card card-content card-background">
                    <main className="row">
                        <div className="col s1 m1 l1"></div>
                        <div className=" col s10 m10 l10">
                            <div className="center-align ">-</div>
                            <input className="search-bar" type="text" 
                            placeholder="search for a location" 
                            onChange={this.queryManager}
                            onKeyPress={this.manageEnter}
                            />
                        </div>
                        <div className="col s1 m1 l1"></div>
                    </main>
                    
                </div>
                <div className="location-box">
                    <div className="weather">{resp.weather[0]["main"]}</div>
                    <div><h1 className="temperature">{resp["main"]["temp"]}°C</h1></div>
                    <div className="location">{resp["name"]},{resp["sys"]["country"]}</div>
                </div>
            </div>
        );
    }
}

export default Weather;