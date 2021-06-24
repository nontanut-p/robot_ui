import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
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
	const center = [14.081774254281205, 100.59961344556987]
	const position = [14.082434222082048, 100.60099076357807]

	const limeOptions = { color: 'lime' }
	const polyline = [
		[14.081266711466936, 100.59834136621674],
		[14.08220741492897, 100.59832783345767],
		[14.082211790284868, 100.59871126163148],
		[14.081297339082539, 100.59874734898902],
		[14.081257960718867, 100.59905409152807],
		[14.082277420613126, 100.59906762428713],
		[14.082255543839139, 100.59936083406713],
		[14.081266711466936, 100.59934279038836],
		[14.081288588335639, 100.59967208752587],
		[14.082281795967678, 100.59971268580308],
		[14.082273045258498, 100.60001491742246],
		[14.08125358534471, 100.59997883006493],
		[14.081227333097997, 100.60033519272058],
		[14.082229291707574, 100.60034872547966],
		[14.082321174154828, 100.6006644898581],
		[14.081227333097997, 100.60076824101102],
		[14.081257960718867, 100.60104791803191],
		[14.082325549508539, 100.60099829791531],


	]
	return (

		<MapContainer

			className='rounded-xl border-2 	'
			center={center}
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
					I'M A R O B O T
				</Popup>
			</Marker>
			<Polyline pathOptions={limeOptions} positions={polyline} />
		</MapContainer>


	);
}

export default Maps;
