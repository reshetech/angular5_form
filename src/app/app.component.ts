import { Component, ViewChild } from '@angular/core';

import { CarModel } from './car-model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'car model';

	motors = ['petrol', 'electric', 'unknown'];

	carModel = new CarModel(1, '', '', false);

	submitted = false;

	onSubmit(){
		console.log(this.trackName);
		this.submitted = true;
	}

	getCurrentModel() {
		return JSON.stringify(this.carModel);
	}
}
