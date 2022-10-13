import { useState } from 'react';
import Header from "./header/Header";
import Maps from "./maps/Maps";
import REACT_APP_API_KEY from "../Env";

const ipInfo = {
    ip: "",
    isp: "",
    country: "",
    region: "",
    timezone: "",
    lat: "",
    lng: ""
}

const Home = () => {
    const [dataIp, setDataIp] = useState(ipInfo);
    const checkIpAddress = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
    const checkDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/
    const getData = async(ip) => {
        const result  = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${REACT_APP_API_KEY}&${
            checkIpAddress.test(ip)
              ? `ipAddress=${ip}`
              : checkDomain.test(ip)
              ? `domain=${ip}`
              : ""
        }`);
        const data = await result.json();
        setDataIp({
            ip: data.ip,
            isp: data.isp,
            country: data.location.country,
            region: data.location.region,
            timezone: data.location.timezone,
            lat: data.location.lat,
            lng: data.location.lng,
        });
    }
    const ipSetting = (newInput) => {
        getData(newInput);
    }
    return(
        <>
            <header>
                <Header ipCatch={ipSetting} ip={dataIp.ip} region={dataIp.region} country={dataIp.country} timezone={dataIp.timezone} isp={dataIp.isp} />
            </header>
            <main>
                <Maps latitude={dataIp.lat} longitude={dataIp.lng}/>
            </main>
        </>

    )
}

export default Home;