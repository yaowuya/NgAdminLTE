import { Component, OnInit } from '@angular/core';

import { DemoListService } from './list.service';
import * as moment from 'moment';
import * as _ from 'lodash'

import { MissionService } from '../../../services/mission.service';


@Component({
    selector: 'demo-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    providers: [DemoListService]
})
export class DemoListComponent implements OnInit {
    public list = [];


    constructor(
        private demoListService: DemoListService,
        public missionService: MissionService
    ) {
    }

    ngOnInit() {
        // this.demoListService.list().subscribe(data => {
        // console.log(data);
        this.list = [{ "name": "user-1", "age": 1, "gender": "man" }, { "name": "user-2", "age": 2, "gender": "man" }, { "name": "user-3", "age": 3, "gender": "man" }, { "name": "user-4", "age": 4, "gender": "man" }, { "name": "user-5", "age": 5, "gender": "man" }, { "name": "user-6", "age": 6, "gender": "man" }, { "name": "user-7", "age": 7, "gender": "man" }, { "name": "user-8", "age": 8, "gender": "man" }, { "name": "user-9", "age": 9, "gender": "man" }, { "name": "user-10", "age": 10, "gender": "man" }, { "name": "user-11", "age": 11, "gender": "man" }, { "name": "user-12", "age": 12, "gender": "man" }, { "name": "user-13", "age": 13, "gender": "man" }, { "name": "user-14", "age": 14, "gender": "man" }, { "name": "user-15", "age": 15, "gender": "man" }, { "name": "user-16", "age": 16, "gender": "man" }, { "name": "user-17", "age": 17, "gender": "man" }, { "name": "user-18", "age": 18, "gender": "man" }, { "name": "user-19", "age": 19, "gender": "man" }, { "name": "user-20", "age": 20, "gender": "man" }, { "name": "user-21", "age": 21, "gender": "man" }, { "name": "user-22", "age": 22, "gender": "man" }, { "name": "user-23", "age": 23, "gender": "man" }, { "name": "user-24", "age": 24, "gender": "man" }, { "name": "user-25", "age": 25, "gender": "man" }, { "name": "user-26", "age": 26, "gender": "man" }, { "name": "user-27", "age": 27, "gender": "man" }, { "name": "user-28", "age": 28, "gender": "man" }, { "name": "user-29", "age": 29, "gender": "man" }, { "name": "user-30", "age": 30, "gender": "man" }, { "name": "user-31", "age": 31, "gender": "man" }, { "name": "user-32", "age": 32, "gender": "man" }, { "name": "user-33", "age": 33, "gender": "man" }, { "name": "user-34", "age": 34, "gender": "man" }, { "name": "user-35", "age": 35, "gender": "man" }, { "name": "user-36", "age": 36, "gender": "man" }, { "name": "user-37", "age": 37, "gender": "man" }, { "name": "user-38", "age": 38, "gender": "man" }, { "name": "user-39", "age": 39, "gender": "man" }, { "name": "user-40", "age": 40, "gender": "man" }, { "name": "user-41", "age": 41, "gender": "man" }, { "name": "user-42", "age": 42, "gender": "man" }, { "name": "user-43", "age": 43, "gender": "man" }, { "name": "user-44", "age": 44, "gender": "man" }, { "name": "user-45", "age": 45, "gender": "man" }, { "name": "user-46", "age": 46, "gender": "man" }, { "name": "user-47", "age": 47, "gender": "man" }, { "name": "user-48", "age": 48, "gender": "man" }, { "name": "user-49", "age": 49, "gender": "man" }, { "name": "user-50", "age": 50, "gender": "man" }];
        // });
    }
}