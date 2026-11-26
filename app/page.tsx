'use client';
import { useMemo, useState } from "react";
import Link from "next/link";

const airports = [
 {city:"Delhi",name:"Indira Gandhi International Airport",code:"DEL",country:"India"},
 {city:"Mumbai",name:"Chhatrapati Shivaji Maharaj International Airport",code:"BOM",country:"India"},
 {city:"Bengaluru",name:"Kempegowda International Airport",code:"BLR",country:"India"},
 {city:"Hyderabad",name:"Rajiv Gandhi International Airport",code:"HYD",country:"India"},
 {city:"Chennai",name:"Chennai International Airport",code:"MAA",country:"India"},
 {city:"Kolkata",name:"Netaji Subhas Chandra Bose International Airport",code:"CCU",country:"India"},
 {city:"Goa",name:"Manohar International Airport",code:"GOX",country:"India"},
 {city:"Pune",name:"Pune Airport",code:"PNQ",country:"India"},
 {city:"Dubai",name:"Dubai International Airport",code:"DXB",country:"UAE"},
 {city:"Singapore",name:"Singapore Changi Airport",code:"SIN",country:"Singapore"},
 {city:"London",name:"Heathrow Airport",code:"LHR",country:"United Kingdom"},
 {city:"New York",name:"John F. Kennedy International Airport",code:"JFK",country:"USA"},
 {city:"Bangkok",name:"Suvarnabhumi Airport",code:"BKK",country:"Thailand"},
 {city:"Paris",name:"Charles de Gaulle Airport",code:"CDG",country:"France"}
];
function AirportInput({label,value,onChange,placeholder}:{label:string,value:string,onChange:(v:string)=>void,placeholder:string}) {
 const [open,setOpen]=useState(false);
 const matches=useMemo(()=>airports.filter(a=>(a.city+" "+a.code+" "+a.name).toLowerCase().includes(value.toLowerCase())).slice(0,6),[value]);
 return <div className="field airport-field"><label>{label}</label><input value={value} placeholder={placeholder} onFocus={()=>setOpen(true)} onChange={e=>{onChange(e.target.value);setOpen(true)}} onBlur={()=>setTimeout(()=>setOpen(false),140)} />
 {open && value && <div className="suggestions">{matches.length ? matches.map(a=><button type="button" key={a.code} onMouseDown={()=>{onChange(a.city+" ("+a.code+")");setOpen(false)}}><span className="suggest-icon">✈</span><span><b>{a.city}</b><small>{a.name} · {a.country}</small></span><strong>{a.code}</strong></button>) : <p>No matching airport found. Try a city or airport code.</p>}</div>}
 </div>;
}
export default function Home(){
 const [from,setFrom]=useState("Delhi (DEL)"),[to,setTo]=useState("Mumbai (BOM)");
 const [trip,setTrip]=useState("round"),[depart,setDepart]=useState(""),[ret,setRet]=useState(""),[travellers,setTravellers]=useState("1"),[cabin,setCabin]=useState("Economy");
 const [notice,setNotice]=useState("");
 function search(e:React.FormEvent){e.preventDefault();if(!from||!to||!depart){setNotice("Please select your origin, destination and departure date.");return;}if(from===to){setNotice("Origin and destination cannot be the same.");return;}setNotice("Your search form is ready. Connect a flight-search API to retrieve live fares and bookable flights.");}
 return <><section className="hero"><div className="hero-glow"></div><div className="container hero-content"><div className="eyebrow"><span className="eyebrow-dot"></span> YOUR JOURNEY STARTS HERE</div><h1>Find your next flight.<br/><em>Go somewhere amazing.</em></h1><p className="hero-copy">Compare your travel options and discover journeys worth taking.</p>
 <div className="search-card" id="search"><div className="search-top"><div><span className="search-label">FLIGHT SEARCH</span><h2>Where would you like to go?</h2></div><div className="trip-tabs"><button className={trip==="round"?"active":""} onClick={()=>setTrip("round")}>Round trip</button><button className={trip==="one"?"active":""} onClick={()=>setTrip("one")}>One way</button></div></div>
 <form onSubmit={search}><div className="route-fields"><AirportInput label="FROM" value={from} onChange={setFrom} placeholder="City or airport"/><button type="button" className="swap" aria-label="Swap cities" onClick={()=>{setFrom(to);setTo(from)}}>⇄</button><AirportInput label="TO" value={to} onChange={setTo} placeholder="Where to?"/></div>
 <div className="detail-fields"><div className="field"><label>DEPARTURE</label><input required type="date" value={depart} min={new Date().toISOString().slice(0,10)} onChange={e=>setDepart(e.target.value)}/></div>{trip==="round"&&<div className="field"><label>RETURN</label><input type="date" min={depart||new Date().toISOString().slice(0,10)} value={ret} onChange={e=>setRet(e.target.value)}/></div>}<div className="field"><label>TRAVELLERS</label><select value={travellers} onChange={e=>setTravellers(e.target.value)}>{["1","2","3","4","5","6","7","8","9"].map(n=><option key={n} value={n}>{n} {n==="1"?"Traveller":"Travellers"}</option>)}</select></div><div className="field"><label>CLASS</label><select value={cabin} onChange={e=>setCabin(e.target.value)}><option>Economy</option><option>Premium Economy</option><option>Business</option><option>First</option></select></div></div>
 <button className="search-button" type="submit">Search flights <span>→</span></button>{notice&&<p className="notice" role="status">{notice}</p>}
 </form><p className="search-footnote">✦ Suggestions are illustrative. Live fares require a connected flight provider.</p></div>
 <div className="trust-row"><span>✦ Easy destination search</span><span>✦ Simple trip planning</span><span>✦ Clear travel information</span></div></div></section>
 <section className="section container"><div className="section-heading"><div><span className="kicker">GET INSPIRED</span><h2>Popular destinations</h2></div><p>Some ideas for your next getaway.</p></div><div className="destination-grid">{[["Dubai","UAE","DXB","01"],["Singapore","Singapore","SIN","02"],["Goa","India","GOX","03"],["Bangkok","Thailand","BKK","04"]].map(([city,country,code,num])=><Link className="destination-card" href={"/flights?to="+code} key={code}><span className="destination-num">{num}</span><div><h3>{city}</h3><p>{country} · {code}</p></div><span className="destination-arrow">↗</span></Link>)}</div></section>
 <section className="why"><div className="container why-inner"><div><span className="kicker">TRAVEL WITH CLARITY</span><h2>A simpler way to<br/>plan your journey.</h2></div><div className="why-items"><div><b>01</b><span><strong>Search with ease</strong><small>Find cities and airports using helpful suggestions.</small></span></div><div><b>02</b><span><strong>Explore options</strong><small>Review travel choices once a flight provider is connected.</small></span></div><div><b>03</b><span><strong>Stay informed</strong><small>Read our policies and verify final details before purchase.</small></span></div></div></div></section>
 <section className="bottom-cta container"><div><span className="kicker">READY WHEN YOU ARE</span><h2>Your next story begins with a destination.</h2></div><Link className="nav-cta" href="/flights">Explore flights ↗</Link></section></>;
}
