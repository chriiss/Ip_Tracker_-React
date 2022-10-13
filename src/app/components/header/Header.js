import { useState } from 'react';
import Styles from "../../styles/App.module.css";
import ArrowIcon from "../../assets/icon-arrow.svg";
import DataJson from "../../data/Data.json";

const Header = ({ipCatch, ip, country, region, timezone, isp}) => {
    const headerData = DataJson.headerComponent;
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    }
    const submitIp = (e) => {
        ipCatch(input);
        e.preventDefault();
        setInput("");
    }
    return(
        <div className={Styles.bg_header}>
            <h1>{headerData.title}</h1>
            <form onSubmit={submitIp}>
                <input type="search" placeholder={headerData.placeholder} value={input} onChange={handleInput}/>
                <button type="submit"><img src={ArrowIcon} alt="arrow icon"/></button>
            </form>
            <div className={Styles.container}>
                <div>
                    <h3>{headerData.ip}</h3>
                    <p>{ip}</p>
                </div>
                <div>
                    <h3>{headerData.location}</h3>
                    <p>{region} {country}</p>
                </div>
                <div>
                    <h3>{headerData.timezone}</h3>
                    <p>utc {timezone}</p>
                </div>
                <div>
                    <h3>{headerData.isp}</h3>
                    <p>{isp}</p>
                </div>
            </div>
        </div>
    )
}

export default Header;