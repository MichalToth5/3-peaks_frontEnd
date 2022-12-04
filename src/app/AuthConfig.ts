import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'http://localhost:8080/auth/realms/your-project',
  redirectUri: 'http://localhost/admin/patient',
  clientId: 'fe-app',
  scope: 'openid profile email',
  requireHttps: false,
  showDebugInformation: true,
};
