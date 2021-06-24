import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import DriftMarker from 'leaflet-drift-marker';
function Maps({ long, lat }) {
	//  Create the Icon
	const LeafIcon = L.Icon.extend({
		options: {},
	});

	const blueIcon = new LeafIcon({
		iconUrl:
			'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF',
	}),
		greenIcon = new LeafIcon({
			iconUrl:
				'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF',
		});

	//  Use the state hook:
	const icon = blueIcon;
	let position = [14.078291798078023, 100.60221644781316]
	position[0] = lat

	return (

		<MapContainer

			className='rounded-xl border-2 	'
			center={[14.078291798078023, 100.60221644781316]}
			//14.078291798078023, 100.60221644781316
			zoom={20}
			scrollWheelZoom={true}
		>
			<TileLayer

				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={position} icon={icon} >
				<Popup >
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>

		</MapContainer>


	);
}

export default Maps;
