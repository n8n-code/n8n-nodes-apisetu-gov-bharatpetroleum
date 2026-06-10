import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisetuGovBharatpetroleum implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apisetu Gov Bharatpetroleum',
		name: 'N8nDevApisetuGovBharatpetroleum',
		icon: { light: 'file:./apisetu-gov-bharatpetroleum.svg', dark: 'file:./apisetu-gov-bharatpetroleum.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'BPCL eSubscription Vouchers for LPG connections are available in citizens\' DigiLocker accounts.',
		defaults: { name: 'Apisetu Gov Bharatpetroleum' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevApisetuGovBharatpetroleumApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				}
			],
			"default": ""
		},
		...apIsDescription
		],
	};
}
