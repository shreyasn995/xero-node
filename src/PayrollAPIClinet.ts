import { BaseAPIClient, XeroClientConfiguration } from './internals/BaseAPIClient';
import { AccessToken, IOAuth1HttpClient } from './internals/OAuth1HttpClient';

export class PayrollAPIClient extends BaseAPIClient {
    public constructor(options: XeroClientConfiguration, authState?: AccessToken, _oAuth1HttpClient?: IOAuth1HttpClient) {
		super(options, authState, { apiBasePath: '/payroll.xro/1.0/' }, _oAuth1HttpClient);
    }
    
    public employees = {
		get: async (args?: { EmployeeID?: string }): Promise<object> => {
			let endpoint = 'Employees';
			if (args && args.EmployeeID) {
				endpoint = endpoint + '/' + args.EmployeeID;
			}

			return this.oauth1Client.get<Response>(endpoint);
		}
	};
}