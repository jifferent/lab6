/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
	'projects': [
		{ 	'name': '1',
		    'image': '1.jpg',
		    'id': 'project1'
		},
		{ 	'name': '2',
			'image': '2.jpg',
			'id': 'project2'
		},
		{ 	'name': '3',
			'image': '3.jpg',
			'id': 'project3'
		},
		{ 	'name': '4',
			'image': '4.jpg',
			'id': 'project4'
		},
		{ 	'name': '5',
			'image': '5.jpg',
			'id': 'project5'
		},
		{ 	'name': '6',
			'image': '6.jpg',
			'id': 'project6'
		},
		{ 	'name': '7',
			'image': '7.jpg',
			'id': 'project7'
		},
		{ 	'name': '8',
			'image': '8.jpg',
			'id': 'project8'
		}    	
	]
  });
};
