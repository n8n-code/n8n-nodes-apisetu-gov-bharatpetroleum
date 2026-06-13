import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovBharatpetroleumApi implements ICredentialType {
        name = 'N8nDevApisetuGovBharatpetroleumApi';

        displayName = 'Apisetu Gov Bharatpetroleum API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovBharatpetroleum/apisetu-gov-bharatpetroleum.svg', dark: 'file:../nodes/ApisetuGovBharatpetroleum/apisetu-gov-bharatpetroleum.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/bharatpetroleum/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/bharatpetroleum/v3',
                        description: 'The base URL of your Apisetu Gov Bharatpetroleum API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
