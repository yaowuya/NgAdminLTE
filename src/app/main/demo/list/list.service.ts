import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../common/services/http-client.service';

@Injectable()
export class DemoListService {

	constructor(
		public httpClient: HttpClientService
	) { }

	list() {
		let postBody = {}
		return this.httpClient.get('api/v1/wechat/list', postBody, {
			isAuthHttp: false
		});
	}

}
