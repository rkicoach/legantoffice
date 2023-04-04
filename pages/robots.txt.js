import React from 'react'
import { readFileSync } from 'fs';
import { join } from 'path';

const text = readFileSync(join(__dirname,'../static', 'robots.txt'), 'utf8');

export default class extends React.Component {

	  static async getInitialProps ({res}) {
		      console.log("Called Robots.txt ................");
		       res.write(text)
		       res.end()
		    }

}

