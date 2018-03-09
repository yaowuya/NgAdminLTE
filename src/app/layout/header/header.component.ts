import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HeaderService } from './header.service';
import io from 'socket.io-client/dist/socket.io.js';
import { MissionService } from '../../services/mission.service';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	providers: [HeaderService]
})
export class AppHeaderComponent implements OnInit {

	@Input() public layoutMode: String = "";

	@Input() public links: Array<any> = [];

	@Input() public currentUrl: String = "";

	@Input() public nav;

	@Input() public user;

	completeCount: any;
	public server: String = environment.server;
	constructor(
		public router: Router,
		public headerService: HeaderService,
		public missionService: MissionService
	) {

	}

	removeSession(){
		
	}

	ngOnInit() {
		let that = this;
	}
}
