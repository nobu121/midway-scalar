export interface ScalarConfig {
  url?: string;
  content?: string | Record<string, any> | (() => Record<string, any>);
  proxyUrl?: string;
  authentication?: {
    preferredSecurityScheme?: string | string[] | string[][];
    securitySchemes?: {
      [key: string]:
        | { name: string; in: 'header' | 'query' | 'cookie'; value?: string }
        | { token: string }
        | { username: string; password: string }
        | {
            flows?: {
              authorizationCode?: {
                token?: string;
                'x-scalar-client-id'?: string;
                clientSecret?: string;
                authorizationUrl?: string;
                tokenUrl?: string;
                'x-scalar-redirect-uri'?: string;
                'x-usePkce'?: 'SHA-256' | 'plain' | 'no';
                selectedScopes?: string[];
                'x-scalar-security-query'?: Record<string, any>;
                'x-scalar-security-body'?: Record<string, any>;
                'x-tokenName'?: string;
                'x-scalar-credentials-location'?: 'header' | 'body';
              };
              clientCredentials?: {
                token?: string;
                'x-scalar-client-id'?: string;
                clientSecret?: string;
                tokenUrl?: string;
                selectedScopes?: string[];
                'x-tokenName'?: string;
                'x-scalar-credentials-location'?: 'header' | 'body';
              };
              implicit?: {
                token?: string;
                'x-scalar-client-id'?: string;
                authorizationUrl?: string;
                'x-scalar-redirect-uri'?: string;
                selectedScopes?: string[];
                'x-tokenName'?: string;
              };
              password?: {
                token?: string;
                'x-scalar-client-id'?: string;
                clientSecret?: string;
                tokenUrl?: string;
                username?: string;
                password?: string;
                selectedScopes?: string[];
                'x-tokenName'?: string;
                'x-scalar-credentials-location'?: 'header' | 'body';
              };
            };
            'x-default-scopes'?: string[];
          };
    };
  };
  baseServerURL?: string;
  customCss?: string;
  darkMode?: boolean;
  defaultHttpClient?: { targetKey: string; clientKey: string };
  defaultOpenAllTags?: boolean;
  documentDownloadType?: 'json' | 'yaml' | 'both' | 'direct' | 'none';
  expandAllModelSections?: boolean;
  expandAllResponses?: boolean;
  favicon?: string;
  forceDarkModeState?: 'dark' | 'light';
  hideClientButton?: boolean;
  hideDarkModeToggle?: boolean;
  showOperationId?: boolean;
  hideModels?: boolean;
  hideSearch?: boolean;
  hideTestRequestButton?: boolean;
  hiddenClients?: string[] | true | Record<string, boolean | string[]>;
  isLoading?: boolean;
  layout?: 'modern' | 'classic';
  metaData?: Record<string, any>;
  operationTitleSource?: 'summary' | 'path';
  orderRequiredPropertiesFirst?: boolean;
  orderSchemaPropertiesBy?: 'alpha' | 'preserve';
  pathRouting?: { basePath: string };
  persistAuth?: boolean;
  telemetry?: boolean;
  plugins?: any[];
  searchHotKey?: string;
  servers?: Array<{
    url: string;
    description?: string;
    variables?: Record<
      string,
      { default: string; description?: string; enum?: string[] }
    >;
  }>;
  showSidebar?: boolean;
  showDeveloperTools?: 'always' | 'localhost' | 'never';
  theme?: string;
  withDefaultFonts?: boolean;
  fetch?: (
    input: string | URL | Request,
    init?: RequestInit
  ) => Promise<Response>;
  generateHeadingSlug?: (heading: { slug: string; value: string }) => string;
  generateModelSlug?: (model: { name: string }) => string;
  generateOperationSlug?: (operation: {
    method: string;
    path: string;
    operationId?: string;
    summary?: string;
  }) => string;
  generateTagSlug?: (tag: { name: string }) => string;
  generateWebhookSlug?: (webhook: { name: string; method?: string }) => string;
  tagsSorter?: 'alpha' | ((a: { name: string }, b: { name: string }) => number);
  operationsSorter?:
    | 'alpha'
    | 'method'
    | ((
        a: { method: string; path: string },
        b: { method: string; path: string }
      ) => number);
  redirect?: (path: string) => string | null | undefined;
  onBeforeRequest?: ({ request }: { request: Request }) => void | Promise<void>;
  onDocumentSelect?: () => Promise<void> | void;
  onLoaded?: (slug: string) => Promise<void> | void;
  onRequestSent?: (request: string) => void;
  onServerChange?: (server: string) => void;
  onShowMore?: (tagId: string) => void | Promise<void>;
  onSidebarClick?: (href: string) => void | Promise<void>;
  onSpecUpdate?: (spec: string) => void;
  [key: string]: any;
}
