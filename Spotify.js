define( [ "qlik"
],
function ( qlik) {

	return {
		support : {
			snapshot: true,
			export: true,
			exportData : false
		},
		
		initialProperties : {
			uri : 'spotify:user:spotify:playlist:3rgsDhGHZxZ9sB9DQWQfuf' //spotify:user:spotify:playlist:3rgsDhGHZxZ9sB9DQWQfuf is a sample Spotify URI
		},
	
		definition : {
			type : "items",
			component : "accordion",
			items : {
				settings : {
					uses : "settings",
					items : {
						uri : {
							ref : "uri",
							expression:"optional",
							type : "string",
							label : "Spotify URI"
						},
						theme: {
							ref: "theme",
							type: "string",
							component: "dropdown",
							label: "Theme",
							show: true,
							options: 
							[ {
										value: "white",
										label: "White"
									}, {
										value: "",
										label: "Dark"
									}
									
								],
									defaultValue: "white"
								}
					}
				},
				addons: {
					uses: "addons"
				}
			}
		},
		
		paint: function ($element,layout) {
			//add your rendering code here
			//$element.html( "Spotify" );
			var source = "'//open.spotify.com/embed?uri=" + layout.uri +"&theme=" + layout.theme + "'";
			$element.html("<iframe src=" + source + " width=100% height=100% frameborder=0 allowtransparency=true></iframe>");
			//needed for export
			return qlik.Promise.resolve();
		}
	};

} );

