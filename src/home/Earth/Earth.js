import {Helmet} from "react-helmet";
import { useState, useEffect, useRef, useMemo } from 'react';
import {propagate, twoline2satrec, gstime, eciToGeodetic, radiansToDegrees} from 'satellite.js';
import Globe from 'react-globe.gl';
import * as THREE from 'three';

import './style.css'


const World = () => {
const EARTH_RADIUS_KM = 6371; // km
const SAT_SIZE = 100; // km
const TIME_STEP = 50; // per frame

const globeEl = useRef();
const [satData, setSatData] = useState();
const [globeRadius, setGlobeRadius] = useState();
const [time, setTime] = useState(new Date());
const [play, setPlay] = useState(true);

useEffect(() => {
    // time ticker
    (function frameTicker() {
        requestAnimationFrame(frameTicker);
        setTime(time => new Date(+time + TIME_STEP));
    })();
}, []);

useEffect(() => {
    // load satellite data
    fetch('//unpkg.com/globe.gl/example/datasets/space-track-leo.txt').then(r => r.text()).then(rawData => {
    const tleData = rawData.replace(/\r/g, '')
        .split(/\n(?=[^12])/)
        .filter(d => d)
        .map(tle => tle.split('\n'));
    const satData = tleData.map(([name, ...tle]) => ({
        satrec: twoline2satrec(...tle),
        name: name.trim().replace(/^0 /, '')
    }))
    // exclude those that can't be propagated
    .filter(d => !!propagate(d.satrec, new Date()).position)
    .slice(0, 1500);

    setSatData(satData);
    });
}, []);

const objectsData = useMemo(() => {
    if (!satData) return [];

    // Update satellite positions
    const gmst = gstime(time);
    return satData.map(d => {
    const eci = propagate(d.satrec, time);
    if (eci.position) {
        const gdPos = eciToGeodetic(eci.position, gmst);
        const lat = radiansToDegrees(gdPos.latitude);
        const lng = radiansToDegrees(gdPos.longitude);
        const alt = gdPos.height / EARTH_RADIUS_KM;
        return { ...d, lat, lng, alt };
    }
    return d;
    });
}, [satData, time]);

const satObject = useMemo(() => {
    if (!globeRadius) return undefined;

    const satGeometry = new THREE.OctahedronGeometry(SAT_SIZE * globeRadius / EARTH_RADIUS_KM / 2, 0);
    const satMaterial = new THREE.MeshLambertMaterial({ color: 'palegreen', transparent: true, opacity: 0.7 });
    return new THREE.Mesh(satGeometry, satMaterial);
}, [globeRadius]);

useEffect(() => {
    setGlobeRadius(globeEl.current.getGlobeRadius());
    globeEl.current.pointOfView({ altitude: 2.1 });
}, []);

return <div className="crop">
    <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        objectsData={objectsData}
        objectLabel="name"
        objectLat="lat"
        objectLng="lng"
        objectAltitude="alt"
        objectThreeObject={satObject}
        backgroundColor="#111111"
        height={window.innerHeight-50}
        width={window.innerWidth*1.3}
      />
    <div id="time-log">{time.toString()}</div>
</div>;
}

export default World;